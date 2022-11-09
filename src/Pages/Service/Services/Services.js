import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  // const { data } = useLoaderData();
  // console.log(data);

  return (
    <div>
      <h1 className="text-center">All Meal Items</h1>
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-7">
          {services.map((serve) => (
            // <ServiceCard>
            //   key={serve._id}
            //   serve={serve}
            // </ServiceCard>
            <div className="col">
              <div class="card">
                <img
                  src={serve.url}
                  class="card-img-top"
                  alt="Fissure in Sandstone"
                  style={{ height: 300 }}
                />
                <div class="card-body">
                  <h5 class="card-title">{serve.price}</h5>
                  <p class="card-text">
                    {serve.description.length > 100
                      ? serve.description.slice(0, 100) + "..."
                      : serve.description}
                  </p>
                  <Link className="link" to={`/services/${serve._id}`}>
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
