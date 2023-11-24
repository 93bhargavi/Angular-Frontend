import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = "Kushi Hotel";
  numberOfRooms = 10;
  hideRooms = false;


  rooms: Room =
    {
      totalRooms: 20,
      availableRooms: 10,
      bookbedRooms: 5
    }

  roomList: RoomsList[] = [];

  title = 'Rooms List';

  @ViewChild(HeaderComponent) headerComponent: HeaderComponent = new HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();  

  constructor(private roomsService : RoomsService) { }
  

  // ngOnDestroy(): void {
  //   console.log('on destroy is called');
  // }

  ngAfterViewChecked(): void {
 
  }


  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "Last Title";

  }


  ngDoCheck(): void {
    console.log('on changes is called')

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = this.roomsService.getRooms();
  
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomsList) {
    console.log(room);
  }

  addRoom() {
    const room: RoomsList = {
      roomNumber: 5,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner,Free wifi,Tv,Bathroom,Kitchen',
      price: 1000,
      photos:
        'src=https://media.istockphoto.com/id/457982209/photo/t…20&c=vweeII_P5daI0zUzwLZPVgi4zCGrOV2BKJY-LpYN4qI=',
      checkinTime: new Date('28-Oct-2023'),
      checkoutTime: new Date('30-Oct-2023'),
      rating: 4.2
    };
    // this.roomList.push(room);

    this.roomList = [...this.roomList, room]
  }

}

