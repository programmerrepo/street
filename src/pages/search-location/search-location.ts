import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Storage} from '@ionic/storage';

// import {SearchCarsPage} from "../search-cars/search-cars";

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})

export class SearchLocationPage {
  public fromto: any;
  // places
  public places = {
   recent: [
      {
        id: 1,
        name: "Around Current Location"
      }
    ],
  
    nearby: [
      {
        id: 2,
        name: "Maimai"
      },
      {
        id: 3,
        name: "Agmi"
      },
      {
        id: 4,
        name: "EL RAML STATION"
      },
      {
        id: 5,
        name: "Mandra"
      },
      {
        id: 6,
        name: "Kilo 21"
      }
    ]
  };

  constructor(private storage: Storage, public nav: NavController, public navParams: NavParams) {
    this.fromto = this.navParams.data;
  }

  // search by item
  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup', item.name);
    }

    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.name);
    }
    // this.nav.push(SearchCarsPage);
    this.nav.pop();
  }
}
