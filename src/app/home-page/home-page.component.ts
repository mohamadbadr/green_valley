import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      const anchor = queryParams.get('anchor');
      if (anchor) {
        setTimeout(() => {
          $('html, body').animate(
            {
              scrollTop: $('#' + anchor).offset().top - 100
            },
            1000
          );
        }, 200);
      }
    });
  }
}
