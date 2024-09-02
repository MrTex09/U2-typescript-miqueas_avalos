class Car2 {
    make!: string;
  
    constructor(make: string) {
      this.make = make;
    }
  
    drive(): void {
      console.log(`Driving a ${this.make}`);
    }
  }
  const myCar2 = new Car2("Toyota");
  myCar2.drive();
  