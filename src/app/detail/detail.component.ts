import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: number;
  sub: any;
  noticia: object;

  constructor(public _bService: BlogServiceService, public _route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.noticia = this._bService.DatosDummy[this.id];
    console.log(this.noticia);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  timeConverter(date) {
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
}
