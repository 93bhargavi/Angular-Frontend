import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:' <h1>Hello Badri Its Me</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  title = 'bhargavi';

  @ViewChild('name',{static:true}) name!:ElementRef;


  ngOnInit(): void {
      console.log(this.name.nativeElement.innerText="Kushi");
  }
   
//   @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
 
//   ngAfterViewInit(): void {
//     const ComponentRef = this.vcr.createComponent(RoomsComponent);
//  }

  
 }
