import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../core/dataService/data-service.service';
@Component({
  selector: 'app-claim-status',
  templateUrl: './claim-status.component.html',
  styleUrls: ['./claim-status.component.scss']
})

/*
 ClaimStatus class to view the pending claim details
 */
export class ClaimStatusComponent implements OnInit {
  policyId: number;
  claimStatusDetails: any;
  constructor(private dataService: DataServiceService) { }


  async  ngOnInit() {
    await this.getClaimStatus();
  }

  /*
    API call to get the list of pending claims
    @param policyId as given by user
   */
  async getClaimStatus() {
    this.policyId = parseInt(this.dataService.GetItems('policyId'));
    this.claimStatusDetails = await this.dataService.getClaimStatus(this.policyId);
    console.log(this.claimStatusDetails);


  }
}
