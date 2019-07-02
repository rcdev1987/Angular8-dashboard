import {
  OnInit,
  Input,
  Output,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc'
};

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[appSortable]'
})
export class NgbdSortableHeaderDirective {
  @Input() appSortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  @HostBinding('class.asc') get ascCls() {
    return this.direction === 'asc';
  }

  @HostBinding('class.desc') get descCls() {
    return this.direction === 'desc';
  }

  @HostListener('click') rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.appSortable, direction: this.direction });
  }
}
