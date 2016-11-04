import { Component, OnInit, ElementRef } from '@angular/core';

declare var $: any

@Component({
  selector: 'private-tab',
  host: { 'class': 'full-width' },
  templateUrl: './app/components/options/private-tab/private.tab.template.html'
})
export class PrivateTabComponent implements OnInit{

  constructor(private el: ElementRef) {}

  public ngOnInit() {
      $(this.el.nativeElement).find('select').selectric();
  }
}
