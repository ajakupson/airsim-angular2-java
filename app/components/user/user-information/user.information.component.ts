import { Component, OnInit, ElementRef } from '@angular/core';

declare var $: any

@Component({
  selector: 'user-information',
  templateUrl: './app/components/user/user-information/user.information.template.html'
})
export class UserInformationComponent implements OnInit {

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    // var it = this;
    // setTimeout(function() {
    //   $(it.el.nativeElement).find('#user-location-map').jHERE({
    //     enable: [],
    //     zoom: 10,
    //     center: { latitude: 59.437, longitude: 24.7536 },
    //     type: 'map',
    //     // API credentials from Nokia developer website
    //     appId: 'URXmsqAlIxjr41aSiojS', // appId from the Nokia developer website,
    //     authToken: '7w1lsMEuL9ToVILvmS8vLA'
    //   });
    // }, 5000);
  }
}
