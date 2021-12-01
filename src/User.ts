import faker from 'faker'; //install type definition file for type error
import { Mappable } from './CustomMap';

export class User implements Mappable{
  name:string;
  location:{
    lat:number;
    lng:number;
  };
  
  constructor(){
    this.name=faker.name.firstName();
    //location必须作为obejct初始化，不能单独初始化他的值
    this.location={
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    };
  }

  markerContent():string{
    return `User name is ${this.name}`;
  }
}



