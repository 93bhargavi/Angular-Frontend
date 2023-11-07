import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],

  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  

   @Input() room:RoomsList[] = [];

   @Input() title:string='';
   
   @Output() selectedRoom = new EventEmitter<RoomsList>();

  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
  }


  ngOnInit(): void{

  }

  selectRoom(room:RoomsList){
        this.selectedRoom.emit(room);
  }

}
