import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Next'>
      <NoteItem>
        <p>
          до 13 версии NEXT был обычный SSR (Pages router: запрос - генерация
          целой html - передача клиенту - гидрация) <br />в 13 версии в
          experimental появился RSC - react server components (App router -
          появился streaming, передается не целиком страница а куски по
          готовност, появились полноценные самостоятельные серверные компоненты
          по умолчанию, до этого для получения данных нужно было отдельно от
          компонента писать функцию getServersideProps и Next ее вызывал перед
          вызовом самого компонента и в пропс передавал данные) <br />
          13.4 - RSC stable <br />
          14.0 - Server Actions Stable <br />
          15.0 - Изменения в кэшировании и async API <br />
          16.0 - Turbopack и дальнейшее развитие App Router
        </p>
        <p>
          Next приложение это новый подход в web-приложении, существенная часть
          логики теперь выполняется на сервере, а на клиент отправляются уже
          готовые части для отображения (рендера)
        </p>
        <p>
          По мимо того что высокая скорость загрузки по сравнению с SPA, в
          данном подходе хорошо работает SEO
        </p>
        <p>
          Теперь Next приложение это BFF, который выполняе сразу 2 ключевые
          функции, 1 - подгатавливает куски для рендера, 2 - выполняет простые
          backend операции
        </p>
        <p>Hydration</p>
        <br />
        <p>Deployment</p>
        <p>на CI - npm run build</p>
        <p>
          На сервер нужен артефакт .next <br />
          public/ <br />
          package.json <br />
          затем npm install чтобы получить /node_modules <br />
          затем npm run start <br />
          дальне Next сам будет заниматься оркестрацией серверных и клиентских
          компонентов
        </p>
        <br />
        <p>
          cookies() - изпользуется в серверных компонентах, для получения куки,
          технически ее можно вызывать и middleware и в route, но это излишне
          так как в те файлы next в аргумент функции передает request из которго
          можно достать как cookies так прочую информацию
        </p>
        <p>
          headers() - по аналогии с cookies() используется только в серверных
          компонентах для получения заголовков
        </p>
        <p>params</p>
        <br />
        <p>
          Web API <br />
          Является общим для любой стороны, как для клиента так и для сервера и
          в него входят стандраты запросов, ответов, url и др.:
        </p>
        <br />
        <p>
          Request - при помощи самого класса можно создать запрос new
          Request(url, {`{method: post и тд}`}), это и делает под капотом fetch.
        </p>
        <br />
        <p>
          На сервере мы получаем экземпляр класса Request который содержит такие
          поля как method, url, body и др. <br /> <br />
          Response - создает http response клиенту стандартизированного вида:
        </p>
        <br />
        <pre>
          {` return Response.json( { error: 'Not found' }, { status: 404 } ); `}
        </pre>
        <br />
        <p>Headers - позваоляет задавать заголовки к запросу через</p>
        <br />
        <p>
          URL - формирует из строки объект c полями, pathname, searchParams{' '}
          <br />
        </p>
        <p>
          На клиенте конструкторы классов предоставляет сам браузер а на сервере
          Node в globalThis: globalThis.Response и прочие
        </p>
        <br />
        <pre>
          {`
├── app/                           (главная папка App Router)

│   ├── layout.tsx                 (корневой layout всего сайта)
│   ├── page.tsx                   (главная страница "/")

│   ├── login/
│   │   └── page.tsx               ("/login")

│   ├── profile/
│   │   └── page.tsx               ("/profile")

│   ├── products/
│   │   ├── page.tsx               ("/products")
│   │   └── [id]/
│   │       └── page.tsx           ("/products/123")

│   ├── orders/
│   │   └── [orderId]/
│   │       └── page.tsx           ("/orders/555")

│   ├── api/                       (BFF endpoints)

│   │   ├── profile/
│   │   │   └── route.ts           (GET /api/profile)

│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts       (POST /api/auth/login)
│   │   │   └── logout/
│   │   │       └── route.ts       (POST /api/auth/logout)

│   │   └── products/
│   │       └── [id]/
│   │           └── route.ts       (GET /api/products/123)

│   ├── loading.tsx                (глобальный loading)
│   ├── error.tsx                  (глобальный error)
│   └── not-found.tsx              (404)

│
├── components/                    (переиспользуемые UI-компоненты)

│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── ProductCard.tsx
│   └── Button.tsx

│
├── services/                      (работа с репозиториями)

│   ├── auth.service.ts
│   ├── user.service.ts
│   ├── product.service.ts
│   └── order.service.ts

├── repositories/                      (репозитории, работа с внешними API)

│   ├── auth.repository.ts
│   ├── user.repository.ts
│   ├── product.repository.ts
│   └── order.repository.ts


│
├── lib/                           (общие утилиты)

│   ├── fetcher.ts
│   ├── cookies.ts
│   ├── auth.ts
│   └── logger.ts

│
├── types/

│   ├── user.ts
│   ├── product.ts
│   └── order.ts

│
├── middleware.ts                  (middleware Next)

│
├── public/                        (статика)

│   ├── logo.svg
│   └── images/

│
├── .env
├── next.config.ts
├── package.json
└── tsconfig.json
        `}
        </pre>
        <br />
        <pre>
          {`
app/api/profile/route.ts
------------------------

import { profileService } from '@/services/profile.service';

export async function GET() {
  const profile = await profileService.getCurrentUser();

  return Response.json(profile);
}

export async function POST(request: Request) {
  const body = await request.json();

  const profile = await profileService.updateProfile(body);

  return Response.json(profile);
}
`}
        </pre>
        <br />
        <p>
          <pre>
            {`
services/profile.service.ts
---------------------------

import { profileRepository } from '@/repositories/profile.repository';

export const profileService = {
  async getCurrentUser() {
    const user = await profileRepository.findById(1);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  },
};
`}
          </pre>
        </p>
        <br />
        <p>
          <pre>
            {`
repositorires/profile.repository.ts
-----------------------------------
export const profileRepository = {
  async findById(id: number) {
    // prisma.user.findUnique(...)
    // sql query
    // mongodb query

    return {
      id,
      name: 'John',
      email: 'john@test.com',
    };
  },
};
`}
          </pre>
        </p>
        <p>
          в route.ts обрабатываем входяшие запросы с клиента и отвечаем на них
        </p>
        <br />
        <p>
          в middleware.ts мы перехватываем запрос пока он не дошел до конкретных
          страниц или route.ts для того чтобы проверить авторизаван ли
          пользователь, имеен ли доступ и сразу редиректить его. <br />в
          переменной config обозначаются конкретные rout-ы (endpoint-ы) по
          которым нужно осуществлять перехват и проверку
        </p>
        <br />
        <p>
          Начиная с версии next 14, стали доступны <b>server actions</b>
        </p>
        <p>
          Cмысл их в том что, на сервере при билде для серверного экшена
          создается прокси функция, которая содержит в себе идентификатор
          серверной функции. <br />
          При вызове этой прокси-функции, она получает аргумент если он
          предусмотрен на серевной функции и шлет http запрос с идентификтором
          этой функции и ее аргументами, на сервере next обрабатывает запрос,
          находит эту функцию по идентификатору, передает ее аргументы и если
          она что то возвращает после выполнения, вовращет это ответом на запрос
        </p>
        <p>
          По пусти дела, server actions это простая RPC (remote procedure call)
        </p>
        <p>
          Этот экшн может быть как сомостоятельной функцией которая выполняет
          мутации в базе данных, так и тонкой оберткой над другим сложным API,
          например graphql, она может быть самостоятельной если выполняемая
          операция не требует наличие HTTP API для сторонних клиентов, например
          мобильного приложениея или других фронтендов
        </p>
        <p>Динамические страницы</p>
        <p>Безопасность</p>
        <p>Next целиком</p>
      </NoteItem>
    </Note>
  );
}
