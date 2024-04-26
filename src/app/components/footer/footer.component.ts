import {Component, HostBinding} from '@angular/core';
import {fromEvent, map, startWith} from 'rxjs';
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @HostBinding('style.background-image')
  background = 'url("assets/img/hero.jpg")';

  narrow$ = fromEvent(window, 'resize')
    .pipe(startWith(undefined), map(() => window.innerWidth < 420));
}
