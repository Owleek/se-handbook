import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Modules'>
      <NoteItem>Note item number 1</NoteItem>
      <NoteItem>Note item number 2</NoteItem>
      <NoteItem>Note item number 3</NoteItem>
      <NoteItem>Note item number 4</NoteItem>
      <NoteItem>Note item number 5</NoteItem>
    </Note>
  );
}
