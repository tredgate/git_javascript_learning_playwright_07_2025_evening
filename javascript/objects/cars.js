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

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();

dieselCar.repaint("Zelená");
dieselCar.logCarProperties();
// ? Jelikož newCar odkazuje na stejný objekt jako dieselCar, newCar bude taky zelené:
newCar.logCarProperties();

const dieselCarColor = dieselCar.getColor();
console.log("Barva Diesel auto je: " + dieselCarColor);

/*
1. nacommitujte
2. napushujte
3. Vytvořte a zamergejte PR s branchí javascript_learning do mainu
*/
