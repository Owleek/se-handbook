import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <NoteItem>
        <p>Utility types: Omit, Pick .....</p>
      </NoteItem>
      <Note title='Omit'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Pick'>
        <NoteItem>
          <p></p>
        </NoteItem>
        . <br />. <br /> .
      </Note>
    </>
  );
}
