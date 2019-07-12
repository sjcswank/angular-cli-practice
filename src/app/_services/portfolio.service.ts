import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private username: string;
  private clientid = '4193694183d06625d9af';
  private clientsecret = 'f59b79db7482af00c2231633b5c81219021c49fd';

  constructor(private http:Http) {
	  console.log("service is ready");
	  this.username = 'sjcswank';
  }

  getReposData(){
  	return this.http.get("https://api.github.com/users/" + this.username + '/repos?client_id=' + this.clientid + '&client_secret' + this.clientsecret).pipe(map(res => res.json()));
  }
}
