import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {BaseRequestOptions, RequestOptions, RequestOptionsArgs} from "@angular/http";
import 'rxjs/add/operator/map';


let apiUrl = "https://api-laftaborbor.000webhostapp.com/waste-mgt-api/api/";
let login_endpoint = 'user/login.php';

@Injectable()
export class AuthenticationProvider {


  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

 

  doSignup(data: any = {}){

  // var headers = new Headers();
  // headers.append("Accept", 'application/json');
  // headers.append('Content-Type', 'application/json' );
  // const requestOptions = new RequestOptions({ 
  //   headers: headers,
  //   method: "POST"                            
  //   });

    
    return new Promise((resolve, reject) =>{
      // let headers = new Headers();
      this.http.post(apiUrl+login_endpoint, JSON.stringify(data))
      .subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });

    });

  }



}
