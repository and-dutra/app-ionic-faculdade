import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
//alterar na página about.ts
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private geolocation: Geolocation) {

  }

  obterLocalizacao(){
  	this.geolocation.getCurrentPosition().then((resp) => {
		this.alertaLocalizacao(resp.coords.latitude, resp.coords.longitude)
	}).catch((error) => {
	  console.log('Error getting location', error);
	});

  }

  alertaLocalizacao(latitude:any, longitude:any){
  	let alert = this.alertCtrl.create({
      title: 'Localização',
      subTitle: 'Latitude: '+latitude+'<br>Longitude: '+longitude,
      buttons: ['Fechar']
    });
    alert.present();

}
}
