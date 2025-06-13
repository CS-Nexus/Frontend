import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandLinkedinIn, faBrandInstagram } from '@ng-icons/font-awesome/brands';
@Component({
  selector: 'app-footer',
  imports: [NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  viewProviders: [provideIcons({
    faBrandLinkedinIn,
    faBrandInstagram
  })]
})
export class FooterComponent {

}
