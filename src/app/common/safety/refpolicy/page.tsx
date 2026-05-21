import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Referrer-Policy'>
      <NoteItem>
        <p>
          <p>
            Referrer-Policy - это политика управлет тем какую информацию о
            текущей странице узнает domain на который мы перешли по ссылке
          </p>
          <br />
          <p>
            Дело в том что когда пользователь переходит на другой сайт, в url
            текущей странице может быть чувствительная информация которая станет
            известна другому сайту, для того чтобы это не произошло, backend
            этой страницы может заранее задать правило браузеру, то какую
            информацию об этой странице можно передавать domain на который
            переходим
          </p>
          <br />
          <p>
            При первичном получении страница от сервера, браузер получает не
            только html, но и правила по работе с этой страницей, и
            Referrer-Policy одно из них
          </p>
          <br />
          <p>
            Если сервер не выставляет значение Referrer-Policy, браузер по
            умолчанию использует свою Referrer-Policy, в кототором в современном
            стандарте это: <br />
            <br />
            <b>strict-origin-when-cross-origin</b> - same-origin → полный URL,
            cross-origin → только origin, HTTPS → HTTP → ничего
          </p>
          <br />
          <p>
            Backend приложение может выставить следующие значния для
            Referrer-Policy: <br />
            <br />
            <b>strict-origin-when-cross-origin</b> - чтобы не полагаться
            выставит или не выставит такую политику браузер.
            <br />
            <b>no-referrer</b> - ни один domain не будет видеть в заголовке
            Referer (даже родные), то откуда пришел пользователь (Referer:
            {'<none>'})
            <br />
            <b>same-origin</b> - в рамках того же origin будет полный url с
            query параметрами, а для прочих origin - ничего <br />
            <b>unsafe-url</b> - самый опасный вариаент, отправляет полный url
            всем domain <br />
            <b>origin-when-cross-origin</b> - same-origin → полный URL,
            <b>cross-origin</b> → только origin <br />
            <b>origin</b> - Всегда отправлять только origin
            (https://example.com) без path/query <br />
            <b>no-referrer-when-downgrade</b> - Отправлять полный URL везде,
            кроме перехода HTTPS → HTTP <br />
            <b>strict-origin</b> - Отправлять только origin, но НЕ отправлять
            при HTTPS → HTTP
          </p>
        </p>
      </NoteItem>
    </Note>
  );
}
