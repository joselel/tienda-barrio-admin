import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  hidden = false;
  cantidad:number = 0;
  total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
