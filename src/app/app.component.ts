import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TarteaucitronService} from "./tarteaucitron.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, filter, skip} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'migration15';
  isLoading = true;

    public noDisplayPrivacySubject$ = new BehaviorSubject<boolean>(false);

  constructor(public tarteaucitronService :TarteaucitronService,     private activatedRoute: ActivatedRoute,  private cd: ChangeDetectorRef  , private cookieService: CookieService,) {
      this.noDisplayPrivacySubject$.pipe(filter(a => a)).subscribe(()=> {
          console.log('behaviour')
        const c =  this.cookieService.getAll()
          console.log(c);
          this.tarteaucitronService.initTarteaucitronSmall('youtube')
          this.isLoading = false;
          this.cd.detectChanges()
      })

  }


    ngOnInit(): void {
        console.log('oninit')
        this.activatedRoute.queryParams.pipe(skip(1)).subscribe(params => {
            //ajouter check du localStorage et remplissage du tarte au citron
const noDisplayPrivacy = params['privacy'] && params['privacy'] === 'false';
            if(noDisplayPrivacy === true){
                debugger
                console.log('nodisplay')
const b = '!youtube' + '=' + 'false'
                document.cookie = `tarteaucitron=${b}; path=/;SameSite=None; Secure`;
                console.log(b)
this.noDisplayPrivacySubject$.next(true);

            }else {
                this.tarteaucitronService.initTarteaucitron('youtube');
                this.isLoading = false;
            }
        })
    }

}
