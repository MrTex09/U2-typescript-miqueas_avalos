class Car1 {
    make: string;
  
    constructor(make: string) {
      this.make = make;
    }
      drive(): void {
      console.log(`Driving a ${this.make}`);
    }
  }
  
  const myCar1 = new Car1("Toyota");
  myCar1.drive(); 
  