import { AboutService } from './../../services/about.service';
import { Component, OnInit, Input } from '@angular/core';
import { About } from 'src/app/modal/about.modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input('about') about:About;
  constructor(private aboutService : AboutService) { }

  ngOnInit() {
  }

  onViewClick(){
    this.aboutService.setSelected(this.about);
  }

}
