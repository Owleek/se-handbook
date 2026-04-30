import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='ALL'>
      <NoteItem>
        <p>TCP</p>
        <br />
        <p>UDP</p>
        <br />
        <p>QUIC</p>
        <br />
        <p>SRTP</p>
        <br />
        <p>DCCP</p>
        <br />
        <p>MPTCP</p>
        <br />
      </NoteItem>
    </Note>
  );
}
