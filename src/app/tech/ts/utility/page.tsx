import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <Note title='Partial'>
        <NoteItem>
          <p>Делает все свойства типа необязательными</p>
          <pre>
            {`
Пример:

// В данном случае все свойства обязательны
// нужно например для создания пользователя

interface User {
    id: number
    name: string
    email: string
    age: number
}

// Но если нам нужно обновить некоторые поля
// тогда мы при patch удобен Partial<T>

type UpdateUserDto = Partial<User>

const user: UpdateUserDto = {}
// user
    // .id?
    // .name?
    // .email?
    // .age?
`}
          </pre>
          <br />
          <p>
            Partial делает все поля необязательными, нельзя сделать одно или
            выборочно, для этого есть комбинация с комбинации Pick и Omit
          </p>
          <p>
            Partial делает поля необязательными только на верхнем уровне
            (shallow/поверхностное)
          </p>
          <p>
            Т.е если будет вложенный объект, то поля вложенного объекта будут
            обязательными
          </p>
          <p>Для этого нужно писать собственную реализацию DeepPartial</p>
          <br />
          <br />
          <p>Внутренняя реализация Patial</p>
          <pre>
            {`
type Partial<T> = {
    [K in keyof T]?: T[K];
}

keyof T - создает union ключей: "id" | "name" | "email" | "age"

K in - keyof T проходит по каждому ключу

После in должен стоять union ключей: "a" | "b" либо 1 | 5 либо User

type T = {
    [K in "name" | "age"]: string
}

превратится в
type T = {
    name: string
    age: string
}

K = "id",
K = "name",
....

T[K] берет тип ключа
"id"?: number
....
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Required'>
        <NoteItem>
          <p>
            Required противоположность Partial, делает все поля обязательными
          </p>
          <p>Используется заметно реже</p>
          <pre>
            {`
interface User {
    name?: string
    age?: number
}

type T = Required<User>

type T = {
    name: string
    age: number
}

Внутри устроен так:

type Required<T> = {
    [K in keyof T]-?: T[K]
}

'-' отменяет '?'
`}
          </pre>
          <p>Точно так же, как Partial, работает только на первом уровне.</p>
        </NoteItem>
      </Note>
      <Note title='Readonly<T>'>
        <NoteItem>
          <p>Делает все свойства объекта доступными только для чтения.</p>
          <pre>
            {`
Readonly<Type>

Примеры:
1.
const COLORS = {
    primary: "#00f",
    danger: "#f00"
}
Readonly<typeof COLORS>


2.
interface User {
    id: number
    name: string
}
type T = Readonly<User>

type T = {
    readonly id: number
    readonly name: string
}

Внутри устроен след образом:

type Readonly<T> = {
    readonly [K in keyof T]: T[K]
}


! Как и Partial, Readonly работает только поверхностно.


// Что бы отменить readonly можно использовать "-":

type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
}

`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Pick<T, K>'>
        <NoteItem>
          <p>Берет только указанные свойства из существующего типа</p>
          <p>1. Используется в DTO для API (повсеместно)</p>
          <pre>
            {`

interface User {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
}

нам нужны только id, name, email

type UserProfile = Pick<User, "id" | "name" | "email">

{
    id: number
    name: string
    email: string
}


`}
          </pre>
          <br />
          <p>2. Props компонентов</p>
          <pre>
            {`
interface ButtonProps {
    text: string
    disabled: boolean
    loading: boolean
    color: string
    size: string
}

компоненту нужен только text, disabled

type SmallButtonProps = Pick<
    ButtonProps,
    "text" | "disabled"
>


Внутри выглядит:

type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

K extends keyof T - ограничение которое говорит что может содержать только существующие ключи объекта

[P in K] - перебираем ключи которые передал пользователь

При Pick<User, never> - будет {} потому что нечего выбирать
  `}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Exclude<T, U>'>
        <NoteItem>
          <p>
            Удаляет из union-типа все элементы, которые входят в другой union.
          </p>
          <p>
            Exclude работает только с union-типами.!!! <br />
            Он не работает с объектами.
          </p>
          <pre>
            {`

Exclude<Union, WhatToRemove>

type Status =
    | "loading"
    | "success"
    | "error"

type SafeStatus =
    Exclude<Status, "error">

type SafeStatus =
    | "loading"
    | "success"

Внутренняя реализация:

type Exclude<T, U> =
    T extends U
        ? never
        : T

Допустим 
type T = Exclude<"a" | "b" | "c", "b">


TypeScript делает примерно следующее:

"a" extends "b" ? нет, не трогаем
"b" extends "b" ? да, возвращаем
"С" extends "b" ? нет, не трогаем

`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Extract<T, U>'>
        <NoteItem>
          <p>
            Оставляет только те элементы union-типа, которые входят в другой
            union.
          </p>
          <p>Является противоположностью Exclude</p>
          <pre>
            {`

Extract<Union, WhatToKeep>

type Status =
    | "loading"
    | "success"
    | "error";

type SuccessStatus =
    Extract<
        Status,
        "success"
    >

type SuccessStatus = "success"

!!! Важный прием с объектами


type Shape =
    | {
        type: "circle";
        radius: number;
    }
    | {
        type: "square";
        size: number;
    }
    | {
        type: "triangle";
        height: number;
    };


Допустим нам нужен круг:

type Circle =
    Extract<
        Shape,
        { type: "circle" }
    >


Получаем:
type Circle = {
    type: "circle";
    radius: number;
}

!!!Это очень популярный паттерн при работе с Discriminated Unions.

Внутри выглядит так:

type Extract<T, U> =
    T extends U
        ? T
        : never


!!! Важный момент с объектами:

Если написать:

interface User {
    name: string;
    age: number;
}

type T =
    Extract<
        User,
        { name: string }
    >

то результатом будет не  { name: string }, а Весь User !!!

Потому что User extends { name: string }
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Omit<T, K>'>
        <NoteItem>
          <p>Создает новый тип, исключая указанные свойства.</p>
          <pre>
            {`
type PublicUser = Omit<User, "password" | "email">

Omit<Type, Keys>

останутся:

id: number
name: string
createdAt: Date
updatedAt: Date

Внутренняя реализация:

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Индексная сигнатура'>
        <NoteItem>
          <pre>
            {`
[key: number]: unknown - говорит о том что всевозможные ключи объекта будут типа number
а значениями будут любого неизвестного нам типа

так же может быть:

[key: symbol]: unknown
или

[key: string]: unknown


по этому:
1.
type x = {
  [n: number]: string
}
2.
type y = Record<number, string>

1 и 2 типы равны x = y
            `}
          </pre>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Record<K, V>'>
        <NoteItem>
          <p>
            Создает новый объектный тип по набору ключей и одному типу значений.
          </p>
          <pre>
            {`

Record<Keys, Value>

type Role = "admin" | "user" | "guest";

type Permissions = Record<Role, string[]>;

получаем:

{
    admin: string[]
    user: string[]
    guest: string[]
}


type Language = "ru" | "en" | "zh";

const translations: Record<Language, string> = {
    ru: "Привет",
    en: "Hello",
    zh: "你好"
}

Внутренняяя реализация:

type Record<K extends keyof any, T> = {
    [P in K]: T
}

keyof any = number | string | symbol

K extends keyof any значит что ключами могут быть только number | string | symbol
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='ReturnType<T>'>
        <NoteItem>
          <p>Получает тип, который возвращает функция.</p>
          <p>ReturnType работает не с объектами, а с типами функций.</p>
          <p>ReturnType ожидает тип функции, а не саму функцию.</p>
          <pre>
            {`
ReturnType<typeof someFunction>

Допустим имеем внешнюю стороннюю функцию:

function createUser() {
    return {
        id: 1,
        name: "Alex"
    }
}

Можно руками описать возвращаемое значение:

type User = {
    id: number
    name: string
}

Но если вскоре издатель функции изменит возвращаемоме значение, код придется переписывать.

По этому ReturnType решает эту проблему: 

type User = ReturnType<typeof createUser>


Внутреннее устройство:
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never

1. T extends (...args: any[]) => any // T должен быть функцией. Это входное условие, 
// для того чтобы пользователь получил ошибку о том что передает не функцию, 
// теоритически это входное условие можно не ставить, тогда пользователь получит infer а не ошибку
2. (...args: any[]) => any  // любой тип функции
3. infer R // ts вывводит этот тип и называет его R.

Таким образом: T extends (...args: any[]) => infer R ? R : never

// если шаблон соответствует функции, назовови возвращаемое значение R 
// ? верни возвращаемое значение : верни infer



// <T extends SomeType> - T должен быть SomeType или его подтипом.
// T extends SomeType ? A : B - Если T совместим с SomeType, то верни A, иначе B.
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Parameters<T>'>
        <NoteItem>
          <p>Получает тип параметров функции в виде кортежа (tuple).</p>
          <p>Он возвращает не объект и не union, а tuple.</p>
          <pre>
            {`
Parameters<typeof someFunction>

Допустим есть сторонняя функция:

function sum(
    a: number,
    b: number
) {
    return a + b
}

можно руками описать возвращаемое значение:
type Args = [
    number,
    number
]

но если автор изменит аргументы, то придется переписывать тип

Эту проблему как раз решает Parameters


tuple - потому что порядок агрументов имеет значение


-- Внутренняя реализация:

type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never



!!! Пример того в каком случае понадобится узнать аргументы функции:

// функция поиска и debounce

function search(query: string, page: number) {
    // ...
}

const debouncedSearch = debounce(search, 500);

функции debounce нужно знать агрументы search чтобы debouncedSearch вызывалась с теми же параметрами что и search

debouncedSearch(query: string, page: number)

Тогда с Parameters это будет так:

function debounce<T>(fn: T) {
    return (...args: Parameters<T>) => {
        ...
    }
}
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Awaited<T>'>
        <NoteItem>
          <p>Получает тип значения, которое находится внутри Promise.</p>
          <pre>
            {`
Awaited<Promise<User>>

Допустим есть функция:

async function getUser() {
    return {
        id: 1,
        name: "Alex"
    }
}

Возвращает она Promise<User> а не User

Если мне нужен тип именного самого User, тогда пришлось бы писать руками

type User = {
    id: number
    name: string
}

Но благодаря Awaited, используем:

type User = Awaited<ReturnType<typeof getUser>>

И получим то же самое как то что писали бы руками


Упрощенный вариант внутренней реализации:

type Awaited<T> =
    T extends Promise<infer U>
        ? U
        : T

`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='NonNullable<T>'>
        <NoteItem>
          <p>Убирает из типа null и undefined.</p>
          <pre>
            {`

NonNullable<TypeWithNull&Undefined>

Допустим есть: 

type Dirty = string | null | undefined;

type Pure = NonNullable<Dirty>;

получим Pure = string


Внутренняя реализация может отличаться в зависимости от версии TS, но главная идея такая:

type MyNonNullable<T> =
    T extends null | undefined
        ? never
        : T;
`}
          </pre>
        </NoteItem>
      </Note>
      <Note title='Other'>
        <NoteItem>
          <p>
            InstanceType <br />
            ConstructorParameters <br />
            ThisParameterType <br />
            OmitThisParameter <br />
            ThisType <br />
            Uppercase <br />
            Lowercase <br />
            Capitalize <br />
            Uncapitalize
          </p>
        </NoteItem>
        <NoteItem>
          <pre>{`InstanceType<T>`}</pre>
          <p>Получает тип экземпляра класса из типа конструктора.</p>
          <pre>{`
class User {
  name = "Alex";
}

type T = InstanceType<typeof User>;
          `}</pre>
          <p>typeof User - тип конструктора</p>
          <p>
            а InstanceType от typeof User это тип ОБЪЕКТА который будет получен
            после вызова конструктора
          </p>
          <pre>
            {`
Пример использования:

function create<T extends abstract new (...args: any) => any>(
    Class: T
): InstanceType<T> {
    return new Class();
}


Внутренняя реализация:


type InstanceType<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: any) => infer R
        ? R
        : never;
`}
          </pre>
        </NoteItem>
        <NoteItem>
          <pre>{`ConstructorParameters<T>`}</pre>
          <p>Получает параметры конструктора класса в виде tuple.</p>
          <pre>{`
class User {
    constructor(
        public name: string,
        public age: number
    ) {}
}

type T = ConstructorParameters<typeof User>;


Получаем: [string, number]

Пример использования:

function create<T extends new (...args: any) => any>(
    Class: T,
    ...args: ConstructorParameters<T>
) {
    return new Class(...args);
}

Внутренняя реализация:

type ConstructorParameters<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: infer P) => any
        ? P
        : never;
          `}</pre>
        </NoteItem>
        <NoteItem>
          <pre>{`
          ThisParameterType<T>
          `}</pre>
          <p>Получает тип специального параметра this у функции.</p>
          <pre>{`
Пример:

function greet(this: User, message: string) {
    console.log(this.name, message);
}

function greet(this: User, message: string) {
    console.log(this.name, message);
}

type T = ThisParameterType<typeof greet>;


Внутренняя реализация: 

type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
        ? U
        : unknown;
          `}</pre>
        </NoteItem>
        <NoteItem>
          <pre>{`
          OmitThisParameter<T>
          `}</pre>
          <p>Создает новый тип функции, убирая у нее параметр this.</p>
          <pre>{`
Пример:

Было:
function greet(this: User, message: string) {}

type T = OmitThisParameter<typeof greet>;

Cтало:

(message: string) => void
          `}</pre>
        </NoteItem>
        <NoteItem>
          <pre>{`
          ThisType<T>
          `}</pre>
          <p>
            Это особый тип, который позволяет TypeScript определить, каким будет
            this внутри объекта. <br />
            Это уже немного другая категория: ThisType используется
            преимущественно с object literals и contextual typing.
          </p>
          <pre>{`
Пример использования:

type Store = {
    name: string;
};

type Methods = {
    greet(): void;
};

const store: Store & Methods & ThisType<Store> = {
    name: "Alex",

    greet() {
        console.log(this.name);
    }
};


ThisType<Store> - сообщает TypeScript othis для внутренних методов объекта — что this это Store.

Без него TypeScript не обязательно сможет вывести нужный контекст this.


Внутренняя реализация:

interface ThisType<T> {}

Практически пустой интерфейс. Это специальный marker type
который TypeScript использует при contextual typing.
          `}</pre>
        </NoteItem>
        <NoteItem>
          <pre>{`
          Uppercase<S>, Lowercase<S>, Capitalize<T>, Uncapitalize<S>
          `}</pre>
          <p>
            Uppercase переводит все символы в переданном строковом типе в
            верхний регистр.
          </p>
          <p>
            Capitalize переводит в верхний регистр только первый символ строки,
            оставляя остальные символы без изменений
          </p>
          <p>
            Lowercase переводит все символы в переданном строковом типе в нижни
            регистр.
          </p>
          <p>Uncapitalize - Делает первую букву строчной.</p>
          <pre>{`
Пример:

type T = Uppercase<"hello">; -> "HELLO"

type Status = "pending" | "approved" | "rejected";

type UpperStatus = Uppercase<Status>; 
// Результат: "PENDING" | "APPROVED" | "REJECTED"



type Event = "click" | "hover";

type Handler = \`on\${Capitalize<Event>}\`;

// Результат: "onClick" | "onHover"


type CapStatus = Capitalize<Status>; 
// Результат: "Pending" | "Approved" | "Rejected"


Если передать num в Uppercase<> или Capitalize, вызовет ошибку компиляции, 
так как утилитные типы ожидают именно строковый тип данных.


Внутренняя реализация:

type Uppercase<S extends string> = intrinsic;
type Lowercase<S extends string> = intrinsic;
type Capitalize<S extends string> = intrinsic;
type Uncapitalize<S extends string> = intrinsic;

Это intrinsic type, нет обычной реализации, TypeScript знает специальное поведение intrinsic.

          `}</pre>
        </NoteItem>
      </Note>
    </>
  );
}
