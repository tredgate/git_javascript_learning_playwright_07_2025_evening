import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Diesel auto"
);
dieselCar.logCarProperties();
const petrolCar = new CarBlueprint("Stříbrná", "1.0 TSI", "Benzín", "Ropák");
petrolCar.logCarProperties();
dieselCar.logCarProperties();

const newCar = dieselCar;
newCar.color = "Růžová";
dieselCar.logCarProperties();
