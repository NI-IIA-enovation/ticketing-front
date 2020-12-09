import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent implements OnInit {
  components: any;
  constructor(private contaxtservice: ContextService) {
  }
  ngOnInit(): void {
    this.contaxtservice.getComponent().subscribe(component => this.components = component);
  }
}
