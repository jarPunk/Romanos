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
  it("debería convertir 50 a L", () => {
    expect(convertirARomano(50)).toEqual("L");
  });
  it("debería convertir 90 a XC", () => {
    expect(convertirARomano(90)).toEqual("XC");
  });
  it("debería convertir 100 a C", () => {
    expect(convertirARomano(100)).toEqual("C");
  });
  it("debería convertir 399 a CCCXCIX", () => {
    expect(convertirARomano(399)).toEqual("CCCXCIX");
  });
  it("debería convertir 400 a CD", () => {
    expect(convertirARomano(400)).toEqual("CD");
  });
  it("debería convertir 499 a CDXCIX", () => {
    expect(convertirARomano(499)).toEqual("CDXCIX");
  });
  it("debería convertir 500 a D", () => {
    expect(convertirARomano(500)).toEqual("D");
  });
  

});
