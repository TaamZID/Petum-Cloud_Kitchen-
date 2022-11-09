import React, { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
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

const MyReviews = () => {
  const [revw, setRevw] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setRevw(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h3 className="text-center">My Reviews</h3>
      {user?.uid ? (
        <MDBContainer className="py-5 mr-4">
          <MDBRow className="text-center d-flex align-items-stretch">
            <MDBCol
              md="4"
              className="mb-5 mr-4 mb-md-0 d-flex align-items-stretch"
            >
              {revw.map((r) =>
                user?.uid === r.uid ? (
                  <MDBCard className="testimonial-card">
                    <div
                      className="card-up"
                      style={{ backgroundColor: "#7a81a8" }}
                    ></div>
                    <div className="avatar mx-auto bg-white">
                      <img src={r.image} className="rounded-circle img-fluid" />
                    </div>
                    <MDBCardBody>
                      <h4 className="mb-4">{r.name}</h4>
                      <hr />
                      <p>{r.serviceName}</p>
                      <p className="dark-grey-text mt-4">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        {r.description}
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                ) : (
                  <div></div>
                )
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MyReviews;
