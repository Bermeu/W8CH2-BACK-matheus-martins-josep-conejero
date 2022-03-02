const Tuit = require("../../database/models/Tuit");
const getAllTuits = require("./tuitsController");

jest.mock("../../database/models/Kind");

describe("Given a getAllTuits controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a response", () => {
    test("Then it should call method json with a list of tuits of the received response", async () => {
      const res = {
        json: jest.fn(),
      };

      const tuits = [
        {
          _id: "62137e50ab642ccc853d7925",
          tuit: "un tuit de prueba",
        },
      ];

      Tuit.find = jest.fn().mockResolvedValue(tuits);
      await getAllTuits(null, res);
      expect(Tuit.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ tuits });
    });
  });
});
