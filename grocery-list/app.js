import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./list";
import Alert from "./alert";

const getFromLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return (items = JSON.parse(items));
  } else {
    return [];
  }
};

const App = () => {
  const [items, setItems] = useState(getFromLocalStorage());
  const [item, setItem] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [isEdit, setIsEdit] = useState({ active: false, id: "" });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const addItem = () => {
    if (item.length) {
      const itemObj = {
        id: uuidv4(),
        item: item,
      };

      setItems([itemObj, ...items]);
      setItem("");
      getAlert("Item Added To List", "SUCCESS");
    } else {
      getAlert("Item Can't Be Blank", "ERROR");
    }
  };

  const removeItem = (id) => {
    const filterList = items.filter((item) => item.id !== id);
    setItems(filterList);
    getAlert("Item Deleted", "SUCCESS");
  };

  const editItem = (id) => {
    const editedItem = { id, item };
    if (item) {
      setItems([
        ...items.map((listItem) =>
          listItem.id === id ? editedItem : listItem
        ),
      ]);
      setIsEdit({ active: false, id: "" });
      setItem("");
      getAlert("Item Updated", "SUCCESS");
    } else {
      getAlert("Edited Item Can't Be Blank", "ERROR");
    }
  };

  const getAlert = (text, type) => {
    setIsAlert(true);
    setAlertContent({ text, type });
    setTimeout(() => {
      setIsAlert(false);
    }, 2000);
  };

  return (
    <div className="container">
      <section className="list-section">
        {isAlert ? (
          <span className="alert-section">
            <Alert text={alertContent.text} type={alertContent.type} />
          </span>
        ) : (
          ""
        )}
        <h3>Grocery Bud</h3>
        <form onSubmit={(e) => e.preventDefault()} className="input-section">
          <input
            type="text"
            name="listItem"
            placeholder="e.g. eggs"
            value={item}
            onChange={handleChange}
          />
          {isEdit.active ? (
            <button onClick={() => editItem(isEdit.id)} className="btn-edit">
              Edit
            </button>
          ) : (
            <button onClick={() => addItem()} className="btn-add">
              Add
            </button>
          )}
        </form>
        {items.length < 1 ? (
          <p style={{ paddingTop: "20px" }}>No Items To Show</p>
        ) : (
          <section className="list-items-section">
            {items.map((listItem) => {
              return (
                <List
                  key={listItem.id}
                  {...listItem}
                  removeItem={removeItem}
                  editItem={setIsEdit}
                  isEdit={isEdit}
                  setItem={setItem}
                />
              );
            })}
          </section>
        )}
      </section>
    </div>
  );
};

export default App;
