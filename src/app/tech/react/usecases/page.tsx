'use client';

import React, { useEffect } from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  useEffect(() => {}, []);

  return (
    <Note title='Use cases'>
      <NoteItem>
        <p>1. ISR + SC</p>
        <p>2. RHBL</p>
        <p>3. HOC</p>
        <p>4. Context</p>
        <p>5. Portals</p>
        <p>6. Compound Components + Context</p>
        <p>7. Render props</p>
      </NoteItem>
    </Note>
  );
}
