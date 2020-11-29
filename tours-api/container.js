import React, { useState, useEffect } from "react";
import Card from "./card";
import Axios from "axios";

const Container = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const BASE_URL = "https://course-api.com/react-tours-project";

  useEffect(() => {
    Axios.get(BASE_URL)
      .then((response) => response.data)
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error"));
  }, []);

  const removeTour = (id) => {
    setTours((tours) => {
      return tours.filter((tour) => tour.id !== id);
    });
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="tour-container">
          <h1 className="container-header">Our Tours</h1>
          <div className="container-header-bottom-line"></div>
          {tours.map((tour) => {
            return (
              <section key={tour.id} className="tour-card shadow">
                <Card tour={tour} removeTour={removeTour} />
              </section>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Container;
