import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../core/dataService/data-service.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-request-claim',
  templateUrl: './request-claim.component.html',
  styleUrls: ['./request-claim.component.scss'],
  providers: [MessageService]
})

/*
 Request claim class to reuest the claim for the user
 */
export class RequestClaimComponent implements OnInit {
  claimForm: FormGroup;
  hospitalDet: any;
  hospitalDetails: any;
  claimTypeDet: any;
  claimTypeDetails: any;
  submitted: boolean;
  policyId: number;
  admissionDate: string;
  claimAmount: number;
  doctor: string;
  dischargeDate: string;
  hospitalId: number;
  claimDetailsDetails: any;
  userId: number;
  showloginmsg: boolean = false;
  msgs: Message[];
  constructor(private formBuilder: FormBuilder, private router: Router, private dataservice: DataServiceService, private messageService: MessageService) {
    this.claimForm = this.formBuilder.group({
      pName: ['', Validators.required],
      aDate: ['', Validators.required],
      dDate: ['', Validators.required],
      cType: [],
      hos: [],
      docName: ['', Validators.required],
      clmAmount: ['', Validators.required]

    });
    // this.hospitalDetails = [];
    // this.claimTypeDetails = [];
    this.submitted = false;
  }
  /**
  on page load need to fetch hospital name and policy Type for dropdown
   */
  async ngOnInit() {
    //this.showloginmsg = true;
    await this.getClaimTyprDetails();
    await this.getHospitalList();
  }

  /**
  API call to get hosptital list
   */
  async getHospitalList() {
    this.hospitalDet = await this.dataservice.getHospitalList();
    this.hospitalDetails = this.hospitalDetails[0].hospitalDTOs;
    console.log(this.hospitalDetails);

    //localStorage.setItem('hospitalId',this.hospitalDetails.hospitalId)
  }
  /**
  API call to fetch policy type
   */
  async getClaimTyprDetails() {
    this.claimTypeDet = await this.dataservice.getClaimTypelList();
    this.claimTypeDetails = this.claimTypeDetails[0].policyDtos;
    console.log(this.claimTypeDetails);

    //localStorage.setItem('hospitalId',this.claimTypeDetails.hospitalId)
  }
  /**
  Submit call on click of submit claim
   */
  onSubmit() {
    console.log("in submit");
    this.submitted = true;

    // stop here if form is invalid
    if (this.claimForm.invalid) {
      return;
    }
    console.log(this.claimForm.value.cType);

      this.admissionDate = this.claimForm.value.aDate;
      this.claimAmount = this.claimForm.value.clmAmount;
      this.dischargeDate = this.claimForm.value.dDate;
      this.doctor = this.claimForm.value.docName;
      this.hospitalId = this.claimForm.value.hos,
      this.policyId = parseInt(this.dataservice.GetItems('policyId'));
      this.userId = parseInt(this.dataservice.GetItems('userId'));
      this.admissionDate = this.admissionDate.split('/').reverse().join('-');
      this.dischargeDate = this.dischargeDate.split('/').reverse().join('-');
      this.saveClaimData(this.admissionDate, this.claimAmount, this.dischargeDate, this.doctor, this.hospitalId, this.policyId, this.userId);
      if (this.claimDetailsDetails.statusCode === 200) {
      this.showloginmsg = true;
    }

  }
  /*
   @param admissionDate,claimAmount,dischargeDate,doctor,hospitalId,policyId,userId
  API call to submit the claim where all the params are mandatory and fetched from USer input
  on success/failure returns message
  */
  async saveClaimData(admissionDate, claimAmount, dischargeDate, doctor, hospitalId, policyId, userId) {
    this.msgs = [];
    this.claimDetailsDetails = await this.dataservice.saveClaimData(admissionDate, claimAmount, dischargeDate, doctor, hospitalId, policyId, userId);
    console.log(this.claimDetailsDetails);
    this.msgs.push({ severity: 'success', summary: '', detail: 'CLaim raised Sucessfully' });

  }
}
