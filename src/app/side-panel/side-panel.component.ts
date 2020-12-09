import { Component, Input, OnInit } from '@angular/core';
import { SidePanelService } from 'src/app/services/side-panel.service';
import { Sidepanel } from 'src/app/services/data/sidepanel';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @Input() source: any;
  panel: Sidepanel;
  components: Array<any>;
  constructor(private panelservice: SidePanelService, private contaxtservice: ContextService) {
    }

  ngOnInit(): void {
    this.panelservice.setCurrentItem('panel', this.source);
    this.panelservice.getComponent().subscribe(component => this.components = component);
  }

}
