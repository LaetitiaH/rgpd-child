import { Injectable } from '@angular/core';

declare const tarteaucitron: any;

@Injectable({
  providedIn: 'root'
})
export class TarteaucitronService {
  initTarteaucitron(): void {
    tarteaucitron.init({
      /* General */
      privacyUrl:
          '' /* Privacy policy url . Si vide, le lien Politique de confidencialité du bandeau ne s'affiche pas*/,
      // hashtag:
      // .
      // . // set all the init parameters as necessary for your project specification. All available parameters are in the tarteaucitron documentation
      // .
    });
    (tarteaucitron.job = tarteaucitron.job || []).push('youtube');
  }

}
