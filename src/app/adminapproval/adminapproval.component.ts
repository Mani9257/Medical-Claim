import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../core/dataService/data-service.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-adminapproval',
  templateUrl: './adminapproval.component.html',
  styleUrls: ['./adminapproval.component.scss'],
  providers: [MessageService]
})

/*
Approval/Reject class for admin
 */ 
export class AdminapprovalComponent implements OnInit {
  userId: number;
  adminId: number;

  // Service Output value
  AdminDetails: any;
  // Service putput message
  msgs: Message[];
  constructor(private dataService: DataServiceService, private messageService: MessageService) { }

  async ngOnInit() {

    await this.getAdminDetails();
  }

  /*
    API call to get the list of pending claims with admin
    @param userId fetched i login pae from user
   */
  async getAdminDetails() {

    this.userId = parseInt(this.dataService.GetItems('AdminId'));
    this.AdminDetails = await this.dataService.getAdminDetails(this.userId);
    this.AdminDetails = this.AdminDetails.medicalClaimsResponseDto;
    console.log(this.AdminDetails);


  }
  /* 
  On click of Approve/Reject button by user
  */
  onApproveRejectClick(status, claimId) {

    this.adminId = parseInt(this.dataService.GetItems('AdminId'));
    this.saveApproveReject(status, claimId, this.adminId);
  }

  /*
   API call on Approve/Reject click to update the status in database
   @param status,claimId,adminId
   */
  async saveApproveReject(status, claimId, adminId) {
    this.msgs = [];
    this.AdminDetails = await this.dataService.saveApproveReject(status, claimId, adminId);
    this.msgs.push({ severity: 'success', summary: '', detail: 'Your request has been submitted' });
    console.log(this.AdminDetails);


  }
}
