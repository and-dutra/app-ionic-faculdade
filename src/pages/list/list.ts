import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<SuperHeroi>;
  listaHeroi = new ListaHeroi();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.listaHeroi.lista;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
interface SuperHeroi{
  heroi: string;
  editora: string;
  imagem: string;
  criador: string;
  resumo: string;
}

class ListaHeroi{

  public lista:Array<SuperHeroi> = new Array();  

  constructor(){
   this.lista = [];
    this.lista.push({
      heroi: 'Batman',
      editora: 'DC',
      imagem: 'batman-p.png',
      criador: 'Bill Finger',
      resumo: '"Batman é um personagem fictício, um super-herói da banda desenhada americana publicada pela DC Comics. Foi criado pelo escritor Bill Finger e pelo artista Bob Kane, e apareceu pela primeira vez na revista Detective Comics #27'
    });

    this.lista.push({
      heroi: 'Homem Aranha',
      editora: 'Marvel',
      imagem: 'homem-aranha-p.png',
      criador: 'Stan Lee',
      resumo: 'O Homem-Aranha alter-ego de Peter Parker, é um personagem fictício, um super-herói que aparece nas revistas em quadrinhos americanas publicadas pela Marvel Comics, existindo no seu universo partilhado.'

    });

    this.lista.push({
      heroi: 'Homem de Ferro',
      editora: 'Marvel',
      imagem: 'homem-ferro-p.jpg',
      criador: 'Stan Lee',
      resumo: 'Homem de Ferro é um personagem fictício dos quadrinhos publicados pela Marvel Comics. Sua identidade verdadeira é a do empresário e bilionário Tony Stark, que usa armaduras de alta tecnologia no combate ao crime.'
    });

    this.lista.push({
      heroi: 'Mulher Maravilha',
      editora: 'DC',
      imagem: 'mulher-maravilha.png',
      criador: 'William Moulton Marston',
      resumo: 'Diana Prince é personagem fictícia conhecida como a identidade secreta da original Mulher-Maravilha, ambos os nomes são o alter ego da Princesa Diana da Ilha Paraíso.'
    });

    this.lista.push({
      heroi: 'Super Homem',
      editora: 'DC',
      imagem: 'super-homem.png',
      criador: 'Jerry Siegel',
      resumo: 'Superman ou Super-homem é um super-herói fictício de história em quadrinhos americanas publicado pela DC Comics, uma empresa subsidiária do grupo Time Warner.'
    });

  }
}
