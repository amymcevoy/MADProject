import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  ngOnInit()
  {}

  goToMenu()
  {
    this.navCtrl.navigateForward('/menu');
    console.log("goToMenu() method called");
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



