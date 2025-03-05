function convertirARomano(num) {
    const valores = [
      { decimal: 40, romano: "XL" },
      { decimal: 10, romano: "X" },
      { decimal: 5, romano: "V" },
      { decimal: 4, romano: "IV" },
      { decimal: 1, romano: "I" }
      
    ];
  
    let resultado = "";
  
    for (const { decimal, romano } of valores) {
      while (num >= decimal) {
        resultado += romano;
        num -= decimal;
      }
    }
  
    return resultado;
  }
  
  export default convertirARomano;
  