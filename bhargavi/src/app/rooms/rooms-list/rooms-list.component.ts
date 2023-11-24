import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],

  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges , OnDestroy {
  

   @Input() room:RoomsList[] = [];

   @Input() title:string='';
   
   @Output() selectedRoom = new EventEmitter<RoomsList>();

  constructor(){}
      ngOnDestroy(): void {
       console.log('on destroy is called');
      }
  ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if(changes['title']){
            this.title=changes['title'].currentValue.toUpperCase();
        }
  }


  ngOnInit(): void{

  }

  selectRoom(room:RoomsList){
        this.selectedRoom.emit(room);
  }

}
