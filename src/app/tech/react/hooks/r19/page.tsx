import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='use'>
        <NoteItem>
          <div></div>
        </NoteItem>
      </Note>
      <Note title='useOptimistic'>
        <NoteItem>
          <div></div>
        </NoteItem>
      </Note>
      <Note title='useFormStatus'>
        <NoteItem>
          <div></div>
        </NoteItem>
      </Note>
      <Note title='useActionState'>
        <NoteItem>
          <div></div>
        </NoteItem>
      </Note>
    </React.Fragment>
  );
}
