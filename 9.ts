class Car {
    private make: string;
  
    constructor(make: string) {
      this.make = make;
    }
  
    getMake(): string {
      return this.make;
    }
  
    drive() {
      console.log(`cunduciendo un ${this.make}`);
    }
  }
  
  let myCar = new Car("Ford");
  console.log(myCar.getMake()); 
  myCar.drive()  
  
  