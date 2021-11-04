import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-icon',
  templateUrl: './confirm-icon.component.html',
  styleUrls: ['./confirm-icon.component.scss'],
})
export class ConfirmIconComponent implements OnInit {
  @Input() public value: boolean;
  constructor() {}

  ngOnInit() {}
}
