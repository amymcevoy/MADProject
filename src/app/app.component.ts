import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    const savedTemperatureUnit = localStorage.getItem('temperatureUnit');
    if (savedTemperatureUnit) {

   }
  }
}
