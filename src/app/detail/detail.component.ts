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
    var a = new Date(date * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }
}
