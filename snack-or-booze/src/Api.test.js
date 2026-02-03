import axios from "axios";
import SnackOrBoozeApi from "./Api";

jest.mock("axios");

describe("SnackOrBoozeApi", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getSnacks", () => {
    test("fetches snacks from API", async () => {
      const mockSnacks = [
        { id: "nachos", name: "Nachos" },
        { id: "hummus", name: "Hummus" },
      ];
      axios.get.mockResolvedValue({ data: mockSnacks });

      const result = await SnackOrBoozeApi.getSnacks();

      expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/snacks");
      expect(result).toEqual(mockSnacks);
    });
  });

  describe("getDrinks", () => {
    test("fetches drinks from API", async () => {
      const mockDrinks = [
        { id: "martini", name: "Martini" },
        { id: "negroni", name: "Negroni" },
      ];
      axios.get.mockResolvedValue({ data: mockDrinks });

      const result = await SnackOrBoozeApi.getDrinks();

      expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/drinks");
      expect(result).toEqual(mockDrinks);
    });
  });

  describe("add", () => {
    test("posts new snack to API", async () => {
      const newSnack = {
        category: "snacks",
        id: "test-snack",
        name: "Test Snack",
        description: "A test snack",
        recipe: "Test recipe",
      };
      axios.post.mockResolvedValue({ data: newSnack });

      const result = await SnackOrBoozeApi.add(newSnack);

      expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/snacks", {
        id: "test-snack",
        name: "Test Snack",
        description: "A test snack",
        recipe: "Test recipe",
      });
      expect(result).toEqual({ added: newSnack });
    });

    test("posts new drink to API", async () => {
      const newDrink = {
        category: "drinks",
        id: "test-drink",
        name: "Test Drink",
        description: "A test drink",
        recipe: "Test recipe",
      };
      axios.post.mockResolvedValue({ data: newDrink });

      const result = await SnackOrBoozeApi.add(newDrink);

      expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/drinks", {
        id: "test-drink",
        name: "Test Drink",
        description: "A test drink",
        recipe: "Test recipe",
      });
      expect(result).toEqual({ added: newDrink });
    });
  });
});
