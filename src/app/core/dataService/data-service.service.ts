import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  policyCheck(policyId) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json'};
    const headers = new HttpHeaders(headerKey);

    return new Promise(resolve => {
      this.http.get('http://10.117.189.239:8078/medi-claim/api/policies/' + policyId, { headers: headers })
        .subscribe((response: HttpResponse<UserResponse>) => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }
  getClaimStatus(policyId) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json', 'Accept': '', 'Authkey': '' };
    const headers = new HttpHeaders(headerKey);

    return new Promise(resolve => {
      this.http.get('http://10.117.189.239:8078/medi-claim/api/claims/policies/' + policyId, { headers: headers, observe: 'response' })
        .subscribe((response: HttpResponse<UserResponse>) => {
          // console.log(response);
          // debugger;
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }
  loginData(userId, password) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json', 'Accept': '', 'Authkey': '' };
    const headers = new HttpHeaders(headerKey);

    const body = JSON.stringify({
      'adminName': userId,
      'password': password

    });

    return new Promise(resolve => {
      this.http.post('http://10.117.189.239:8078/medi-claim/mediclaim/api/login', body, { headers: headers, observe: 'response' })
        .subscribe((response: HttpResponse<UserResponse>) => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }
  getHospitalList() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json', 'Accept': '', 'Authkey': '' };
    const headers = new HttpHeaders(headerKey);


    return new Promise(resolve => {
      this.http.get('http://10.117.189.239:8078/medi-claim/api/hospitals', { headers: headers, observe: 'response' })
        .subscribe((response: HttpResponse<UserResponse>) => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }
  getClaimTypelList() {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json', 'Accept': '', 'Authkey': '' };
    const headers = new HttpHeaders(headerKey);


    return new Promise(resolve => {
      this.http.get('http://10.117.189.239:8078/medi-claim/api/policies', { headers: headers, observe: 'response' })
        .subscribe((response: HttpResponse<UserResponse>) => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }

  saveClaimData(admissionDate, claimAmount, dischargeDate, doctor, hospitalId, policyId, userId) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json', 'Accept': '', 'Authkey': '' };
    const headers = new HttpHeaders(headerKey);

    const body = JSON.stringify({
      'admissionDate': admissionDate,
      'claimAmount': claimAmount,
      'dischargeDate': dischargeDate,
      'doctor': doctor,
      'hospitalId': "1",
      'policyId': "1",
      'userId': "1"

    });

    return new Promise(resolve => {
      this.http.post('http://10.117.189.239:8078/medi-claim/api/claims', body, { headers: headers, observe: 'response' })
        .subscribe((response: HttpResponse<UserResponse>) => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }

  getAdminDetails(userId) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json', 'Accept': '', 'Authkey': '' };
    const headers = new HttpHeaders(headerKey);


    return new Promise(resolve => {
      this.http.get('http://10.117.189.239:8078/medi-claim/api/admin/' + userId + '/claims', { headers: headers, observe: 'response' })
        .subscribe((response: HttpResponse<UserResponse>) => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }

  saveApproveReject(status, claimId, adminId) {
    interface UserResponse {
      success: boolean;
      dataset: any;
    }
    const headerKey = { 'Content-Type': 'application/json', 'Accept': '', 'Authkey': '' };
    const headers = new HttpHeaders(headerKey);



    return new Promise(resolve => {
      this.http.put('http://10.117.189.239:8078/medi-claim/api/claims/' + claimId + '/' + adminId + '/' + status, { headers: headers, observe: 'response' })
        .subscribe((response: HttpResponse<UserResponse>) => {
          if (response.status === 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        }, error => {
          resolve(false);
        }
        );
    });
  }


  SetItems(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  GetItems(key: string) {
    return localStorage.getItem(key);
  }

}
