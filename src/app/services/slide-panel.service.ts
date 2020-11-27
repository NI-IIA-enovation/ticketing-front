import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SlidePanelService {
  private isPanelVisible: boolean;
  private closePanelSource: BehaviorSubject<boolean>;

  private contentChangeSource: Subject<Type<any>>;

  constructor() {
    this.isPanelVisible = false;
    this.closePanelSource = new BehaviorSubject<boolean>(this.isPanelVisible);
    this.contentChangeSource = new Subject<any>();
  }

  public onPanelVibilityChange(): Observable<boolean> {
    return this.closePanelSource.asObservable();
  }

  public onContentChange(): Observable<Type<any>> {
    return this.contentChangeSource.asObservable();
  }

  public setContent(content: Type<any>): void {
    this.contentChangeSource.next(content);
  }

  public show(): void {
    this.isPanelVisible = true;
    this.closePanelSource.next(this.isPanelVisible);
    console.log('tst');
  }

  public close(): void {
    this.isPanelVisible = false;
    this.closePanelSource.next(this.isPanelVisible);
  }
}
