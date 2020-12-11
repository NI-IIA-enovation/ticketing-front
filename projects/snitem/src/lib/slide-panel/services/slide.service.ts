import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private isPanelVisible: boolean;
  private closePanelSource: BehaviorSubject<boolean>;
  components: any;
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
  public setContentComponents(components: Observable<any>): void{
  components.subscribe(item => this.components = item);
  }
  public getComponent(): any{
  return this.components;
  }
  public setContent(content: Type<any>): void {
    
    this.contentChangeSource.next(content);
  }

  public show(): void {
    this.isPanelVisible = true;
    this.closePanelSource.next(this.isPanelVisible);
  }

  public close(): void {
    this.isPanelVisible = false;
    this.closePanelSource.next(this.isPanelVisible);
  }
}
