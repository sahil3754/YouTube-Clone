import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opened=true;
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav
  constructor(private observer:BreakpointObserver) { 
  
  }

  ngOnInit(): void {
   

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 910px)']).subscribe((res)=>{
      if (res.matches) {
        this.sidenav.mode='over';
        this.sidenav.close();
      } else {
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }
  
}
