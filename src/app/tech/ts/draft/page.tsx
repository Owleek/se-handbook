import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Причины появления TS'>
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
            Не нужно в голове помнить про типы, снижая количество багов до
            компиляции
          </p>
        </NoteItem>
      </Note>
      <Note title='Типы'>
        <NoteItem>
          <p>Примитивы - 7</p>
          <p>string</p>
          <p>number</p>
          <p>BigInt</p>
          <p>Boolean</p>
          <p>Symbol</p>
          <p>null</p>
          <p>undefined</p>
          <br />
          <p>Cпециальные 4+</p>
          <p>unknown</p>
          <p>any</p>
          <p>void</p>
          <p>never</p>
          <p>литералы</p>
          <br />
          <p>Составные: Объекты, функции, масиивы и пр</p>
          <p>Литералы: {`'red' | 'green'`}</p>
          <p>Пересечения</p>
          <p>Generics</p>
        </NoteItem>
      </Note>
      <Note title='Тип это множество'>
        <NoteItem>
          <p>
            Union | Объединени (x | y) = z; z - надмножество для x, y; x,y
            подмножества z
          </p>
          <p>
            Это не {`'или'`} а именно объединение, поскольку при x | y валиден
            случай не только когда x или y, но и тогда когда и x и y вместе
          </p>
          <br />
          <p>Intersection & Пересечение (x & y) = z</p>
          <p>string & number = never</p>
          <p>
            x & y это подмножество x | y, поскольку при x & y валиден только
            один случай
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
      <Note title='Unknown, any, void, never'>
        <NoteItem>
          <p>any - отключает любую проверку типов</p>
          <p>any - это и надтип и подтип для всего одновременно</p>
          <p>
            в tsConfig - нужно определять опцию noImplicitAny, для того чтобы
            typescript ругался и обозначал проблему того что пользователь не
            определил аргумент функции как any, посколько без этой опции,
            typescript неявно сам определит аргумент функции как any, по этому
            лучше явно видеть any чем не видеть его вообще
          </p>
          <p>noImplicitAny - запрещает неявное any</p>
        </NoteItem>
        <NoteItem>
          <p>
            unknown - cупертип для всех типов, он может быть подтипом только для
            unknown и any и ни для чего больше
          </p>
          <pre>
            {`
let someValue: unknown
const str: string = someValue // так сделать не получится, 
                              // поскольку unknown это супертип
                              // а string это подтип unknown

отсылка к #ONNOST
            `}
          </pre>
          <p>
            Если any просто отключает проверку typescript, то unknown ее не
            отключает, нам нужно проверить (доказать что unknown значение
            нужного типа) у нас не получится просто как с any свободно вызывать
            методы от значения будто оно соответствует нужному типу, unknown
            заставляет сделать проверку, в притивном случае будет ошибка
          </p>
          <pre>
            {`
Cлучай с any ошибок нет:
let value: any;
value = "Hello";
value.toUpperCase()
----------------------------------

В случае с unknown ошибка:
let value: any;
value = "Hello";
value.toUpperCase() //  'value' is of type 'unknown'

для исправления требуется доказать что мы можем вызвать метод toUpperCase()

if (value === 'string') {
    value.toUpperCase()
}
            `}
          </pre>
        </NoteItem>
        <NoteItem>
          <p>
            never - это подтип для всех типов, пустое множество, недостижимое
            значение, недопустимое значение, несуществующее значение, случай
            который никогда не произойдет
          </p>
          <p>
            пример: type SomeType = string & number, SomeType = never; функция
            которая никогда не выполнится, вечная ошибка и тд
          </p>
          <pre>
            {`
let value: never; 
const str: string = value // так можно поскольку never подтип для string

а вот в след примере уже нельзя
let str: string = 'строка';
let nv: never = str // так уже нельзя, never пустое множество, это не супертип хотя случай и похож на #OSMEOS
            `}
          </pre>
        </NoteItem>
        <NoteItem>
          <p>
            void - указываем если функция ничего не возвращает, нет какого то
            return
          </p>
          <p>неявное возвращаемое по дефолту значение undefined игнорируется</p>
        </NoteItem>
        <NoteItem>
          <p>литеральные типы - это просто какие то значения</p>
          <p>type Color = {`'red' | 'green' | 'blue'`}</p>
          <pre>
            {`
Разберем пример с литералами:
const fn = (arg:  Color): void => {}

1. Если мы используем константу, то тип выводится неявно в таком кейсе и код ts будет без ошибок
const somevalue = 'red'
fn(somevalue)

2. Однако ессли мы используем объект, то в таком случае подразумевается 
что поля объекта изменяемы и возникнет ошибка в следующем случае
const obj = { color: 'red' }
fn(obj.color) // color: string

Для того чтобы поля объекта назначить неизменяемыми (readonly) можно указать as const
const obj = { color: 'red' } as const
тогда ошибки не будет: fn(obj.color) 

А чтобы в типе объвить поля неизменяемыми, достаточно добавить ключевое слово readonly перед свойством

interface User {
  readonly id: number
  name: string
  ....
}
            `}
          </pre>
          <br />
          <p>Шаблонные литералы:</p>
          <pre>
            {`
type UserID = \`user_id\$\{number\}\`

/таким образом можно задать тип шаблона id
            `}
          </pre>
          <p>Составные литералы это:</p>
          <p>type SomeType = {`'some_value'`} | 23 | false</p>
        </NoteItem>
      </Note>

      <Note title='Generics'>
        <NoteItem>
          <p>
            Если мы имеем определенную структуру с которой нам удобно работать,
            но в это структуре есть поля которые для одной задачи имеют один
            тип, а для другой задачи другой тип, тогда чтобы не множить код
            (DRY), мы можем создать универсальный тип для обеих задач, а типы
            определять в момент наполения этой структуры
          </p>
          <p>
            То же касается и функции, если есть некая функция которая по сути
            выполняет определенную задачу, но внутри могут быть данные типы
            которые зависят от входных данных разных задач, тогда для такой
            универсальной функции тоже можно создать обобщение (Generic) и
            определять типы в момент вызова функции
          </p>
          <pre>{`
const ApiRespone = {
   metadata: '.......'
   url: 'https://asda.ru/sdfsdfsdf?sdfsd=234'
   data: вот тут приходящие данные могут иметь разную структуру ответа в зависимости от endpoint
   additiona_values: тут тоже может быть какая то другая структура ответа либо тип ответа
}

тогда можем создать универсальный тип, который для data и additiona_values зарезервирует место для типа, чтобы определить его при наполнении

type ApiResponse<T, Additional> {
   metadata: string
   url: string
   data: T
   additiona_values: Additional
}

тогда Data может быть разного вида, достаточно ее описать, и передать ее в Generic при наполенении

например:
 
type TData1 = {
   value: number
}

type TAdditinal1 = {
    flags: boolean[]
}

type TData2 = string

type TAdditinal2 = {
    codes: string[]
}

тогда:

const data1: ApiResponse<TData1, TAdditinal1> = {
   metadata: 'some_string_1',
   url: 'some_url_1',
   data: { value: 17 }
   additiona_values: [false, false, true, false, false, false, true]
}

const data2: ApiResponse<TData2, TAdditinal2> = {
   metadata: 'some_string_1',
   url: 'some_url_1',
   data: 'some_string'
   additiona_values: {
     codes: ['sdd', 'ttn', 'lll']
   }
}

пример с функцией:
const doSomething = function<T>(arg: T): T[] {
  return [arg]
}
const users: T[] = doSomething<User>(user)


При использовании дженериков с jsx важно помнить что он может воспринять его за Элемент, во избежании этого следует добавить запятую <T,>


так же у Generic могут быть ограничения

например:

const doSomething = function<T extends {id: number, label: string}>(arg: T): T[] {
  // какие не тообходимые манипуляции с id и label
  // любой тип обязан иметь эти поля или расширять эти поля
  return [arg]
}

так же их используют в классах

class Cart<T> {
   private data: T

   constructor(arg: T) {
     this.data = arg
   }
}

И самое главное:

в Generics могут быть услоные расширения

const doSomething = function<T extends User ? Case1Type : Case2Type >(arg: T): (Case1Type | Case2Type) {
  ....
}
          `}</pre>
        </NoteItem>
      </Note>
    </>
  );
}
