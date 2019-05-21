import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _bService: BlogServiceService) { }

  timeConverter(date){
   let a: any = new Date(date * 1000);
   let months: any = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   let year: any = a.getFullYear();
   let month: any = months[a.getMonth()];
   let date: any = a.getDate();
   let hour: any = a.getHours();
   let min: any = a.getMinutes();
   let sec: any = a.getSeconds();
   let time: any = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
   return time;
  }
  ngOnInit() {
  }


}
