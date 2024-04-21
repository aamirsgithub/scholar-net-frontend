import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const FooterCard = () => {
  return (
    <MDBFooter className="text-center" color="white" style={{ backgroundColor: '#000' }}>
      <MDBContainer className="p-4" style={{ backgroundColor: '#000' }}>
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Join our community of learners and explore new skills, deepen
            existing passions, and get lost in creativity. What you find just
            might surprise and inspire you.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Courses</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Browse Courses
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Community</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Scholarships
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Resources</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Tutorials & Guides
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Professional Development
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Support</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Pricing and Plans
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Feedback
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="">
          Fast National University Cfd x ScholarNet.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default FooterCard;
