import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Website';
  currentUrl: string = "";

  constructor(private router: Router){
    console.log(router.url);
    this.currentUrl = router.url;
    if (this.currentUrl == "/") {}
    }
}
