import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {
	  item: any;

	  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
		this.item = navParams.get('item');
		
		}
		alertaMaisInfo() {
			let alert = this.alertCtrl.create({
				title: 'Mais Informações',
				subTitle: 'Editora: '+this.item.editora+'<br>Criador: '+this.item.criador,
				buttons: ['Fechar']
			});
			alert.present();
		}
}