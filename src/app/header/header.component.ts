import { Component, OnInit } from '@angular/core';
import{faStore,faAddressBook,faMobile} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  spinner=faStore
  mobile=faMobile
  address=faAddressBook

  constructor() { }

  ngOnInit(): void {
  }

}
