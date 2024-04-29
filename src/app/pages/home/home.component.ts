import {Component} from '@angular/core';
import {HeroComponent} from "./hero/hero.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AboutComponent} from "../../pages/home/about/about.component";
import {OpeningTimesComponent} from "../../pages/home/opening-times/opening-times.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, GalleryComponent, AboutComponent, OpeningTimesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
