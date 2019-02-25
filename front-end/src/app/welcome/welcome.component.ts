import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  customiseWelcomeMessage: string;
  name = '';
  namePath = 'misdagbo';

  constructor(private route: ActivatedRoute, private _welcomeMessageBean: WelcomeDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this._welcomeMessageBean.executeHelloWorldBeanService());
    this._welcomeMessageBean.executeHelloWorldBeanServiceWithPathVariable(this.namePath).subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage');
  }

  handleErrorResponse(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.customiseWelcomeMessage = error.error.message;
  }

  handleSuccessResponse(response) {
    this.customiseWelcomeMessage = response.message;
    // console.log(response);
  }
}
