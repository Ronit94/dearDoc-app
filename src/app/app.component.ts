import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from 'src/services/ui-style-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dearDoc-app';
  public isDark: boolean = false;
  public isActive: boolean = false;
  constructor(private ThemeService: UiStyleToggleService){}
  ngOnInit(){
    this.ThemeService.setThemeOnStart();
  }

  ToggleTheme() {
    this.ThemeService.toggle()
  }
}
