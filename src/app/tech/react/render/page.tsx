'use client';

import React, { useEffect } from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  useEffect(() => {}, []);

  return (
    <Note title='Render & Reconciliation'>
      <NoteItem>
        <p>1. RE Tree & Fiber Tree</p>
        <pre>
          {`
            1. React cоздает React Elements

            2. формирует Fiber nodes
            
            3. setState()
                    
            4. создает WorkInProgress Fiber
                    
            5. Выполняется render компонента
              (вызывается функция компонента с НОВЫМИ props)
                    ↓
            6. Reconciliation
              (сравнение нового React Tree со старым)
                    ↓
            7. Commit
              (изменение реального DOM)
            `}
        </pre>
        <p>2. Fiber intro</p>
        <p>3. Effects processes / prioritization</p>
        <p>4. curr tree / wip tree</p>
        <p>5. heuristics / traversal algorithm</p>
      </NoteItem>
    </Note>
  );
}
