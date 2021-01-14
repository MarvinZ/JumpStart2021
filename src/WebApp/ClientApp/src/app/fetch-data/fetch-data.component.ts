import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    baseUrl = 'http://localhost:3000/';
    console.log('weather: get=', baseUrl + 'api/v1/weatherforecasts/Getme');
    http.get<WeatherForecast[]>(baseUrl + 'api/v1/weatherforecasts/Getme').subscribe(result => { // TODO: use generated API client
      console.log('weather: data=', result);
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
