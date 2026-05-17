import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Real-time updates'>
      <NoteItem>
        <p>
          <p>Short poling</p>
        </p>
        <p>
          <p>Long poling</p>
        </p>
        <p>
          <p>Websocket - поверх TCP</p>
          <p>WebTransport - поверх QUIC realtime</p>
        </p>
        <p>
          <p>SSE</p>
        </p>
        <br />
        <p>
          WebRTC работает поверх SRTP (Secure Real-time Transport Protocol), для
          видео звонков и тд, начинается как websoket чтобы договориться, дальше
          WebRTC
        </p>
      </NoteItem>
    </Note>
  );
}
