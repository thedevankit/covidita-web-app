import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuToggle:boolean;
  themesModes = ["Light Mode","Dark Mode"];
  selectedTheme: any;
  darkTheme:boolean = true;
  @Output() toggleMenu = new EventEmitter<boolean>();
  constructor(private themeService: ThemeService, private helperService: HelperService) {
    this.themeService.darkTheme.subscribe(res => {
      this.darkTheme = res;
      this.setSelectedTheme();
    });
  }

  ngOnInit(): void {
  }

  openLoginSideNav(){
    this.helperService.loginSideNav.next(true);
  }

  setSelectedTheme() {
    if (this.darkTheme) {
      this.selectedTheme = this.themesModes[0];
    } else {
      this.selectedTheme = this.themesModes[1];
    }
  }

  changeThemeEvent(e) {
    if (e.value == this.themesModes[0]) {
      this.themeService.darkTheme.next(true);
    } else {
      this.themeService.darkTheme.next(false);
    }
  }

  toggleMenuClick(){
    this.toggleMenu.emit(this.menuToggle);
  }

}
