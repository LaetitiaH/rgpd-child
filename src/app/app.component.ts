import {Component, OnInit} from '@angular/core';
import {TarteaucitronService} from "./tarteaucitron.service";
import {ActivatedRoute} from "@angular/router";
import {first, skip} from "rxjs";

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
        this.activatedRoute.queryParams.pipe(skip(1)).subscribe(params => {
            debugger
const noDisplayPrivacy = params['privacy'] && params['privacy'] === 'false';
            if(noDisplayPrivacy === true){
                return;
            }else {
                this.tarteaucitronService.initTarteaucitron();
            }


        })
    }
}
