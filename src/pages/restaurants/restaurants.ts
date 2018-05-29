import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {

  restaurants: any;

  constructor(public navCtrl: NavController) {
    this.restaurants = [{
      "id": "moires",
      "restaurant_name": "Moires Hamburgueria",
      "imagePath": "assets/imgs/restaurants/burgerhouse.png",
      "menu": [{
        "item_name": "Uno Hamburguer",
        "item_price": 13.00
      },
      {
        "item_name": "Duo Hamburguer",
        "item_price": 11.00
      },
      {
        "item_name": "Trilogia",
        "item_price": 12.00
      }],
      "type": "Hamburgueria",
      "bairro": "Prata"
    }, {
      "id": "dominos",
      "restaurant_name": "Dominos",
      "imagePath": "assets/imgs/restaurants/breadbakery.png",
      "menu": [{
        "item_name": "Pizza de Calabresa",
        "item_price": 20.00
      },
      {
        "item_name": "Pizza Marguerita",
        "item_price": 22.00
      },
      {
        "item_name": "Pizza de Chocolate",
        "item_price": 25.00
      }],
      "type": "Pizzaria",
      "bairro": "Alto Branco"
    }, {
      "id": "opa_sushi",
      "restaurant_name": "Opa Sushi",
      "imagePath": "assets/imgs/restaurants/coffeecorner.png",
      "menu": [{
        "item_name": "Temaki Skin",
        "item_price": 10.00
      },
      {
        "item_name": "Tamaki Camarão",
        "item_price": 15.00
      },
      {
        "item_name": "Temaki Salmão",
        "item_price": 12.00
      }],
      "type": "Temakeria",
      "bairro": "Centro"
    }, {
      "id": "urca_grill",
      "restaurant_name": "Urca Grill",
      "imagePath": "assets/imgs/restaurants/icy.png",
      "menu": [{
        "item_name": "Porção de Arroz",
        "item_price": 10.00
      },
      {
        "item_name": "Porção de Feijão",
        "item_price": 12.00
      },
      {
        "item_name": "Picanha (100g)",
        "item_price": 8.00
      }],
      "type": "Restaurante",
      "bairro": "Catolé"
    }, {
      "id": "pastel_gourmet_cg",
      "restaurant_name": "Pastel Gourmet CG",
      "imagePath": "assets/imgs/restaurants/tasty.png",
      "menu": [{
        "item_name": "Pastel de camarão",
        "item_price": 16.00
      },
      {
        "item_name": "Pastel de Carne de Sol",
        "item_price": 13.00
      },
      {
        "item_name": "Pastel Lombinho Canadense",
        "item_price": 14.00
      }],
      "type": "Pastelaria",
      "bairro": "Mirante"
    }];
  }

  openRestaurantDetails(item): void {
    this.navCtrl.push('RestaurantPage', {restaurant: item});
  }

}
