'use client';

import React, { useEffect } from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  useEffect(() => {}, []);

  return (
    <Note title='Promise'>
      <NoteItem>Desciption</NoteItem>
    </Note>
  );
}
