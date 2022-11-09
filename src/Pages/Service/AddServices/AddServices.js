import React from "react";

const AddServices = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      service: __dirname,
      serviceName: name,
      url: url,
      ratings: ratings,
      price: price,
      description: description,
    };

    fetch("http://localhost:5000/addServices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Items Added");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <div>
      <h1>Add Meals</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label class="form-label" for="typeText">
                Add Items
              </label>
              <input
                name="name"
                type="text"
                id="typeText"
                class="form-control"
                required
              />
              <div>
                <label class="form-label" for="typeURL">
                  Image URL
                </label>
                <input
                  name="url"
                  type="url"
                  id="typeURL"
                  class="form-control"
                  required
                />
              </div>
              <div>
                <label class="form-label" for="typeNumber">
                  Ratings
                </label>
                <input
                  name="ratings"
                  type="number"
                  id="typeNumber"
                  class="form-control"
                />
              </div>
              <div>
                <label class="form-label" for="typeNumber">
                  Price
                </label>
                <input
                  name="price"
                  type="number"
                  id="typeNumber"
                  class="form-control"
                  required
                />
              </div>
              <div>
                <label class="form-label" for="textAreaExample">
                  Description
                </label>
                <textarea
                  name="description"
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  required
                ></textarea>
                <input class="btn" type="submit" value="Add" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
