import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})

export class LocationPage implements OnInit {
  
  weatherTemp: any
  todaysDate = new Date()
  cityName: "" = ""; 
  weatherIcon: any
  weatherDetails: any
  name=""

  constructor(private navCtrl: NavController,public httpClient: HttpClient) { }
  ngOnInit()
  {}
  /*button navigating*/
  backToHome()
  {
    this.navCtrl.navigateForward('/home')
  }

    /*Loads data from the API and changes it from user input*/
  loadData() {
    this.httpClient.get(`${apiUrl}/weather?q=${this.cityName}&appid=${apiKey}`).subscribe(results => {
      console.log(results);

      this.weatherTemp = (results as any)['main'];   
      this.name = (results as any)['name'];     
      console.log(this.weatherTemp);
      this.weatherDetails = (results as any)['weather'][0]
      console.log(this.weatherDetails);
      this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`

    });

  }}
