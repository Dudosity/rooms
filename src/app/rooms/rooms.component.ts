import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms_object: any;

  constructor(private api: APIService) { }

  ngOnInit(): void {

    this.api.getcian().subscribe(data => {
      this.rooms_object = data['items'];
      console.log(this.rooms_object);
    });
  }

}
