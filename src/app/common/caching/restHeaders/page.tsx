import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='REST HEADERS'>
      <NoteItem>
        <p>Vary</p>
        <br />
        <p>ETag: hash</p>
        <br />
        <p>Cache-Control: values</p>
        <p>Date</p>
        <p>Expires</p>
        <p>Last-Modified</p>
        <p>Age</p>
        <p>X-Cache: HIT/MISS</p>
        <p>CF-Cache-Status: HIT/MISS</p>
        <br />
        <p>stale-while-revalidate</p>
        <p>stale-if-error</p>
        <p>no-store, no-cache, immutable</p>
      </NoteItem>
    </Note>
  );
}
