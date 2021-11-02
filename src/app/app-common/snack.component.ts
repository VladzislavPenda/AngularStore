import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { SnackConfig, SnackService } from '../app-core/snack.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss'],
})
export class SnackComponent implements OnInit {
  private snack$$ = new BehaviorSubject<Set<SnackConfig> | null>(null);
  public unactiveSnacksNumber: number = 0;

  constructor(private snackService: SnackService) {}

  ngOnInit() {
    this.snackService.snack$
      .pipe(
        withLatestFrom(this.snack$$),
        map(([snack, snacks]) => {
          if (!snacks) snacks = new Set();
          snacks.add(snack);
          console.log(snack);
          setTimeout(() => {
            this.hide();
          }, 5000);
          return snacks;
        })
      )
      .subscribe(this.snack$$);
  }

  private hide() {
    this.unactiveSnacksNumber += 1;
    if (this.unactiveSnacksNumber === this.snack$$.getValue().size) {
      this.unactiveSnacksNumber = 0;
      this.snack$$.next(null);
    }
  }

  public get snack$() {
    return this.snack$$.asObservable();
  }
}
