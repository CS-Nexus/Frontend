import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandLinkedinIn, faBrandInstagram } from '@ng-icons/font-awesome/brands';
@Component({
  selector: 'app-footer',
  imports: [NgIcon, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons({
    faBrandLinkedinIn,
    faBrandInstagram
  })]
})
export class FooterComponent {

}
