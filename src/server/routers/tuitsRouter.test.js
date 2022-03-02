require("dotenv").config();

const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const app = require("../index");

const Tuit = require("../../database/models/Tuit");
const connectToDataBase = require("../../database");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const connectionString = mongoServer.getUri();
  await connectToDataBase(connectionString);
  await Tuit.create({
    text: "Este es un tuit de prueba para el test",
  });

  const tuit = { text: "Este es un tuit de prueba para el test" };

  const { body } = await request(app).post("/tuits").send(tuit);
});

beforeEach(async () => {
  await Tuit.create({ text: "Tuit esotérico de mimbre 1" });
  await Tuit.create({ text: "Tuit esotérico de mimbre 1" });
});

afterEach(async () => {
  await Tuit.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("given a endpoint /tuits/", () => {
  describe("when it receives a request GET", () => {
    test("then it should response with status 200 and have 2 tuits", async () => {
      const { body } = await request(app).get("/tuits").expect(200);

      expect(body).toHaveProperty("text");
      expect(body.tuits).toHaveLength(2);
      expect(body.tuits[0].name).toBe("Este es un tuit de prueba para el test");
    });
  });
});

describe("given a endpoint /tuits/", () => {
  describe("when it receives a request POST", () => {
    test("then it should response with status 200 and have 3 tuits", async () => {
      const newTuit = { text: "Otro tuit que uno no se espera" };

      const { body } = await request(app)
        .post("/tuits")
        .send(newTuit)
        .expect(201);

      expect(body.text).toBe("Otro tuit que uno no se espera");
    });
  });
});
