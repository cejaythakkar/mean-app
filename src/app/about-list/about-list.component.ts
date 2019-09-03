import { AboutService } from './../services/about.service';
import { Component, OnInit } from '@angular/core';
import { About } from '../modal/about.modal';

@Component({
  selector: 'app-about-list',
  templateUrl: './about-list.component.html',
  styleUrls: ['./about-list.component.scss']
})
export class AboutListComponent implements OnInit {
  abouts:About[];
  constructor(private aboutService:AboutService) { }

  ngOnInit() {
    this.abouts = this.aboutService.abouts;
  }

}
