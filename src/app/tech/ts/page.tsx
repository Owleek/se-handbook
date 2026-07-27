import React from 'react';
import { TileGrid, TileLink } from '@/shared/ui/Tile';

export default function Template() {
  return (
    <TileGrid>
      {/* <TileLink href='/tech/ts/draft'>Draft</TileLink> */}
      <pre>
        {`
1 Система типов (any, unknown, never, void, null, undefined, literal types) 
2 Union и Intersection Types
3 Interfaces vs Type Alias
4 Generics
5 Type Narrowing + Type Guards
6 Функции (типизация, перегрузки, optional/rest параметры, this)
7 Utility Types (Pick, Omit, Partial, Record, ReturnType и др.)
8 keyof, typeof, Indexed Access Types
9 Mapped Types
10 Conditional Types + infer

1 - 1, 2, 3
2 - 6
3 - 5, 8
4 - 9, 10
5 - 4
6 - 7
7 - [1 - 10]
8 - [1 - 10]
9 - [1 - 10]
        `}
      </pre>
      <br />
      <p>Отличия type и interface:</p>
      <p>
        type может почти все то же что умеет и interface, а возможностей у
        interface значительно меньше, тем не менее interface удобнее
        использовать для ООП ввиду того что он использует тот же синтаксис
      </p>
      <p>
        Например: один интерфейс может расширять другой ключевым словом extends:
        secondType extends firstType
      </p>
      <p>
        Аналогия для type это пересечение: secontype & firstType, по этому для
        работы с наследованием удобнее использовать interface, так же можно
        добавить и то что оф док сообщает что extends под капототм работает
        быстрее чем пересечение
      </p>
      <p>
        Единственное чего не умеет type - это расширять тот же тип повторной
        декларацией (возникнет ошибка), а interface может:
      </p>
      <pre>
        {`
interface One {
   value: number
}
interface One {
   name: string
}
// итого:
interface One {
    value: number
    name: string
}

//в type возникнет ошибка:
type Two = {a: number}
type Two = {b: string}
//так сделать не получится.
`}
      </pre>
      <p>
        Следовательно interface может быть опасен, так как мы можем случайно
        расширить то что не планировали
      </p>
      <p>
        interface не может создавать типы для литералов, кортежей, шаблонных
        строк и тд
      </p>
      <p>
        По этому для описание объектных структур используют interface, а для
        всего остального type
      </p>
      <br />
      <br />
      <p>
        Alias в типизации массивов, для того чтобы не гадать почему тот или иной
        индекс в массиве определенного типа, порядок объявления alias важен
      </p>
      <pre>
        {`
type UserArray = [name: string, age: number]
const tempArray: UserArray = ['Sanya', 23] - так правильно
const tempArray: UserArray = [23, 'Sanya'] - так ошибка
`}
      </pre>
      <br />
      <br />
      <p>Типизиция функций</p>
      <p>Функцию можно типизировать и через interface тоже</p>
      <pre>
        {`
interface Fn {
    (name: string, age: number): string
}
const fn: Fn = (arg1, arg2) => ''
`}
      </pre>
      <p>Функции могут быть типизированны длинным способом и коротким</p>
      <pre>
        {`
Длинный способ:
const fn: (name: string) => string = (arg) => ''

Короткий и популярный:
const fn = (name: string): string => ''
`}
      </pre>
      <p>Перегрузка функций:</p>
      <pre>
        {`
declare function getValue(name: string): string
declare function getValue(name: number): Array<number>
`}
      </pre>
      <br />
      <br />
      <p>Собственные типы в полях:</p>
      <pre>
        {`
type TUser = {
    [proizvolniykey: string]: number 
}
const user: TUser = {
    chototo: 2
}
        `}
      </pre>
      <br />
      <br />
      <p>
        unknown - самое большое множество или надмножество всех множеств,
        используем его тогда, когда мы вообще не знаем что может быть ответом и
        будет ли оно
      </p>
      <p>
        any - это множество различных множеств, мы его используем когда знаем
        что вернется какое то значение, но какое именно не знаем
      </p>
      <p>never - пустое множество, ничему не равно, недостижимое значние</p>
      <br />
      <br />
      <p>Дженерики в простом виде</p>
      <pre>
        {`
function doSomething<Type>(param: Type): Type {
     return param
}

const x: number = doSomething<number>(5) 
const y: string = doSomething<string>('string')
`}
      </pre>
      <br />
      <br />
      <p>
        keyof - этот оператор работает с типами (интерфейсами), он получает
        список в литеральном виде ключей интерфейса
      </p>
      <p>пример:</p>
      <pre>
        {`
interface User {
    id: number
    name: string
    age: number
}

type UserKeys = keyof User = "id" | "name" | "age"
`}
      </pre>
      <br />
      <br />
      <p>
        typeof - создает тип(интерфейс) значения(примитивное либо ссылочное)
      </p>
      <pre>
        {`
const user = {
    id: 1,
    name: "Alex"
}

type User = typeOf user = {id: number, name: string }
но если user as const тогда тип будет жестко зафиксирован со значениями, и они станут read-only

        `}
      </pre>
      <br />
      <br />
      <p>in в ts это как for ..of в js, перебирает значения</p>
      <p>например:</p>
      <pre>
        {`

разберем это на реальном примере:

type ReadonlyType<T> = {
    [K in keyof T]: T[K]
}

type One = {
    name: 'Alice',
    age: 18
}

type Two = keyof One = "name" | "age"

type Three = {
    [key in Two]: One[key]
}

в итоге

type Three = {
    name: 'Alice',
    age: 18
}

`}
      </pre>
    </TileGrid>
  );
}
