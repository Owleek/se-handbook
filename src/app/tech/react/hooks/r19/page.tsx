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

/ важно чтобы промис был создан вне компонента, 
/ иначе он будет создаваться при каждом рендере компонента
/ но тогда будет засорятся глобальное пространство,
/ а значит нельзя использовать

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
          <p>
            Зачастую - оптимистическое обновление, кеширование, дедубликация
            запросов решаются библиотекой RTK
          </p>
          <p>
            useOptimistic почти не используют, поскольку серверные экшены почти
            не используются, а обычный запрос + инвалидация next все усложняет,
            проще не использовать
          </p>
          <p>
            useOptimistic — это не состояние, а overlay (наложение) над
            настоящим состоянием которое может приходить откуда угодно
          </p>
          <pre>
            {`
const [optimisticLikes, addLike] = useOptimistic(
    trueState,
    (currentState, like) => {
        return [...currentState, like];
    }
);
            `}
          </pre>
          <p>В случаях когда происходит like - unlike - like</p>
          <p>
            Скорее всего оптимистичекое состонияе будут отличаться от
            серверного, для этого можно использовать некоторые подходы
          </p>
          <p>например:</p>
          <p>
            при очередном вызове оптимистического обновления, старый useref
            controller абортитить controller.abort() и присваивать useref новый
            new AbortContoller()
          </p>
          <br />
          <p>Пример использовать AbortContoller</p>
          <p>
            т.е в контекст запроса, по мимо метода запроса, хеадерс и бади,
            передаем еще и signal: controller.signal для браузера
          </p>
          <pre>
            {`
const controller = new AbortController();
fetch("/api/users", {
  signal: controller.signal,
});
              `}
          </pre>
          <br />
          <p>
            Другой способ, использовать обновление истинного состояния только
            для последнего запроса используя счетчик
          </p>
          <pre>
            {`
async function handleClick(nextValue: boolean) {
  // Пользователь сразу увидел изменение
  setOptimisticValue(nextValue);

  // Получили id текущего запроса
  const requestId = ++requestIdRef.current;

  try {
    const result = await api.do(nextValue);

    // Пока ждали сервер, пользователь уже нажал еще раз
    if (requestId !== requestIdRef.current) {
      return;
    }

    // Обновляем настоящее состояние
    setTrueValue(result.value);

  } catch {
    // Это уже не последний запрос?
    if (requestId !== requestIdRef.current) {
      return;
    }

    // Показываем ошибку.
    // Серверное состояние не изменилось,
    // поэтому optimistic UI автоматически исчезнет.
    toast.error("Не удалось поставить лайк");
  }
}
              `}
          </pre>
        </NoteItem>
      </Note>
      <Note title='useFormStatus'>
        <NoteItem>
          <p>
            useFormStatus — позволяет любому компоненту внутри form узнать
            текущее состояние отправки этой формы, не передавая это состояние
            через props
          </p>
          <p>
            используется для простых форм без использования библиотек, поскольку
            в бибилиотеках уже есть эта реализация
          </p>
          <pre>
            {`
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </button>
  );
}
            `}
          </pre>
        </NoteItem>
      </Note>
      <Note title='useActionState'>
        <NoteItem>
          <p>
            useActionState - отвечает на вопрос Какой результат вернула отправка
            формы и автоматически обновлять UI
          </p>
          <pre>
            {`
'use client';
import { useActionState } from 'react';
import { loginUser } from '@/app/actions'; // Это Server Action (серверная функция)

export default function LoginForm() {
  // Передаем серверную функцию и начальное состояние (ошибок нет)
  const [state, formAction, isPending] = useActionState(loginUser, { error: null });

  return (
    <form action={formAction}>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      
      {/* Выводим ошибку, если сервер её вернул */}
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      
      {/* Автоматически блокируем кнопку во время отправки */}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
}

"use server";
export async function loginUser(prevState, formData) {
  const email = formData.get("email");

  if(error) return {error: 'something wrong'}

  return {
    message: 'asdasdas',
  };
}
            `}
          </pre>
        </NoteItem>
      </Note>
    </React.Fragment>
  );
}
