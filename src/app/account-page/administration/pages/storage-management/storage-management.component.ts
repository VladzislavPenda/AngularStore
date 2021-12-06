import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '../../domain';
import { StorageManagementService } from './storage-management.service';

@Component({
  selector: 'app-storage-management',
  templateUrl: './storage-management.component.html',
  styleUrls: ['./storage-management.component.scss'],
  providers: [StorageManagementService],
})
export class StorageManagementComponent implements OnInit {
  public storageList$: Observable<Storage[]>;
  constructor(private service: StorageManagementService) {}

  ngOnInit() {
    this.storageList$ = this.service.getStorages();
  }
}
