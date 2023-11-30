import {Component, OnInit} from '@angular/core';
import {TarteaucitronService} from "./tarteaucitron.service";
import {ActivatedRoute} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'migration15';

  public hasRGPDCheck = false

  constructor(public tarteaucitronService :TarteaucitronService,     private activatedRoute: ActivatedRoute,) {
      this.hasRGPDCheck  = localStorage.getItem("rgpd") === 'true';
  }

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(params => {
            debugger
const needDisplayPrivacy = params['privacy'] === 'true'
            if(needDisplayPrivacy){
                this.tarteaucitronService.initTarteaucitron();
            }

        })
    }
}
