import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  cantidad:number = 0;
  total:number = 0;

  @Output() sidenavClose = new EventEmitter();

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {this.auth.logout();}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
