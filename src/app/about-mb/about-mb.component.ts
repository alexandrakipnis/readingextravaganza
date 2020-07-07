import { Component, OnInit } from '@angular/core';
import { faLaptop, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-about-mb',
  templateUrl: './about-mb.component.html',
  styleUrls: ['./about-mb.component.css']
})
export class AboutMbComponent implements OnInit {

  emailIcon = faEnvelope;
  desktopIcon = faLaptop;
  instaIcon = faInstagram;
  fbIcon = faFacebook;
  constructor() { }

  ngOnInit(): void {
  }

}
