import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { map } from 'rxjs/operators';
import { FileService } from '../app-core/file.service';

@Directive({
  selector: '[appImageView]',
})
export class ImageViewDirective {
  @Input() public appImageView: string;

  constructor(
    private fileService: FileService,
    private readonly element: ElementRef<HTMLElement>
  ) {}

  public ngOnChanges(change: SimpleChanges) {
    if (change.appImageView) {
      this.setFile();
    }
  }

  public setFile() {
    if (this.appImageView != undefined)
      this.fileService
        .getImage$(this.appImageView)
        .pipe(
          map((response) => {
            if (!response) return '';
            const blob = new Blob([response.file]);
            return URL.createObjectURL(blob);
          })
        )
        .subscribe((res) => {
          this.element.nativeElement.setAttribute('src', res);
        });
  }
}
