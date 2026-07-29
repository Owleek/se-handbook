import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <>
      <NoteItem>
        <p>Mapped types</p>
      </NoteItem>
      <Note title='Mapped types'>
        <NoteItem>
          <p></p>
        </NoteItem>
      </Note>
    </>
  );
}
