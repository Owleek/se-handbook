import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <NoteItem>
        <p>Mapped types</p>
      </NoteItem>
      <Note title='Mapped types'>
        <NoteItem>
          <p>
            Mapped Type — это способ автоматически создать новый тип, пройдясь
            по всем ключам существующего типа.
          </p>
          <p>
            TypeScript говорит: Возьми каждый ключ старого типа и создай по нему
            новое свойство.
          </p>
          <pre>
            {`
Допустим есть 

interface User {
    id: number
    name: string
    age: number
}

type T = {
    [K in keyof User]: User[K]
}

получится копия которая ничего не меняет

{
    id: number
    name: string
    age: number
}

Но можем и что то заменить, например сделать поля необязательными

type T = {
    [K in keyof User]?: User[K]
}

или наоборот сделать обязательными из необязательных

type T = {
    [K in keyof User]-?: User[K]
}

На базе Mapped types построено много Utility types
            `}
          </pre>
        </NoteItem>
      </Note>
    </>
  );
}
