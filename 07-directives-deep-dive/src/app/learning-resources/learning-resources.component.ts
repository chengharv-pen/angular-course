import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  standalone: true,
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  imports: [SafeLinkDirective],
})
export class LearningResourcesComponent {}
