import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ id, item, removeItem, editItem, isEdit, setItem }) => {
  return (
    <div className="list-item">
      <p>{item}</p>
      <div className="list-item-btns">
        <button className="remove-btn" onClick={() => removeItem(id)}>
          <FaTrash />
        </button>
        <button
          className="edit-btn"
          onClick={() => {
            editItem({ active: !isEdit.active, id: id });
            setItem(item);
          }}
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
};

export default List;
