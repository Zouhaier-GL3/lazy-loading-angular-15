import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  dropdown:boolean = false;
  dropdownLakes(){
    this.dropdown = !this.dropdown;
  }
}
