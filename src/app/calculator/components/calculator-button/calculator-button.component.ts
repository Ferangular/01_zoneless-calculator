import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  HostBinding,
  input,
  output, signal,
  viewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  styles: `
  button {
  @apply w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light;
}
  .is-command {
    @apply bg-indigo-700 bg-opacity-20;
  }

  .is-pressed {
    @apply bg-indigo-800 bg-opacity-20;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <div class="w-1/4 border-r border-b border-indigo-400"> -->
    <button
      #button
      [class.is-command]="isCommand()"
      [class.is-pressed]="isPressed()"
    (click)="handleClick()">
      <ng-content />
    </button>
    <!-- </div> -->

  `,
  host: {
    class: 'border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDoubleSize()',
    '[class.w-1/4]': '!isDoubleSize()',
    // 'data-size': 'XL',
  },
  // encapsulation: ViewEncapsulation.None,
})
export class CalculatorButtonComponent {
  public isPressed = signal(false);

  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }

  // @HostBinding('class.w-2/4') get commandStyle() {
  //   return this.isDoubleSize();
  // }

  handleClick() {
    if (!this.contentValue()?.nativeElement) {
      return;
    }

    const value = this.contentValue()!.nativeElement.innerText;

    this.onClick.emit(value.trim());
  }

  public keyboardPressedStyle(key: string) {
    if (!this.contentValue()) return;

    const value = this.contentValue()!.nativeElement.innerText;

    if (value !== key) return;

    this.isPressed.set(true);

    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }
}
