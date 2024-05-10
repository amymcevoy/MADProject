import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  /*Button navigatin*/
  constructor(private navCtrl: NavController) { }
  ngOnInit()
  {}

  goToHome()
  {
    this.navCtrl.navigateForward('/home');
  }

  goToSearch()
  {
    this.navCtrl.navigateForward('/location');
  }
  
  goToAbout()
  {
    this.navCtrl.navigateForward('/about');
  }
  }
