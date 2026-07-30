import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Оглавление'>
        1 Система типов (any, unknown, never, void, null, undefined, literal
        types) <br />
        2 Union и Intersection Types <br />
        3 Interfaces vs Type Alias <br />
        4 Generics <br />
        5 Type Narrowing + Type Guards <br />
        6 Функции (типизация, перегрузки, optional/rest параметры, this) <br />
        7 Utility Types (Pick, Omit, Partial, Record, ReturnType и др.) <br />
        8 keyof, typeof, Indexed Access Types <br />9 Mapped Types 10
        Conditional Types + infer
      </Note>
      <Note title='Оглавление'>
        <p>
          <p>
            Причины TS / Cупер типы и подтипы / Виды типов (множества) /
            Пересечения / Преобразования / keyof typeof in / enum (obj const)
          </p>
        </p>
      </Note>
      <Note title='Причины TS'>
        <NoteItem>
          <p>
            JS - слаботипизированный язык, а так же в нем динамическая типизация
          </p>
          <p>
            Слабая типизация позволяет работать с разными типами и при этом
            неявно преобразуя их
          </p>
          <p>
            Динамическая типизация может менять тип во время выполнения кода в
            зависимости от каких либо условий
          </p>
          <p>
            Статический - это значит что код даже еще не выполнялся и не
            компилировался, типы должны быть верными до компиляции
          </p>
          <p>
            TS - является стороготипизированным и статическим языком, типы
            известны до компиляции кода
          </p>
          <p>
            TS - является структурным языком, это значит что он сравнивает типы
            по структуре а не по названию типа (в других языка возникнет ошибка
            если передать тип с другим названием даже если структура идентична)
          </p>
          <p>
            С TS код становится самодокументируемым, его проще читать и проще
            проще работать с ним, появляется автокомплит
          </p>
          <p>
            Не нужно в голове помнить про типы. Cнижается количество багов до
            компиляции
          </p>
        </NoteItem>
      </Note>
      <Note title='Супертипы и подтипы'>
        <NoteItem>
          <pre>
            {`
// Super type - надтип
type One {
    name: string
}

// subtype - подтип
type Two {
    name: string
    surname: string
}

//1. Объект подтипа может быть присвоен объекту надтипа
// лишнее просто отбросится #OSMEOS (просто случайные буквы как якорь)
const subtype: Two = {name: 'Alex', surname: 'Lex'}
const supertype: One = subtype

//2. #ONNOST(просто случайные буквы как якорь)
//  Объект надтипа не может быть присвоен объекту подтипа без приведения типов
const er_supertype: One = {name: 'Alex'}
const er_subtype: Two = er_supertype - тут нехватает  surname, по этому так нельзя

// это важно понимать поскольку в дальнейшем очень многое будет построено на базе этого
// это касается не только присвоений но и так же функций и прочего
            `}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Виды типов (Множества)'>
        <NoteItem>
          <p>Примитивные:</p>
          <p>bigint - это тип bigint</p>
          <p>string, number, boolean</p>
          <p>null в ts - это литеральный null, не object</p>
          <p>undefined</p>
          <p>symbol</p>
        </NoteItem>
        <NoteItem>
          <p>Составные:</p>
          <p>Объекты, массивы, функции, пересечения, дженерики</p>
        </NoteItem>
        <NoteItem>
          <p>Специальные:</p>
          <p>
            unknown - надможество для всевозможных множеств, требует доказать
            тип проверкой перед его использованием
          </p>
          <p>
            any - надмножество всего и подмножество всего одновременно,
            отключает типизацию
          </p>
          <p>
            never - недостижимое пустое множество, функция которая никогда не
            выполнится (выбрасывает исключение), бесконечный цикл, кейс который
            никогда не сработает: string & number = never
          </p>
          <p>
            void - тип означающий что не будет использование явного return,
            используется для функций которые ничего не возвращают
          </p>
          <p>литералы - это буквально записанное значение, захардкоженное</p>
          <br />
        </NoteItem>
        <NoteItem>
          <p>литеральные типы - это просто какие то значения</p>
          <p></p>
          <pre>
            {`
type Color = 'red' | 'green' | 'blue'

const fn = (arg:  Color): void => {}

1. Если мы используем константу, то тип выводится неявно, в таком кейсе код ts будет без ошибок
const somevalue = 'red'
fn(somevalue)

2. Однако ессли мы используем объект (подразумевается что поля объекта изменяемы и возникнет ошибка)
const obj = { color: 'red' }
fn(obj.color) // color: string

Для того чтобы поля объекта назначить неизменяемыми (readonly) можно указать as const
const obj = { color: 'red' } as const
тогда ошибки не будет: fn(obj.color) 

А чтобы в типе объвить поля неизменяемыми, укажите readonly перед свойством

interface User {
  readonly id: number
  name: string
  ....
}
            `}
          </pre>
          <pre>
            {`
Шаблонные литералы: type UserID = \`user_id\$\{number\}\`
Составные литералы: type SomeType = 'some_value' | 23 | false
так же есть такие понятия как:
Строчные литералы, числовые литералы, null - литерал, кортеж тоже литерал
            `}
          </pre>
          <p>Массивы и Кортежи (Tuple)</p>
          <pre>
            {`
Тип массива может быть произвольной длинны в любом порядке:
const arr: string[] = ['asd', 'ybsjkd', 's']

У кортежа строгий порядок и длина массива, кортеж знает тип каждого индекса и его менять нельзя
const tuple: [string, string, number] = ['s', 's', 5]
            `}
          </pre>
          <p>
            Alias в типизации массивов, для того чтобы не гадать почему тот или
            иной индекс в массиве определенного типа, порядок объявления alias
            важен
          </p>
          <pre>
            {`
type UserArray = [name: string, age: number]
const tempArray: UserArray = ['Sanya', 23] - так правильно
const tempArray: UserArray = [23, 'Sanya'] - так ошибка
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Пересечения'>
        <NoteItem>
          <p>A | B = union (объединение)</p>
          <p>A & B = intersection (пересечение) частный случай объединения</p>
        </NoteItem>
      </Note>
      <Note title='Преобразования'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='keyof typeof in'>
        <NoteItem>
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
        </NoteItem>
      </Note>
      <Note title='enum (obj const)'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
    </>
  );
}
