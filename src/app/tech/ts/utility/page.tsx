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
      <Note title='ReturnType'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Parameters'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Awaited'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='NonNullable'>
        <NoteItem>
          <p></p>
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
      </Note>
    </>
  );
}
