import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
  title = 'MyResume';

  cssUrl =  "./assets/css/rtl.css";

  constructor(public translate: TranslateService, public sanitizer: DomSanitizer) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    translate.use('en');

    // configration of preloading for routing
    // this.router.events.subscribe((RouterEvent: Event) => {

    //   if (RouterEvent instanceof NavigationStart) {
    //     HoldOn.open()
    //   }
    //   if (RouterEvent instanceof NavigationEnd) {
    //     HoldOn.close()
    //   }
    // })
  }

  hidePreloader() {

    $(".preloader").hide()
    $(".preloader").find('.spinner').hide()
  }

  showPreloader() {
    $(".preloader").show()
    $(".preloader").find('.spinner').show()
  }

 

  public RtlCss(removeRtl) {
    let element;
    element = document.createElement('link');
    element.rel = "stylesheet";
    element.href = this.cssUrl;
    element.id = "rtlcss";

    if (removeRtl) {
      let isExsist
      isExsist = document.getElementById("rtlcss");
      if (isExsist != null) {
        isExsist.remove()
      }
    }
    else
      document.getElementsByTagName('head')[0].appendChild(element);
  }

  changeLang(lang: string) {
    this.showPreloader()
    this.translate.use(lang).subscribe(
      restaurantsData => { this.hidePreloader(); })

      $('.typed-title').typed('reset');

    if (lang == 'ar') {
      this.RtlCss(false)

      $('.typed-title').typed({
        stringsElement: $('.typing-title2'),
        backDelay: 5000, /* Delay in text change */
        typeSpeed: 0, /* Typing speed */
        loop: true
      });
    }
    else{
      this.RtlCss(true)
      $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 5000, /* Delay in text change */
        typeSpeed: 0, /* Typing speed */
        loop: true
      });
    }

    

  

  }
}
