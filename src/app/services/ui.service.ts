import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddAsset: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddAsset(): void {
    this.showAddAsset = !this.showAddAsset;
    this.subject.next(this.showAddAsset);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
