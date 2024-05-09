import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  lang: any;
  //  isRTL: boolean = false;
  /**
   *
   */
  constructor(private translate: TranslateService) {
    // this.lang = translate.currentLang;
    this.lang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(this.lang);
  }

  changeLanguage() {
    // if (this.lang == 'en') {
    //   this.isRTL = true;
    //   localStorage.setItem('language', 'ar');
    // } else {
    //   localStorage.setItem('language', 'en');
    // }
    if (this.lang === 'en') {
      this.lang = 'ar';
    } else {
      this.lang = 'en';
    }
    //  window.location.reload();
    localStorage.setItem('language', this.lang);
    this.translate.use(this.lang);
    this.setDirection();
  }
  setDirection() {
    // if (this.lang === 'ar') {
    //   document.documentElement.dir = 'rtl';
    // } else {
    //   document.documentElement.dir = 'ltr';
    // }
    if (this.lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.querySelectorAll('*').forEach((element: any) => {
        // Type assertion
        element.dir = 'rtl';
      });
    } else {
      document.documentElement.dir = 'ltr';
      document.querySelectorAll('*').forEach((element: any) => {
        // Type assertion
        element.dir = 'ltr';
      });
    }
  }
}
