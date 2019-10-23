import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../core/dataService/data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

/*
 home class which is the default lading page
*/
export class HomeComponent implements OnInit {
  policyForm: FormGroup;
  submitted = false;
  policyId: string;
  password: string;
  policyCheckDetails: any;
  claimStatusDeatils: any;
  showloginmsg: boolean = false;
  msg: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataServiceService) { }

  ngOnInit() {

    this.policyForm = this.formBuilder.group({
      policyId: ['', Validators.required],

    });
  }
  get f() { return this.policyForm.controls; }

  /*
  on click of Request claim button by user
   */
  onSubmit() {
      this.submitted = true;
    // stop here if form is invalid
    if (this.policyForm.invalid) {
      return;
    }
    this.policyId = this.policyForm.value.policyId,
    this.policyCheck(this.policyId)
    this.dataService.SetItems('policyId', this.policyId)

  }
  /*
    API call to check if the check if the user policy no is valid ,
   to check if the polict has expired;
   on success moves to next page
   on failure displays the valid message
   @param(policyId) entered ny user
  */
  async policyCheck(policyId: string) {
    this.policyCheckDetails = await this.dataService.policyCheck(policyId)
    console.log(this.policyCheckDetails);
    if (this.policyCheckDetails.status === 'Failure') {
      this.showloginmsg = true;
      this.msg = this.policyCheckDetails.statusMessage;
      return;
    }
    this.router.navigateByUrl('/request')

    this.dataService.SetItems('userId', this.policyCheckDetails.userId);
  }
  /*
  API class to check the user pending claim status.
  @param policyId entred by user
   */
  async onclaimStatusClick() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.policyForm.invalid) {
      return;
    }
    this.policyId = JSON.parse(this.policyForm.value.policyId)
    
    this.dataService.SetItems('policyId', this.policyId);
    this.claimStatusDeatils = await this.dataService.getClaimStatus(this.policyId)
    console.log(this.claimStatusDeatils);
    if (this.claimStatusDeatils.status == 'Failure') {
      this.showloginmsg = true;
      this.msg = this.claimStatusDeatils.statusMessage;
      return;
    }
    this.router.navigateByUrl('/claim')

    this.dataService.SetItems('userId', this.policyCheckDetails.userId);

  }
}
