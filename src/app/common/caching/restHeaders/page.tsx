import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='REST HEADERS'>
      <NoteItem>
        <p>Cache-Control: values</p>
        <p>ETag: hash</p>
        <p>Vary</p>
        <br />
        <p>Date</p>
        <p>Expires</p>
        <p>Last-Modified</p>
        <br />
        <p>Age</p>
        <p>X-Cache: HIT/MISS</p>
        <p>CF-Cache-Status: HIT/MISS</p>
      </NoteItem>
    </Note>
  );
}
