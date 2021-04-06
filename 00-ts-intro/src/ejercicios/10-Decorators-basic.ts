// Un decorador es una función que agrega funcionalidades a una clase, se implementa de la siguiente manera:

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

console.log(BugReport);

const report = new BugReport('Reporte 1');

console.log(report.title);