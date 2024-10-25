import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CalculatorButtonComponent} from '@/calculator/components/calculator-btn/calculator-btn.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styles: `
  //   // .is-command {
  //   //   @apply bg-indigo-700 bg-opacity-20;
  //   // }
  // `,
})
export class CalculatorComponent {

}
