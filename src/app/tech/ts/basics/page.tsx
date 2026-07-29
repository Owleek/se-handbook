import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <NoteItem>
        <p>
          Виды типов (множества) / Пересечения / Преобразования / tuple,
          кортежи, литералы / keyof typeof in / enum (obj const)
        </p>
      </NoteItem>
      <Note title='Виды типов (Множества)'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Пересечения'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Преобразования'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='tuple, кортежи, литералы'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='keyof typeof in'>
        <NoteItem>
          <p></p>
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
