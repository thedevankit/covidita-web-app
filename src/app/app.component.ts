import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './services/theme.service';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Covidita';
  darkThemeEnable: boolean;
  themeColor: string = 'red';
  loginSideNav = false;
  menuSideNav = false;
  @HostBinding('class') componentCssClass;
  constructor(public overlayContainer: OverlayContainer, private themeService: ThemeService, private helperService: HelperService) {
    this.overlayContainer.getContainerElement().classList.add(this.themeColor + '-light-theme');
    this.componentCssClass = this.themeColor + '-light-theme';
    this.themeService.darkTheme.subscribe(res => {
      this.darkThemeEnable = res;
      this.setTheme();
    });
    this.helperService.loginSideNav.subscribe(res => {
      this.loginSideNav = res;
    })
  }


  setTheme() {
    if (this.darkThemeEnable) {
      this.removeThemeClass();
      this.overlayContainer.getContainerElement().classList.add(this.themeColor + '-dark-theme');
      this.componentCssClass = this.themeColor + '-dark-theme';
    } else {
      this.removeThemeClass();
      this.overlayContainer.getContainerElement().classList.add(this.themeColor + '-light-theme');
      this.componentCssClass = this.themeColor + '-light-theme';
    }
  }
  removeThemeClass() {
    const classList = this.overlayContainer.getContainerElement().classList;
    for (let index = 0; index < classList.length; index++) {
      const className = classList[index];
      if (className.indexOf('theme') > -1) {
        this.overlayContainer.getContainerElement().classList.remove(className);
      }
    }
  }
  onToggleMenu(menuToggle: boolean) {
    this.menuSideNav = !this.menuSideNav;
  }
  loginSideNavCloseEvent() {
    this.helperService.loginSideNav.next(false);
  }
}
