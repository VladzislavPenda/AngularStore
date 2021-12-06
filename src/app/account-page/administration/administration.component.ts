import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  public selectedPage: 'statistic' | 'storageManagement' | 'ordersManagement' =
    'statistic';
  constructor() {}

  ngOnInit() {}
}
