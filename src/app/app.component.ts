import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TourService, Tour} from './tours.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'explorecali-fe-app';

  constructor(private tourService:TourService) {}


  tours: Tour[] = [];

  currentTours : Tour[] = [];

  ngOnInit() {
    this.tours = [ new Tour("127","Title1","150"),
    new Tour("128","Title2","180"),
    new Tour("129","Title3","190")
    ];

    this.getCurrentTours();
  }

  getCurrentTours() {
    this.tourService.getTours()
    .subscribe( (getResult:Tour[]) => {
      console.log(getResult);
      this.currentTours = getResult;
    })
  }
}
