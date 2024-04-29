import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
})
export class HomeSectionComponent implements OnInit {
  lang: any;
  constructor(private translate: TranslateService) {
    this.lang = translate.currentLang;
  }
  ngOnInit(): void {
    this.lang = this.translate.currentLang;
    this.setDirection();
    //console.log(this.lang);

    this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
      console.log(this.lang);
      this.setDirection();
    });
  }
  setDirection() {
    if (this.lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }
}
