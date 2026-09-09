import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Class / Constructor / Prototype'>
      <NoteItem>
        <p>Методы объекта с присваиванием, стрелки</p>
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
      </NoteItem>
    </Note>
  );
}
