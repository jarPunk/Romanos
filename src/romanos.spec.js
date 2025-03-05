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
  it("debería convertir 5 a V", () => {
    expect(convertirARomano(5)).toEqual("V");
  });
  it("debería convertir 7 a VII", () => {
    expect(convertirARomano(7)).toEqual("VII");
  });
  it("debería convertir 10 a X", () => {
    expect(convertirARomano(10)).toEqual("X");
  });
  it("debería convertir 40 a XL", () => {
    expect(convertirARomano(40)).toEqual("XL");
  });

});
