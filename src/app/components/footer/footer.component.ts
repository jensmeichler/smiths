import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @HostBinding('style.background-image')
  background = 'url("assets/img/hero.jpg")';
}
