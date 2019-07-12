import { Component } from '@angular/core';
import { PortfolioService } from '../_services/portfolio.service';

@Component({ templateUrl: 'portfolio.component.html'})
export class PortfolioComponent {
	repos:any[];

	constructor(private portfolioService: PortfolioService){
		this.portfolioService.getReposData().subscribe(repos => {  
			this.repos = repos;
			console.log(repos);
		});
	}
}