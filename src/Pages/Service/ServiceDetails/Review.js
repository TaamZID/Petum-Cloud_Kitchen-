import React, { useContext } from "react";
import "./Review.css";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        {user?.uid ? (
          <h1 className="text-center">Logged in</h1>
        ) : (
            <h3 className="text-center">
                Please login to review item! 
                <Link className="link" to="/login">
                    Login
                </Link>
            </h3>
        )}
      </div>
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
            <h3 className="mb-4">Reviews</h3>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center d-flex align-items-stretch">
          <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
            <MDBCard className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img src="" className="rounded-circle img-fluid" />
              </div>
              <MDBCardBody>
                <h4 className="mb-4">Maria Smantha</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Review;
