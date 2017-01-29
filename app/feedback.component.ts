import { Component } from '@angular/core';

import {Feedback} from './feedback';

@Component({
	selector: 'user-feedback',
	template: `
	
	<div *ngIf="submitted">
	 <h1>Submitted Feedback</h1>
	 <label>Topic:</label><br>
	 <pre>{{submitted.topic}}</pre>
	 <label>Message:</label><br>
	 <pre>{{submitted.message}}</pre>
	 <label>Submitted by:</label><br>
	 <pre>{{submitted.email}}</pre>
     <label>Submitted on:</label>
     <pre>{{submitted.whatTime|date}}</pre> 
	</div>
	
	<div>
	 <h1>Enter feedback for a topic</h1>     
	 <span id="email">Email:<br><input [(ngModel)]="feedback.email" placeholder="email"></span><br>
	 <span id="topic">Topic:<br><input [(ngModel)]="feedback.topic" placeholder="topic"></span><br>
	 <span >Message:</span><br>
	 <textarea [(ngModel)]="feedback.message" placeholder="message" type="text" id="message"></textarea><br>	 
	 <button (click)="onSubmit(feedback)">Submit</button>	 
	</div>

	<div *ngIf="submitted">
	 <summary-feedback [summary]="submitted" ></summary-feedback>
	</div>
	`,
	styles: [`
	
	input {
	 width: 250px;
	 margin-bottom: 10px;
	}
	
	#message{	 
	 width: 250px;
	 height: 150px;	 	 	 
	}
	`],
}
)
export class FeedbackComponent {
	feedback: Feedback = {
	 email: '',
	 topic: '',
	 message: '',
	 whatTime: 0
	};
	submitted: Feedback;
	
	posts: Feedback[];
	constructor() {
	 this.posts = [];
	}
	
	onSubmit(feedback: Feedback): void {	 
	 this.submitted = {
	  email: feedback.email,
	  topic: feedback.topic,
	  message: feedback.message,
	  whatTime: Date.now()
	 };
	 this.posts.push(this.submitted);
	}
}