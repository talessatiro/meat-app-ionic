import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  restaurant: any;
  items: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController) {
    this.restaurant = navParams.get('restaurant');
  }

  addItem(item): void {
    let toast = this.toastCtrl.create({
      message: item.item_name + ' was added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.present();

    if(this.items.indexOf(item) !== -1){
      item.quantity++;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }
  }

  removeItem(item): void {
    let toast = this.toastCtrl.create({
      message: item.item_name + ' was removed successfully',
      duration: 3000,
      position: 'top'
    });

    toast.present();

    if(item.quantity > 1){
      item.quantity--;
    } else {
      var itemIndex = this.items.indexOf(item);
      if(itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
      }
    }
    
  }

  getValue(item): number {
    return item.item_price * item.quantity;
  }

  getTotalValue(): number {
    return this.items.reduce(function (prevVal, elem) {
      return prevVal + elem.item_price * elem.quantity;
    }, 0);
  }

}
