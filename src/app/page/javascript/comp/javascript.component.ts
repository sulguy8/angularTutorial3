import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  public arr = ['test1', 'test2', 'test3', 'test4'];
  public obj = {
    obj1: [0, 1, {
      obj1_1: 'last'
    }],
    obj2: {
      obj2_1: [
        0, [
          {
            obj2_2: "last"
          }
        ]
      ]
    },
  }

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit(): void {
  }

  for() {
    console.log('========== for in')
    for (let i in this.arr) {
      console.log(i)
      console.log(this.arr[i])
    }

    console.log('========== for of')
    for (let list of this.arr) {
      console.log(list)
    }

    console.log('========== forEach')
    this.arr.forEach(element =>
      console.log(element)
    );
  }

  object() {
    // # Key 구하기
    console.log(Object.keys(this.obj))

    // # Value 구하기
    console.log(this['obj']['obj1'][2]['obj1_1'])
    console.log(this.obj.obj2.obj2_1[1][0].obj2_2)
  }

  array() {
    let numbers = [6, 4, 3, 1, 2]

    function func(value) {
      return value > 5;
    }

    // Array.every(), 전부다 만족해야 True
    let every = numbers.every(func);
    console.log(every);

    // Array.some(), 하나만 만족해도 True
    let some = numbers.some(func)
    console.log(some);

    // Array.find(), func을 만족하는 첫번째 배열요소를 반환
    let first = numbers.find(func);
    console.log(first)

    // Array.indexOf(), 배열에서 특정 요소를 찾아서 해당 위치값을 반환
    let fruits = ["Apple", "Orange", "Apple", "Mango"];
    let a = fruits.indexOf('Apple');
    console.log(a)

    // Array.lastIndexOf(), indexOf와 같지만 복수의 경우 맨 마지막에 발견된 요소를 반환
    let b = fruits.lastIndexOf('Apple');
    console.log(b)

    // Array.includeOf(), 해당 값의 Index를 반환
    let c = fruits.indexOf('Apple');
    console.log(c)

  }

  selector() {
    // # HTMLCollection
    console.log(this.el.nativeElement.getElementsByClassName('depth1'));
    console.log(this.el.nativeElement.getElementsByTagName('div')[0].nodeValue);

    // # QuerySelector
    console.log(this.el.nativeElement.querySelector('.depth1').getAttribute('value'))
    console.log(this.el.nativeElement.querySelector('.depth1').setAttribute('value', 'changed'))
    console.log(this.el.nativeElement.querySelector('.depth1').innerText)

    // # QuerySelectorAll
    console.log(this.el.nativeElement.querySelectorAll('#div'))
    let test = this.el.nativeElement.querySelectorAll('#div');
    for (let list of test) {
      console.log(list)
    }
    console.log(test[4].getAttribute('value'))
    console.log(test[3].children[0].getAttribute('value'))

    console.log(test[0].firstElementChild.children[0])
    console.log(test[3].lastElementChild.getAttribute('value'))
    console.log(test[4].nextElementSibling.innerText)
    console.log(this.el.nativeElement.querySelector('.depth4-1').previousElementSibling.innerText)

    test[3].remove();
    console.log(test[2].parentNode);
    test[2].parentNode.remove();
  }

  etc() {
    // 삼항연산자

  }
}
