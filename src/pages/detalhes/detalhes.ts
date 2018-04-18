import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {
		item: any;
		imageSrc: string;

	  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private camera:Camera) {
			this.item = navParams.get('item');
			this.imageSrc = 'assets/imgs/'+this.item.imagem;	
		}
		alertaMaisInfo() {
			let alert = this.alertCtrl.create({
				title: 'Mais Informações',
				subTitle: 'Editora: '+this.item.editora+'<br>Criador: '+this.item.criador,
				buttons: ['Fechar']
			});
			alert.present();
		}
		clicandoItem(url: string):void{
  		let browser = new InAppBrowser();
  		browser.create(url);
		}
		fotografar(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       let base64Image = 'data:image/jpeg;base64,' + imageData;
       this.imageSrc = base64Image;
        

      }, (err) => {
       // Handle error
      });

    }
}