import {ChangeDetectionStrategy, Component, computed, HostListener, inject, viewChildren} from '@angular/core';
import {CalculatorButtonComponent} from '@/calculator/components/calculator-button/calculator-button.component';
import {CalculatorService} from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
  // styles: `
  //   // .is-command {
  //   //   @apply bg-indigo-700 bg-opacity-20;
  //   // }
  // `,
})
export class CalculatorComponent {
  private calculatorService = inject(CalculatorService);

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  public resultText = computed(() => this.calculatorService.resultText());
  public subResultText = computed(() => this.calculatorService.subResultText());
  public lastOperator = computed(() => this.calculatorService.lastOperator());
  // Equivalencias de teclas
  private keyEquivalents: Record<string, string> = {
    Escape: 'C',
    Clear: 'C',
    X: '*',
    '/': '÷',
    Enter: '=',
  };
  handleClick(key: string) {
    this.calculatorService.constructNumber(key);
  }
@HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Enter', 'Backspace', 'Delete', '.', 'Escape'];

  const key = this.keyEquivalents[event.key] || event.key;
 console.log(key)
  // Verifica si la tecla presionada está en la lista de teclas válidas
  if (validKeys.includes(key)) {
    this.handleClick(key);
    this.calculatorButtons().forEach(button => {
      button.keyboardPressedStyle(key)
    })
  }
  }
}
