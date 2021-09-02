import { Component, OnInit } from '@angular/core';
import { ISummaryDetails } from 'src/app/models/ISummaryDetails';
import { IUserDetails } from 'src/app/models/IUserDetails';
import { MiddleLayerService } from 'src/app/service/middle-layer.service';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {
  userDetails: IUserDetails[] = [];
  totalRecords: number = 0;
  loading: boolean = false;
  constructor(private middleLayer: MiddleLayerService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  loadUserDetails(event: LazyLoadEvent) {
    this.loading = true;
    let pageNumber = event.first ? (event.first / 20) + 1 : 1;
    this.middleLayer.getUserSummaryDetails(pageNumber).then((summaryDetails: ISummaryDetails) => {
      console.log(summaryDetails);
      if (event.sortField) {
        summaryDetails.data.sort(function (a, b) {
          let textA = "";
          let textB = "";
          if (event.sortField?.toString() == "name") {
            textA = a.name.toUpperCase();
            textB = b.name.toUpperCase();
          } else if (event.sortField?.toString() == "status") {
            textA = a.status.toUpperCase();
            textB = b.status.toUpperCase();
          } else if (event.sortField?.toString() == "gender") {
            textA = a.gender.toUpperCase();
            textB = b.gender.toUpperCase();
          } else {
            textA = a.id.toString();
            textB = b.id.toString();
          }
          if (event.sortOrder == 1) {
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          } else {
            return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
          }
        });
      }
      this.userDetails = summaryDetails.data;
      this.totalRecords = summaryDetails.meta.pagination.total;
      this.loading = false;
    }).catch((ex) => {
      console.log(ex);
    });
  }

}
