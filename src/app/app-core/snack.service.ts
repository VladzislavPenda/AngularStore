import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface SnackViewConfig {
  iconCode: string;
  iconColor: string;
  iconCircleColor: string;
  iconContainerColor: string;
}

export interface SnackConfig extends SnackViewConfig {
  /**
   * display custom message
   */
  message?: string;

  /**
   * try display message inside dictionary 'snacks' directory.
   * if won't find dictionary, then display message, If in this case message is empty or
   * doesn't initialized snack won't be shown
   */
  dictionaryCode?: string;
  delay?: number;
}

export type ConfiguredSnackConfig = 'success' | 'failed' | 'deleted';

const PREPARED_CONFIGURATIONS = new Map<ConfiguredSnackConfig, SnackViewConfig>(
  [
    [
      'success',
      {
        iconCode: '&#xf00c',
        iconColor: '#fff',
        iconCircleColor: '#27ae60',
        iconContainerColor: '#d1ede0',
      },
    ],
    [
      'failed',
      {
        iconCode: '&#xf05e',
        iconColor: '#e95b5b',
        iconCircleColor: '#ffffff',
        iconContainerColor: '#e6cccc',
      },
    ],
    [
      'deleted',
      {
        iconCode: '&#xf1f8',
        iconColor: '#adb5c7',
        iconCircleColor: '#ffffff',
        iconContainerColor: '#edf2f7',
      },
    ],
  ]
);

@Injectable({ providedIn: 'root' })
export class SnackService {
  private snack$$ = new Subject<SnackConfig>();

  public constructor() {}

  public showSnack(snack: SnackConfig) {
    this.snack$$.next(snack);
  }

  public showConfigured(
    name: ConfiguredSnackConfig,
    config: { message?: string; dictionaryCode?: string; delay?: number }
  ) {
    if (!config.message && !config.dictionaryCode)
      throw new Error('Invalid snack config');
    let message = config.message;

    // if (config.dictionaryCode) {
    // 	message = this.getSnackMessage(config.dictionaryCode);
    // 	if (!message) throw new Error("Unknown dictionary code");
    // }
    this.snack$$.next({
      ...(PREPARED_CONFIGURATIONS.get(name) as SnackViewConfig),
      message,
      delay: config.delay,
    });
  }

  public get snack$() {
    return this.snack$$.asObservable();
  }
}
