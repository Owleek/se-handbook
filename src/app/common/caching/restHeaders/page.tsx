import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='REST HEADERS'>
      <NoteItem>
        <p>ETag: "abc123"</p>
        <br />
        <p>Cache-Control: max-age=3600</p>
      </NoteItem>
    </Note>
  );
}
