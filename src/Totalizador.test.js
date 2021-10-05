describe("Totalizador ", () => {
  it("deberia calcular para una cantidad por defecto", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para una cantidad calquiera", () => {
    expect(calcularTotal(4, 2, "")).toEqual(8);
  });
});

function calcularTotal(cantidad, precio, estado) {
  return cantidad * precio;
}