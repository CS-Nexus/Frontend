import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from "./layouts/footer/footer.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Nexus';
  ngOnInit(): void {
    initFlowbite();
  }
}
