import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <NoteItem>
        <p>Promise / Fetch</p>
      </NoteItem>
      <Note title='Promise'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
      <Note title='Fetch'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
    </>
  );
}
