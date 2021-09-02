import { Component, OnInit } from '@angular/core';
import { ISummaryDetails } from 'src/app/models/ISummaryDetails';
import { MiddleLayerService } from 'src/app/service/middle-layer.service';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent implements OnInit {
  ids: number[] = [];
  selectedId: number = -1;

  constructor(private middleLayer: MiddleLayerService) { }

  ngOnInit(): void {
    this.ids = [];
    this.middleLayer.getUserSummaryDetails(1).then((summaryDetails: ISummaryDetails) => {
      summaryDetails.data.forEach(e => {
        this.ids.push(e.id);
      })
    }).catch(e => console.log(e));
  }

}
