import {ChangeDetectionStrategy, Component, HostBinding, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  styles: `
  button {
  @apply w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light;
}

/* ::ng-deep .is-command { -> nos convierte nouestra clase manera global
  @apply bg-indigo-700 bg-opacity-20;
} */

.is-command {
  @apply bg-indigo-700 bg-opacity-20;
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <div class="w-1/4 border-r border-b border-indigo-400"> -->
    <button [class.is-command]="isCommand()">
      <ng-content />
    </button>
    <!-- </div> -->

  `,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    attribute: 'hola',
    // 'data-size': 'XL',
  },
  // encapsulation: ViewEncapsulation.None,
})
export class CalculatorButtonComponent {
  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });
 // public isCommand = input<boolean>(false);

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
}
