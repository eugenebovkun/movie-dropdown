import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public isExpanded: boolean;
  public selectedItem: any = null;
  @Input() items: any[];
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public toggleDropdown(): void {
    this.isExpanded = !this.isExpanded;
  }

  public selectItem(item: any):void {
    this.isExpanded = false;
    this.selectedItem = item;
    this.onItemSelected.emit(this.selectedItem);
  }

  public clearSelection():void {
    this.selectedItem = null;
    this.onItemSelected.emit(this.selectedItem);
  }
}
