// cars.js
// car_blueprint.js (tento soubor otevřeme)
// javascript/objects

export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4;
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logCarProperties() {
    console.log(
      `Informace o autě: ${this.carName}: \n\t motor: ${this.engine}, palivo: ${this.fuel}, barva: ${this.color}, počet kol: ${this.wheels}`
    );
    this.logDivider();
  }

  logDivider() {
    console.log("------------------------------");
  }
}
