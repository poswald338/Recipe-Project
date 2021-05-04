import { Component, EventEmitter, Output } from '@angular/core'

@Component ({
  templateUrl: './header.component.html',
  selector: 'app-header'
})

export class HeaderComponent {
  @Output() tabSelected = new EventEmitter<string>()

  onSelect(tab: string) {
    this.tabSelected.emit(tab);
  }
}
