import convertirARomano from "./romanos.js";

describe("convertirARomano", () => {
  it("debería convertir 1 a I", () => {
    expect(convertirARomano(1)).toEqual("I");
  });
  it("debería convertir 2 a II", () => {
    expect(convertirARomano(2)).toEqual("II");
  });
  it("debería convertir 4 a IV", () => {
    expect(convertirARomano(4)).toEqual("IV");
  });

});
