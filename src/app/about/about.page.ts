import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  ngOnInit()
  {}

  backToHome()
  {
    this.navCtrl.navigateForward('/home');
  }

  }
