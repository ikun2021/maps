import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable{
  name:string;
  catchPhrase:string;
  location:{
    lat:number;
    lng:number;
  }

  constructor(){
    this.catchPhrase=faker.company.catchPhrase();
    this.name=faker.company.companyName();
    this.location={
      lat:parseFloat(faker.address.longitude()),
      lng:parseFloat(faker.address.longitude())
    }
  }

  markerContent():string{
    return `
    <div>
      <hi>Company Name:${this.name}</h1>
      <h3>Catchphrase:${this.catchPhrase}</h3>
    </div>  
    `
  }
}