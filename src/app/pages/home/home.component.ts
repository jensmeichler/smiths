import {Component} from '@angular/core';
import {HeroComponent} from "./hero/hero.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AboutComponent} from "../../pages/home/about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, GalleryComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
