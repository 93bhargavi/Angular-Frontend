import { Component, OnInit } from '@angular/core';
import { Room, RoomsList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  hotelName="Kushi Hotel";
  numberOfRooms=10;
  hideRooms=false;


  rooms : Room =
   {
    totalRooms:20,
    availableRooms:10,
    bookbedRooms: 5
  }

  roomList : RoomsList[] = [];

  constructor(){}

  ngOnInit():void{ 
    this.roomList = [{
      roomNumber:1,
      roomType :  'Deluxe Room',
      amenities:  'Air Conditioner,Free wifi,Tv,Bathroom,Kitchen',
      price:1000,
      photos:
      'src=https://media.istockphoto.com/id/457982209/photo/t…20&c=vweeII_P5daI0zUzwLZPVgi4zCGrOV2BKJY-LpYN4qI=',
      checkinTime: new Date('28-Oct-2023'),
      checkoutTime:new Date('30-Oct-2023'),
      rating:4,
    },
  
    {
      roomNumber:2,
      roomType :  'Private Room',
      amenities:  'Air Conditioner,Free wifi,Tv,Bathroom,Kitchen,soap,shampoo,hotwater',
      price:2000,
      photos:
      'src=https://media.istockphoto.com/id/457982209/photo/t…20&c=vweeII_P5daI0zUzwLZPVgi4zCGrOV2BKJY-LpYN4qI=',
      checkinTime: new Date('28-Oct-2023'),
      checkoutTime:new Date('30-Oct-2023'),
      rating:4.5,
  
    },
  
    {
      roomNumber:3,
      roomType :  'Luxury Room',
      amenities:  'Air Conditioner,Free wifi,Tv,Bathroom,Kitchen,soap,shampoo,hotwater,doublebed,swimmingpool',
      price:3000,
      photos:
      'src=https://media.istockphoto.com/id/457982209/photo/t…20&c=vweeII_P5daI0zUzwLZPVgi4zCGrOV2BKJY-LpYN4qI=',
      checkinTime: new Date('28-Oct-2023'),
      checkoutTime:new Date('30-Oct-2023'),
      rating:5,
  
    },
  
    {
      roomNumber:4,
      roomType :  'Luxury Room',
      amenities:  'Air Conditioner,Free wifi,Tv,Bathroom,Kitchen,soap,shampoo,hotwater,doublebed,swimmingpool,cook',
      price:4000,
      photos:
      'src=https://media.istockphoto.com/id/457982209/photo/t…20&c=vweeII_P5daI0zUzwLZPVgi4zCGrOV2BKJY-LpYN4qI=',
      checkinTime: new Date('28-Oct-2023'),
      checkoutTime:new Date('30-Oct-2023'),
      rating:4.8,
  
    }]
  }

  toggle(){this.hideRooms =!this.hideRooms;}

 selectRoom(room:RoomsList){
    console.log(room);
  }

 addRoom(){
  const room : RoomsList ={
    roomNumber:5,
    roomType :  'Deluxe Room',
    amenities:  'Air Conditioner,Free wifi,Tv,Bathroom,Kitchen',
    price:1000,
    photos:
    'src=https://media.istockphoto.com/id/457982209/photo/t…20&c=vweeII_P5daI0zUzwLZPVgi4zCGrOV2BKJY-LpYN4qI=',
    checkinTime: new Date('28-Oct-2023'),
    checkoutTime:new Date('30-Oct-2023'),
    rating:4.2
  };
  this.roomList.push(room);
 }

}

