import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <NoteItem>
        <p>Type & Interface / Declarations</p>
      </NoteItem>
      <Note title='Type & Interface'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Declarations'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
    </>
  );
}
