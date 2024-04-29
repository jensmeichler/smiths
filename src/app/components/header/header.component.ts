import {Component} from '@angular/core';
import {AsyncPipe, NgIf} from "@angular/common";
import {fromEvent, map, startWith} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  state$ = fromEvent(window, 'resize')
    .pipe(
      startWith(null),
      map(() => ({
        showStoreText: window.innerWidth > 488,
        showOpeningHoursText: window.innerWidth > 444,
        showArriveText: window.innerWidth > 375
      })));

  scrollToOpeningHours(): void {
    const elem = document.getElementById('opening-hours')!;
    const pos = elem.getBoundingClientRect().top;
    const offset = pos + window.pageYOffset - 96;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
}
