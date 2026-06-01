import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Слои и их ответственнсти'>
      <NoteItem>
        <p>repositories</p>
        <p>domain</p>
        <p>infrastructure</p>
        <p>config</p>
        <p>settings</p>
        <p>client</p>
        <p>adapters</p>
        <p>mappers</p>
        <p>interceptors</p>
        <p>routes</p>
        <p>dto</p>
        <p>schema</p>
        <p>model</p>
        <p>features</p>
        <p>entities</p>
        <p>utils</p>
      </NoteItem>
    </Note>
  );
}
