import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  

   @Input() room:RoomsList[] = [];
   
   @Output() selectedRoom = new EventEmitter<RoomsList>();

  constructor(){}


  ngOnInit(): void{

  }

  selectRoom(room:RoomsList){
        this.selectedRoom.emit(room);
  }

}
