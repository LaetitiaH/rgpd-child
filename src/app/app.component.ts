import { Component } from '@angular/core';
import {TarteaucitronService} from "./tarteaucitron.service";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'migration15';

  constructor(public tarteaucitronService :TarteaucitronService,    private readonly cookieService: CookieService) {

    this.tarteaucitronService.initTarteaucitron();

 const a = this.cookieService.get('rgpd');
      const b = localStorage.getItem("rgpd");
 debugger;
  }
}
