


// replacing cart context and do this in parent component

// import React, { useState, useEffect } from 'react';
// // Import other necessary components and hooks

// const App = () => {
//   const [cart, setCart] = useState(() => {
//     // Load cart from local storage or initialize to empty array
//     const savedCart = localStorage.getItem('cart');
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   const addToCart = (courseID, image, course_name, creator, discounted_price, category) => {
//     // Implement add to cart logic
//     const updatedCart = [...cart, {courseID, image, course_name, creator, discounted_price, category}];
//     setCart(updatedCart);
//   };

//   const removeFromCart = (courseID) => {
//     // Implement remove from cart logic
//     const updatedCart = cart.filter(item => item.courseID !== courseID);
//     setCart(updatedCart);
//   };

//   const clearCart = () => {
//     // Clear the cart
//     setCart([]);
//   };

//   useEffect(() => {
//     // Persist cart to local storage on change
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Pass state and updater functions as props to child components
//   return (
//     // Render your application, passing cart, addToCart, removeFromCart, clearCart as needed
//   );
// };

// export default App;
