'use client';

import React, { useEffect } from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  useEffect(() => {}, []);

  return (
    <Note title='Render & Reconciliation'>
      <NoteItem>
        <p>1. RE Tree & Fiber Tree</p>
        <p>2. Fiber intro</p>
        <p>3. Effects processes / prioritization</p>
        <p>4. curr tree / wip tree</p>
        <p>5. heuristics / traversal algorithm</p>
      </NoteItem>
    </Note>
  );
}
