import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Auth'>
      <NoteItem>
        <p>sessionid</p>
        <p>jwt-access-token, jwt-refresh-token</p>
      </NoteItem>
    </Note>
  );
}
