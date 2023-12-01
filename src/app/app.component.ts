import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TarteaucitronService} from "./tarteaucitron.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, filter, first, skip} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'migration15';
  isLoading = true;

    public noDisplayPrivacySubject$ = new BehaviorSubject<boolean>(false);

  constructor(public tarteaucitronService :TarteaucitronService,     private activatedRoute: ActivatedRoute,  private cd: ChangeDetectorRef  ,   private router: Router) {
      this.noDisplayPrivacySubject$.pipe(filter(a => a)).subscribe(()=> {
          this.tarteaucitronService.initTarteaucitronSmall('youtube')
          this.isLoading = false;
          this.cd.detectChanges()
      })

  }


    ngOnInit(): void {
        this.activatedRoute.queryParams.pipe(filter((params) => {
            const url = document.URL
            const urlHasPrivacyParams = url.includes('privacy');
            return urlHasPrivacyParams && params.hasOwnProperty('privacy') || !urlHasPrivacyParams
        }), first()).subscribe(params => {
            //ajouter check du localStorage et remplissage du tarte au citron
const noDisplayPrivacy = params['privacy'] && params['privacy'] === 'false';
            if(noDisplayPrivacy === true){
const b = '!youtube' + '=' + 'true'
                document.cookie = `tarteaucitron=${b}; path=/;SameSite=None; Secure`;
this.noDisplayPrivacySubject$.next(true);

            }else {
                this.tarteaucitronService.initTarteaucitron('youtube');
                this.isLoading = false;
            }
        })
    }

}
