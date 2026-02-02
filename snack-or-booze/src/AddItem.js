import "./AddItem.css";

export default function AddItem() {
  return (
    <div className="formContainer">
      <form>
        <div className="formItems">
          <div className="inputSection">
            <select id="category" name="addIem">
              <option value="food">Food</option>
              <option value="drink">Drink</option>
            </select>

            <input type="text" id="itemId" placeholder="Item ID" />
          </div>

          <div className="inputSection">
            <input type="text" id="name" placeholder="Item Name" />

            <input type="text" id="serve" placeholder="Serve" />
          </div>

          <textarea
            id="description"
            name="description"
            rows={2}
            placeholder="Description"
          ></textarea>

          <textarea
            id="recipe"
            name="recipe"
            rows={3}
            placeholder="Recipe"
          ></textarea>
        </div>

        <div className="btnContainer">
          <button className="addBtn">Add</button>
        </div>
      </form>
    </div>
  );
}
