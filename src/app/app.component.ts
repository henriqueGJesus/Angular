import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularApp';

  AppBotaoClick(): void{
    console.log('Foi')
  }

  AppBotaoOver(): void{
    console.log('CERTO')
  }
}
