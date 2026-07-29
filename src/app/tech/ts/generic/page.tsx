import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <NoteItem>
        <p>Generic - Objects / Functions / Classes / Conditions</p>
      </NoteItem>
      <Note title='Generic Objects'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Generic Functions'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Generic Classes'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Generic Conditions'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
    </>
  );
}
