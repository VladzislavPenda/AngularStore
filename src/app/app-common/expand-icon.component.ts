import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expand-icon',
  templateUrl: './expand-icon.component.html',
  styleUrls: ['./expand-icon.component.scss'],
})
export class ExpandIconComponent implements OnInit {
  @Input() public isExpanded: boolean;

  constructor() {}

  ngOnInit() {}
}
