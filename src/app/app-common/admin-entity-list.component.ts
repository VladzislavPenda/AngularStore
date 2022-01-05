import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-admin-entity-list',
  templateUrl: './admin-entity-list.component.html',
  styleUrls: ['./admin-entity-list.component.scss'],
})
export class AdminEntityListComponent implements OnInit, AfterContentInit {
  @Input() public items: any;
  @ContentChild('row') row: TemplateRef<any>;
  @ContentChild('expandTemplate') expandTemplate: TemplateRef<any>;

  public constructor() {}

  public ngOnInit() {}

  public ngAfterContentInit(): void {}
}
