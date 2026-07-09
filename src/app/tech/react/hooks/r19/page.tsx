import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <React.Fragment>
      <Note title='use'>
        <NoteItem>
          <p>use - может принимать в себя как промис так и контекст</p>
          <p>use не участвует в очереди хуков, его можно вызывать условно</p>
          <p>use сам проверяет контекст это или объект промиса</p>
          <p>
            use() - в Server Components используют в основном тогда, когда
            Promise передается из другого места или нужно встроиться в механизм
            Suspense, но основным способом загрузки данных в серверных
            компонентах стандартом де-факто остается async/await.
          </p>
          <p>use позволяет использовать объект промиса в не async функциях</p>
          <p>
            React доходя до use, проверяет состояние промиса, в случае pending
            выбрасывает Promise и его перехватывает ближайший Suspense
          </p>
          <p>
            Если ближайший Suspense находится высоко по дереву, то все это
            поддерево будет в лоадинг, по этому границы Suspense очень важны
          </p>
          <pre>
            {`
// серверный
export default function Container() {
    const userPromise = fetch();
    return <User promise={userPromise} />
}
function User({ promise }) {
    const user = use(promise);
}


// клиентский
"use client";
import { Suspense } from "react";
import User from "./User";

/ важно чтобы промис был создан вне компонента, иначе он будет создаваться при каждом рендере компонента
/ но тогда будет засорятся глобальное пространство, а значит нельзя использовать

const userPromise = fetch("/api/user").then(r => r.json());

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <User promise={userPromise} />
    </Suspense>
  );
}
            `}
          </pre>
        </NoteItem>
      </Note>
      <Note title='useOptimistic'>
        <NoteItem>
          <div></div>
        </NoteItem>
      </Note>
      <Note title='useFormStatus'>
        <NoteItem>
          <div></div>
        </NoteItem>
      </Note>
      <Note title='useActionState'>
        <NoteItem>
          <div></div>
        </NoteItem>
      </Note>
    </React.Fragment>
  );
}
