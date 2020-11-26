import { Component, Input, OnInit } from '@angular/core';
import { SidePanelService } from 'src/app/services/side-panel.service';
import { Sidepanel } from 'src/app/services/sidepanel';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  @Input() name: string;
  @Input() type: Component;
  panel: Sidepanel;
  constructor(private panelservice: SidePanelService) {
    }

  ngOnInit(): void {
    this.panel = this.panelservice.getpanel(this.name);
  }
  getlist(lst, nm, tl, desc): any{
    return  {list: lst,
            name : nm,
            title : tl,
            description : desc};
  }

}
