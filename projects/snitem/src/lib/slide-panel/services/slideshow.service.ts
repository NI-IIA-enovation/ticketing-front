import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SlideContentComponent } from '../slide-content/slide-content.component';
import { SlideService } from './slide.service';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  constructor(private serviceslide: SlideService) { }
  public setContentComponents(components: Observable<any>): void{
    console.log(components);
    components.subscribe(item => this.serviceslide.components = item);
    this.serviceslide.setContent(SlideContentComponent);
    }
    public show(): void {
      this.serviceslide.show();
    }
}
