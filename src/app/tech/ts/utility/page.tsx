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
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Pick'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Omit'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Record'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Readonly'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Exclude'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Extract'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='NonNullable'>
        <NoteItem>
          <p></p>
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
