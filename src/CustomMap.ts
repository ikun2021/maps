
export interface Mappable{
  location:{
    lat:number;
    lng:number
  };
  name:string;
 

  markerContent():string;
}



export class CustomMap{
  private googleMap:google.maps.Map;

  constructor(htmlId:string){
    this.googleMap = new google.maps.Map(document.getElementById(htmlId),{
      zoom:1,
      center:{
        lat:0,
        lng:0
      }
    });
  }
  

  //interface for company and user
  addMaker(mappable:Mappable):void{
    const marker = new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:mappable.location.lat,
        lng:mappable.location.lng
      },
      title:mappable.name,
    });

    const infowindow = new google.maps.InfoWindow({
      content:mappable.markerContent(),
    });

    marker.addListener('click',()=>{
      infowindow.open(this.googleMap,marker)
    });

  }
}