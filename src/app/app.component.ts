import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialDemo';
  notifications = 555;
  showSpiner = false;

  opened = false


  loadData(){
    this.showSpiner = true;
    setTimeout(()=>{
      this.showSpiner = false;
    }, 2000);
  }
}
