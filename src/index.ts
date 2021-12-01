import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
console.log(user);

const company = new Company();
console.log(company)

//must install type definition file for google maps api
//npm i -D @types/google.maps
const customMap = new CustomMap('map');


//typescript自动检测user，company是否符合Mappable interface
//也可以在创建class的时候声明implements Mappable
customMap.addMaker(user);
customMap.addMaker(company);

