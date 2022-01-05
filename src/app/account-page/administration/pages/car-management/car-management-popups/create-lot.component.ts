import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopupComponent } from 'src/app/app-common/popup.component';
import { BackendService } from 'src/app/backend/backend.service';
import { Ent, EntDto } from 'src/app/backend/dto/entDto';
import { StorageDto } from 'src/app/backend/dto/storageDto';
import { Lot } from 'src/app/catalog/lot/domain';
import { LotService } from './lot.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create-lot',
  templateUrl: './create-lot.component.html',
  styleUrls: ['./create-lot.component.scss'],
  providers: [LotService],
})
export class CreateLotComponent extends PopupComponent<void> implements OnInit {
  public entList$: Observable<EntDto>;
  public storagesList$: Observable<StorageDto[]>;
  public form: FormGroup;
  public selectedFile: ImageSnippet;

  public constructor(
    private fb: FormBuilder,
    private backendService: BackendService,
    private lotService: LotService
  ) {
    super();
  }

  public ngOnInit() {
    this.entList$ = this.backendService.ent.getEntsList().pipe(
      map((e) => {
        return getUpperCaseCharacteristicsValues(e);
      })
    );

    this.storagesList$ = this.backendService.storages.getStorages$();
    this.form = this.initForm();
  }

  public processFile(imageInput: any) {
    console.log(imageInput);
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      console.log(this.selectedFile);
      this.lotService
        .loadImage(this.selectedFile.file)
        .subscribe((e) => console.log(e));
      // this.imageService.uploadImage(this.selectedFile.file).subscribe(
      //   (res) => {

      //   },
      //   (err) => {

      //   })
    });

    reader.readAsDataURL(file);
  }

  public initForm() {
    return this.fb.group({
      model: [null],
      year: [null],
      horsePower: [null],
      price: [null],
      numberOfCar: [null],
      description: [null],
      storageAddress: [null],
      carcase: [null],
      drive: [null],
      engine: [null],
      transmission: [null],
      mark: [null],
      photos: [null],
    });
  }

  public getObjectKeys(data: any) {
    return Object.keys(data);
  }

  public create() {
    this.backendService.shop
      .post$(this.mapFormToDto())
      .subscribe((e) => this.close());
  }

  public mapFormToDto() {
    const value = this.form.value;
    const ents: Ent[] = [];
    if (value.carcase) {
      console.log(1);
      ents.push({
        value: value.carcase,
        type: 1,
      });
    }
    if (value.drive) {
      console.log(1);
      ents.push({
        value: value.drive,
        type: 3,
      });
    }
    if (value.engine) {
      console.log(1);
      ents.push({
        value: value.engine,
        type: 2,
      });
    }
    if (value.transmission) {
      console.log(1);
      ents.push({
        value: value.transmission,
        type: 4,
      });
    }
    if (value.mark) {
      console.log(1);
      ents.push({
        value: value.mark,
        type: 5,
      });
    }

    return {
      model: value.model,
      year: value.year,
      horsePower: value.horsePower,
      price: value.price,
      numberOfCar: value.numberOfCar,
      description: value.description,
      storageAddress: value.storageAddress,
      ents: ents,
    };
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
