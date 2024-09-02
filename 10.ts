class Car3 {
    private make: string;
  
    constructor(make: string) {
      this.make = make;
    }
  
    getMake(): string {
      return this.make;
    }
  
    drive() {
      console.log(`Driving a ${this.make}`);
    }
  }
  
  class ElectricCar3 extends Car3 {
    batteryLife: number;
  
    constructor(make: string, batteryLife: number) {
      super(make);
      this.batteryLife = batteryLife;
    }
  
    charge() {
      console.log("el auto esta cargando");
    }
  }
  
  let myElectricCar3 = new ElectricCar3("Tesla", 100);
  myElectricCar3.drive(); 
  myElectricCar3.charge(); 
  