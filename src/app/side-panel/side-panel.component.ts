import { Component, Input, OnInit } from '@angular/core';
import { SidePanelService } from 'src/app/services/side-panel.service';
import { Sidepanel } from 'src/app/services/data/sidepanel';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @Input() source: any;
  @Input() components: Array<any>;
  constructor(private panelservice: SidePanelService) {
    }

  ngOnInit(): void {
    this.panelservice.setCurrentItem('panel', this.source);
    this.panelservice.getComponent().subscribe(component => this.components = component);
  }

}
