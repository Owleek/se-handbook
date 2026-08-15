import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
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

в Generics могут быть услоные расширения:

const doSomething = function<T extends User ? Case1Type : Case2Type >(arg: T): (Case1Type | Case2Type) {
  ....
}

// В дженерик можно передать тип по умолчанию:
const doSomething = function<T = string>(arg: T): T[] {
  return [arg]
}

          `}</pre>

          <p>Type assertion (явное преобразование), as, satisfies</p>
        </NoteItem>
      </Note>
      <Note title='Явные преобразования / Type assertion'>
        <NoteItem>
          <p>Type assertion позволяет явно привести значение к нужному типу</p>
          <p>
            Главный кейс когда его рекомендуется использовать - это приведение
            данных от сервера к описанному интерфейсу
          </p>
          <pre>
            {`
interface IPerson {
    id: number
    name: string
    isAdmin: boolean
}

// ts вообще не знает тип когда мы из строки воссаздаем объект - он any
async function get_data<T>(): Promise<T> {
    const fetch_data = await fetch('...')
    const data = await fetch_data.json()
    return data as T
}

get_data<IPerson>().then(data => {
    //data.
        //id 
        //name 
        //isAdmin
             
})

// 1
const data1 = {
    id: 12,
    name: 'Pavel',
    isAdmin: false
} as IPerson

//2 лучше не использовать чтобы не конфликтовать с jsx
const data2 = <IPerson>{
    id: 12,
    name: 'Pavel',
    asdads: 'asda',
    isAdmin: false    
}

// В этих случаях data явно приводится к типу
// Однако есть способ просто проверить объект
// на соответствие без приведения его к типу

const data3 = {
    id: 12,
    name: 'Pavel',
    isAdmin: true 
} satisfies IPerson

// assertion не позводит явно привести явную ерунду
const n: string = 2 as string
// но и это можно обойти
const m: string = 2 as unknown as string

// assertion можно использовать только при получении данных с сервера
// в каких то dev конфигах сборщика, тестах
// в остальных запрещается поскольку это почти тот же any
`}
          </pre>
        </NoteItem>
      </Note>
    </>
  );
}
