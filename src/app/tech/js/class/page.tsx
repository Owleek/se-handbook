import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Class / Constructor / Prototype'>
      <NoteItem>
        <p>this в стрелочных функциях класса и объекта</p>
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
