import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage
 {
  weatherTemp: any
  todaysDate = new Date()
  cityName: any
  weatherIcon: any
  weatherDetails: any

  constructor(private navCtrl: NavController,public httpClient: HttpClient)
  {
    this.loadData();
  }

  goToOptions() {
    this.navCtrl.navigateForward('/settings');
    
  }
  
    loadData() {
      this.httpClient.get(`${apiUrl}/weather?q=${"Galway"}&appid=${apiKey}`).subscribe(results => {
        console.log(results);

        this.weatherTemp = (results as any)['main'];   
        this.cityName = (results as any)['name'];     
        console.log(this.weatherTemp);
        this.weatherDetails = (results as any)['weather'][0]
        console.log(this.weatherDetails);
        this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`

      });

 
  }
}
