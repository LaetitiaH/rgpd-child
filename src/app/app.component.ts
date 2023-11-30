import {Component, OnInit} from '@angular/core';
import {TarteaucitronService} from "./tarteaucitron.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'migration15';

  public hasRGPDCheck = false

  constructor(public tarteaucitronService :TarteaucitronService) {
      debugger
      this.hasRGPDCheck  = localStorage.getItem("rgpd") === 'true';
  }

    ngOnInit(): void {
debugger
        if(!this.hasRGPDCheck){
            this.tarteaucitronService.initTarteaucitron();
        }


    }
}
