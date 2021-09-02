import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MiddleLayerService } from 'src/app/service/middle-layer.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit, OnChanges {
  @Input() id?: number = 0;
  name: string = '';
  emailId: string = '';
  gender: string = "Male";
  showMessage = false;
  errorMessage: string = "";
  constructor(private middleLayer: MiddleLayerService) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (this.id != 0) {
      let tempId = this.id ? this.id : 0;
      this.middleLayer.getUserDetails(tempId).then((res) => {
        this.name = res.data.name;
        this.emailId = res.data.email;
        this.gender = res.data.gender;
      }).catch(e => console.log(e));
    }
  }

  saveDetails() {
    console.log(this.name, this.emailId);
    this.middleLayer.saveUserSummaryDetails({ name: this.name, email: this.emailId, status: "Active", gender: this.gender, id: 0 }).then((res) => {
      this.showMessage = true;
      this.errorMessage = "";
      setTimeout(() => {
        this.showMessage = false
      }, 2000);
    }).catch(e => {
      try {
        this.errorMessage = `${e.error.data[0].field} - ${e.error.data[0].message}`
      } catch (e) { }
    });
  }

}
