import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  optionsForm!: FormGroup; // Use '!' operator

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.optionsForm = this.formBuilder.group({
      temperatureUnit: ['Celsius']
      // Add more form controls for language, theme, etc.
    });
  }

  async saveOptions() {
    try {
      // Save options logic here
      console.log(this.optionsForm.value);
  
      // Simulate saving options asynchronously (replace with your actual saving logic)
      await this.saveOptionsAsync();
    }
  }
  
  // Simulated asynchronous function (replace with your actual saving logic)
  async saveOptionsAsync() {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful saving
        resolve();
      }, 1000); // Simulate 1 second delay
    });
  }
}
