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
   var a: any = new Date(date * 1000);
   var months: any = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   var year: any = a.getFullYear();
   var month: any = months[a.getMonth()];
   var date: any = a.getDate();
   var hour: any = a.getHours();
   var min: any = a.getMinutes();
   var sec: any = a.getSeconds();
   var time: any = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
   return time;
  }
  ngOnInit() {
  }


}
