import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//alterar na página about.ts
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
