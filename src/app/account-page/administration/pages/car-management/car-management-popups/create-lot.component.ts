import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopupComponent } from 'src/app/app-common/popup.component';
import { BackendService } from 'src/app/backend/backend.service';
import { EntDto } from 'src/app/backend/dto/entDto';

@Component({
  selector: 'app-create-lot',
  templateUrl: './create-lot.component.html',
  styleUrls: ['./create-lot.component.scss'],
})
export class CreateLotComponent extends PopupComponent<void> implements OnInit {
  public entList$: Observable<EntDto>;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private backendService: BackendService) {
    super();
  }

  ngOnInit() {
    this.entList$ = this.backendService.ent.getEntsList().pipe(
      map((e) => {
        return getUpperCaseCharacteristicsValues(e);
      })
    );
    this.form = this.initForm();
  }

  public initForm() {
    return this.fb.group({
      model: [null],
      year: [null],
      horsePower: [null],
      price: [null],
      description: [null],
      storageAddress: [null],
      carcase: [null],
      drive: [null],
      engine: [null],
      transmission: [null],
      mark: [null],
    });
  }

  public getObjectKeys(data: any) {
    return Object.keys(data);
  }
}

function getUpperCaseCharacteristicsValues(data: EntDto) {
  Object.keys(data).forEach((property) => {
    if (Array.isArray(data[property])) {
      data[property].forEach((element) => {
        element.value =
          element.value.charAt(0).toUpperCase() + element.value.slice(1);
      });
    }
  });

  return data;
}
