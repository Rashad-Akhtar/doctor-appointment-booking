import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private daySource = new Subject<any>();

  currentDay = this.daySource.asObservable();

  changeDay(value: string) {
    this.daySource.next(value);
  }
}
