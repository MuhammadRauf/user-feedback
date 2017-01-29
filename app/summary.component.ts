import { Component, Input } from '@angular/core';

import {Feedback} from './feedback';

export class Summary {
	topic: string;
	posts: number;	
}

@Component({
	selector: 'summary-feedback',
	template:`
	<h1>Summary</h1>
	<div *ngIf="summaries">
	 <h4>Topics / total posts:</h4>
	 <ul class="summaries">
      <li *ngFor="let summary of summaries">
       <span class="badge">{{summary.topic}}</span> / {{summary.posts}}
      </li>
     </ul>	  
	</div>
	`,
})
export class SummaryComponent {

    summaries: Summary[];

    constructor(){	 
	 this.summaries = [];
	}
	
	@Input()
	set summary(feedback: Feedback){
	 let found = 0;
	 for(let summary of this.summaries) {
	  if(summary.topic == feedback.topic){
	   found = 1;	
	   summary.posts += 1;
	   break;	   
	  }	  
	 }
	 if(found == 0) {
	  this.summaries.push({
	  topic: feedback.topic,
	  posts: 1
	  });
	 }	 
	}
	
}