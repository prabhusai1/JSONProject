import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-myjson',
  templateUrl: './myjson.component.html',
  styleUrls: ['./myjson.component.css']
})
export class MyjsonComponent implements OnInit {

  name: string;
  id: number;
  msg: string;

  public Employees = [];

  constructor(private myService: DataServiceService) { }

  ngOnInit() {
    this.myService.getData().subscribe(data => this.Employees = data);
  }


}
