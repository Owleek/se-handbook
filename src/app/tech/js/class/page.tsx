import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Class / Constructor / Prototype'>
      <NoteItem>
        <p>стрелки</p>
        <p>
          методы класса попадают в прототип, но если мы хотим чтобы они стали
          личными методами инстанса, тогда метод надо объявить через
          присваивание, так же как присваиваем поле
        </p>
        <pre>
          {`
class User {
  canBreathe = true // попадает в личное свойство инстанса User

  constructor(name) {
      this.name = name // это свойство зависит от входных данных, по этому оно определяется в constructor,
      // но оно так же попадает в личные свойства инстанса
  }

  run() { // этот метод попадет в User.prototype
     ....
  }

  walk = function() { // этот метод попадет в инстанс User
     ....
  }
}


class User {
  name = "User"
    
  run = function() {  // личный метод инстанса
     console.log(this.name) // this определяется способом вызова функции
  }

  walk = () => { //!!!Стрелка!!! тоже личный метод инстанса
     console.log(this.name)  // но this берется из лекс.окружения в момент создания
  } // а метод создатся когда вызовается класс, и он для инстанса создаст этот метод
    // следовательно тот конкретный инстанс будет лекс.окружением для стрелки

  swim() { // метод prototype, но this определяется способов вызова функции
      console.log(this.name)
  }
}

User.prototype.bark = () => {
    console.log(this) // метод prototype, стрелка уже создана в глобальном окружении, и this будет равен window независимо от того каким спопобом будет вызвана функция
}

const obj = new User()

const zver = {
    name: "Zver"
}

zver.run = obj.run
zver.walk = obj.walk
zver.swim = obj.swim
zver.bark = obj.bark
zver.binded = obj.bark.bind(zver)

zver.run()  // Zver
zver.walk() // User
zver.swim()  // Zver
zver.bark()  // window
zver.binded() // window

          `}
        </pre>
        <p>Поля класса - устанавливаются в инстанс этого класса</p>
        <p>
          Статические поля класса - это свойства самого класса и через прототип
          инстансом получить нельзя
        </p>
        <p>
          В constructor класса поля присваемые через this так же попадают в
          инстанс, constructor используется для того чтобы в поля записать или
          посчитать логику на базе входных данных при вызове класса, если поле
          не зависит от входных данных его можно объвлять и присваивать значение
          вне constructor
        </p>
        <p>
          User.prototype - это объект который будет установлен прототипом для
          инстанса этого класса <br />
          Если User extends Peaple. тогда User.__proto__ === Peaple
          Peaple.__proto__ === Function.prototype <br />
          Function - это тоже класс следовательно функция <br />
          Function.__proto__ === Function.prototype
        </p>
        <pre>{`
Function.prototype = {
   call: 
   bind:
   apply:
   toString:
}
        `}</pre>
        <p>Function.prototype.__proto__ === Object.prototype</p>
        <p>
          Object - тоже класс, следовательно Object.__proto__ ===
          Function.prototype
        </p>
        <pre>
          {`
Object.prototype = {
   hasOwnProperty:
   isPrototypeOf:
   valueOf:
   toString:
}
          `}
        </pre>
        <p>Object.prototype.__proto__ === null</p>
        {/* TODO: Вставить изображение */}
        <p>
          Array, Data и прочие встроенные классы наследуются от Object НО
          `Array[[Prototype]] НЕ ссылается на Object`
        </p>
        <p>
          По этому они не унаследует статические методы такие как Object.keys(),
          Object.values() ...
        </p>
        <h1>
          Методы, свойства-методы в объектах и классах, {`[[HomeObject]]`}
        </h1>
        <pre>{`

Методы и свойства-методы отличаются тем, что у ментодов имеется скрытое свойство [[HomeObject]], 
которое позваляет обращаться к прототипу (super)
свойства-методы не обладают этим скрытым свойством, 
по этому из таких методов нельзя вызывать метод прототипа

Объекты:
--------
const first = {
  name: 'first',

  method() {
    console.log('first')
  }
}

const second = {
  __proto__: first,

  method() { // метод
    console.log('second')
    super.method() // тут у нас получится вызвать метод протитипа поскольку есть [[HomeObject]]
  },

  propMethod: function() { // свойство-метод
    console.log('propMethod')
    super.method() //тут синтаксическая ошибка, так как super нет,  поскольку нет [[HomeObject]]
  }
}

Классы:
--------

class First {
   method() { 
      console.log('First method')
   }
}

class Second extends First {
  method() { //да, это не метод объекта, это метод прототипа, но важно то в нем можно получить super (наследуемого класса)
    console.log('Second method')
    super.method() // в данном случае, метод сначала будет получен из прототипа, а затем будет вызван метод вышестоящего прототипа 
    // First method
  }

  propMethod = function() { // тут мы имеем дело с личным свойсвом объекта но при этом в объекте оно не будет методом,
  //  а станет свойством-методом, 
  // способа которым можно было бы создать личный метод через класс в синтаксисе JS - нет
  // по этому 
    super.method() // мы не получим ближайщий нам прототип Second.prototype.method, тут опять же будет синтаксическая ошибка
  }
}
        `}</pre>
        <p>
          Объект не создает лексическое окружение, по этому в стрелочном методе
          this будет указывать на window/undefinded <br />
          Таким образом лексическое окружение создают: функция, блок кода {} но
          не объект, try, catch, модуль
        </p>
      </NoteItem>
    </Note>
  );
}
