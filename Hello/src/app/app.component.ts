import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From BridgeLabz';
  imgUrl="../assets/bridgelabz_com_logo.jpeg";
  url="https://www.bridgelabz.com";

  ngOnInit():void{
    this.title="Hello From BridgeLabz.";

  }

  onClick($event:Event)
  {
    console.log("Save Button is Clicked", $event);
    window.open(this.url,"_blank");
  }
}
