import {
  Component, OnInit, OnDestroy, Input, Type, ComponentFactoryResolver,
  ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';
import { Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FADE_IN_OUT } from './fade-in-out.animation';
import { SlidePanelService } from '../services/slide-panel.service';
import { OverlaySidePanelStyle } from './slide-panel-style.enum';
@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss'],
  animations: [FADE_IN_OUT]
})
export class SlidePanelComponent implements OnInit, OnDestroy {
  @ViewChild('content', { read: ViewContainerRef })
  public panelContentRef: ViewContainerRef;

  @Input()
  public overlayStyle: OverlaySidePanelStyle;

  public isPanelVisible: boolean;

  private sidePanelServiceSubject$: Subject<void>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private sidePanelService: SlidePanelService
  ) {
    this.sidePanelServiceSubject$ = new Subject<void>();
    this.overlayStyle = OverlaySidePanelStyle.DIM_DARK;
  }

  ngOnInit(): void {
    console.log("test");
    this.sidePanelService.onPanelVibilityChange()
      .pipe(takeUntil(this.sidePanelServiceSubject$))
      .subscribe((visible: boolean) => {
        this.isPanelVisible = visible;
      });

    this.sidePanelService.onContentChange()
      .pipe(takeUntil(this.sidePanelServiceSubject$))
      .subscribe((component: Type<any>) => this.setPanelContent(component));
  }

  public close(): void {
    this.sidePanelService.close();
  }

  private setPanelContent(component: Type<any>): void {
    const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(component);
    this.panelContentRef.clear();
    this.panelContentRef.createComponent(componentFactory);
  }

  ngOnDestroy(): void {
    this.sidePanelServiceSubject$.next();
    this.sidePanelServiceSubject$.complete();
  }
}