import { Component, OnInit } from '@angular/core';
import { UiStyleToggleService } from 'src/services/ui-style-toggle.service';
import {LocalStorageService} from 'src/services/local-storage.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dearDoc-app';
  public isDark: boolean = false;
  public isActive: boolean = false;
  constructor(private ThemeService: UiStyleToggleService, private storage: LocalStorageService,private router:Router){}
  ngOnInit(){
    this.ThemeService.setThemeOnStart();
    this.isDark = this.storage.get('THEME') =='DARK' ? true : false
  }
  ToggleTheme() {
    this.ThemeService.toggle()
  }
  PageGoTo(pagePath:string){
    this.router.navigate([pagePath])
  }
}
