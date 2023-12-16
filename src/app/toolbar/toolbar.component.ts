import { Component, HostBinding } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})

export class ToolbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  
  @HostBinding('class') className = '';
  darkClassName = 'theme-dark';
  lightClassName = 'theme-light';

  toggleDarkMode() {
    this.className = this.className === this.darkClassName ? this.lightClassName : this.darkClassName;

    const body = document.body;
    if (this.className === this.darkClassName) {
      body.classList.add(this.darkClassName);
    } else {
      body.classList.remove(this.darkClassName);
    }
  }
}
