import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51OyjaR2MF1b2cpWmHE9ReB5nQG9C5phOaBJ4CD2R5fpk2jEvNOuLz2I3lRdrOxk4K054J4dJgSqdHqWK5bQXvsDn00k9N2lMI0');

const SubscriptionForm = () => {
  const [priceId, setPriceId] = useState('price_1234567890');
  const [customer, setCustomer] = useState(null);
  const [cardElement, setCardElement] = useState(null);
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const stripe = await stripePromise;
    console.log(cardElement)
    const cardElementRef = elements.getElement(CardElement);
    console.log(elements.getElement(CardElement))


    
  try {
    // Create a payment method
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: CardElement,
    });

    if (error) {
      console.error('Error creating payment method:', error);
      return;
    }

    console.log(paymentMethod); // Log paymentMethod after it's been assigned

    // ... rest of the code
  } catch (err) {
    console.error('An error occurred during submission:', err);
  }

    const subscription = await fetch('http://localhost:5000/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        customer: "asad@gmail.com", // Make sure customer is set before calling this
        paymentMethod: paymentMethod, // Use the payment method id
      }),
    });
  
    const subscriptionData = await subscription.json();

    // Handle the subscription data here
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <select value={priceId} onChange={(event) => setPriceId(event.target.value)}>
          <option value="price_1234567890">Monthly Plan</option>
          <option value="price_9876543210">Yearly Plan</option>
        </select>

        <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
  onChange={(event) => setCardElement(event)}
/>
        <button type="submit">Subscribe</button>
      </form>
    </Elements>
  );
};

export default SubscriptionForm;