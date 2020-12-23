import { Component, ElementRef, OnInit, ViewChild, ɵɵtrustConstantResourceUrl } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  public checked = true;
  public hidden = false;
  public ngModel = '';
  public list = ['item1','item2','item3','item4']
  public list2 = [['item1','item2'],['item3','item4']]
  @ViewChild('viewChild1', { static: false }) viewChild1: ElementRef;
  constructor(
    public el: ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngModelChange(){
    console.log('ngModelChange')
  }

  change() {
    console.log('change');
  }

  click() {
    console.log('click');
  }

  viewChild() {
    this.viewChild1.nativeElement.value = 'test';
  }

  documentQuerySelector(){
    console.log(this.el.nativeElement.querySelector('.true'));
    
  }
}
