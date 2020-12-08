import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const App = () => {
  const BASE_URL = "https://randomuser.me/api/";
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const userData = useRef();
  const infoContent = useRef();

  useEffect(() => {
    getRandomUser();
  }, []);

  const getRandomUser = () => {
    setIsLoading(true);

    Axios.get(BASE_URL)
      .then((response) => response.data.results[0])
      .then((data) => {
        const {
          name: { first, last },
          email,
          registered: { age },
          location: {
            street: { number, name },
          },
          phone,
          login: { password },
          picture: { large },
        } = data;

        setPerson({
          first,
          last,
          email,
          age,
          number,
          name,
          phone,
          password,
          large,
        });

        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const showData = (e) => {
    const dataName = e.target.getAttribute("data-name");
    const infoText = infoContent.current;
    const dataText = userData.current;
    if (dataName === "username") {
      infoText.innerHTML = "My Name Is:";
      dataText.innerHTML = `${person.first} ${person.last}`;
    }
    if (dataName === "email") {
      infoText.innerHTML = "My Email Is:";
      dataText.innerHTML = `${person.email}`;
    }
    if (dataName === "dob") {
      infoText.innerHTML = "My Age Is:";
      dataText.innerHTML = `${person.age}`;
    }
    if (dataName === "location") {
      infoText.innerHTML = "My Location Is:";
      dataText.innerHTML = `${person.number} ${person.name}`;
    }
    if (dataName === "phone") {
      infoText.innerHTML = "My Phone Is:";
      dataText.innerHTML = `${person.phone}`;
    }
    if (dataName === "password") {
      infoText.innerHTML = "My Name Is:";
      dataText.innerHTML = `${person.password}`;
    }
  };

  return (
    <div className="contianer">
      <div className="main">
        <div className="person-card">
          <div className="person-card-header">
            <div className="person-img-box">
              <img
                src={person.large}
                alt={`${person.first} ${person.last}`}
                className="person-img"
              />
            </div>
          </div>
          <div className="person-card-body">
            <p className="info-content" ref={infoContent}>
              My Name is:
            </p>
            <p className="user-data" ref={userData}>
              {`${person.first} ${person.last}`}
            </p>
          </div>
          <div className="person-card-bottom">
            <div className="icons">
              <button
                className="icon"
                data-name="username"
                onMouseOver={(e) => showData(e)}
              >
                <FaUser data-name="username" onMouseOver={(e) => showData(e)} />
              </button>
              <button
                className="icon"
                data-name="email"
                onMouseOver={(e) => showData(e)}
              >
                <FaEnvelopeOpen
                  data-name="email"
                  onMouseOver={(e) => showData(e)}
                />
              </button>
              <button
                className="icon"
                data-name="dob"
                onMouseOver={(e) => showData(e)}
              >
                <FaCalendarTimes
                  data-name="dob"
                  onMouseOver={(e) => showData(e)}
                />
              </button>
              <button
                className="icon"
                data-name="location"
                onMouseOver={(e) => showData(e)}
              >
                <FaMap data-name="location" onMouseOver={(e) => showData(e)} />
              </button>
              <button
                className="icon"
                data-name="phone"
                onMouseOver={(e) => showData(e)}
              >
                <FaPhone data-name="phone" onMouseOver={(e) => showData(e)} />
              </button>
              <button
                className="icon"
                data-name="password"
                onMouseOver={(e) => showData(e)}
              >
                <FaLock data-name="password" onMouseOver={(e) => showData(e)} />
              </button>
            </div>
            <button className="btn-bottom" onClick={() => getRandomUser()}>
              {isLoading ? "Loading..." : "Random User"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
