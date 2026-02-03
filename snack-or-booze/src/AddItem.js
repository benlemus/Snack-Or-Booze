import "./AddItem.css";
// import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AddItem({ add, setAddItem, addItem }) {
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addItem);
    add(addItem);
    history.push(`/${addItem.category}`);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formItems">
          <div className="inputSection">
            <select
              id="category"
              name="category"
              value={addItem.category}
              onChange={handleChange}
            >
              <option value="snacks">Snack</option>
              <option value="drinks">Drink</option>
            </select>

            <input
              type="text"
              id="itemId"
              placeholder="Item ID"
              name="id"
              onChange={handleChange}
            />
          </div>

          <div className="inputSection">
            <input
              type="text"
              id="name"
              placeholder="Item Name"
              name="name"
              onChange={handleChange}
            />

            <input
              type="text"
              id="serve"
              placeholder="Serve"
              name="serve"
              onChange={handleChange}
            />
          </div>

          <textarea
            id="description"
            name="description"
            rows={2}
            placeholder="Description"
            onChange={handleChange}
          ></textarea>

          <textarea
            id="recipe"
            name="recipe"
            rows={3}
            placeholder="Recipe"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="btnContainer">
          <button className="addBtn">Add</button>
        </div>
      </form>
    </div>
  );
}
