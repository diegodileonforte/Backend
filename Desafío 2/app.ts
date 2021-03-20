const operacion = (n1: number, n2: number, operador: string) => {
  return new Promise((res, rej) => {
    import('./utils/calc.js').then((calc) => {
      const operacion = calc.nuevoCalculo(n1, n2, operador);
      res(operacion.resultado());
    });
  });
};

const operaciones = async () => {
  try {
    console.log(await operacion(15, 15, "suma"));
    console.log(await operacion(30, 10, "resta"));
    console.log(await operacion(5, 4, "multiplicacion"));
  } catch (error) {
    console.log('error');
  }
};

operaciones();