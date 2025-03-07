import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imgUrl="../assets/bridge.jpeg";

  ngOnInit():void{
    this.title="Hello From BridgeLabz.";
  }
}
