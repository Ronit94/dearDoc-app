import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { UiStyleToggleService } from '../../services/ui-style-toggle.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent implements OnInit {
  constructor(private ThemeService: UiStyleToggleService) {}
  public isDark: boolean = false;
  public isActive: boolean = false;

  ngOnInit(): void {
    this.ThemeService.setThemeOnStart();
  }

  ToggleTheme() {
    this.ThemeService.toggle()
  }

}
