import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions/user";
import { FaSearch } from "react-icons/fa";
import WarningModal from "./warningModal";
import { useSelector } from "react-redux";

const SearchBar = ({ dispatch }) => {
  //const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [isWarning, setIsWarning] = useState(false);
  const { error } = useSelector((state) => state.User);

  const searchUser = () => {
    if (!username) {
      document.querySelectorAll(".row").forEach((item) => {
        item.classList.add("row-down");
      });
      setIsWarning(true);
      setTimeout(() => {
        document.querySelectorAll(".row").forEach((item) => {
          item.classList.remove("row-down");
        });
      }, 2000);
    } else {
      dispatch(getUser(username));
    }
  };

  return (
    <>
      {error !== null && <p className="error-text">{error}</p>}
      {isWarning && (
        <WarningModal
          warning={"Username Can't Be Blank."}
          setIsWarning={setIsWarning}
        />
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Github Username"
          className="input-field"
        />
        <button className="default-btn search-btn" onClick={() => searchUser()}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
