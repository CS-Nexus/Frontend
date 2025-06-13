import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './layouts/header/header.component';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'project-structure';
  ngOnInit(): void {
    initFlowbite();
  }
}
