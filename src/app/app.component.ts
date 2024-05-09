import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lang: any;
  constructor(private translate: TranslateService, private router: Router) {
    localStorage.getItem('language');
    translate.use('en');
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        window.scrollTo(0, 0);
      });
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad(event: Event) {
    window.scrollTo(0, 0);
  }

  title = 'companyprofile';
}
