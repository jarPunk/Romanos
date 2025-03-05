import convertirARomano from "./romanos.js";

describe("convertirARomano", () => {
  it("debería convertir 1 a I", () => {
    expect(convertirARomano(1)).toEqual("I");
  });

});
