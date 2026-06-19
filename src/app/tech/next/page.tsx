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
        <p>Причины</p>
        <p>Генерация / Flow / technologies</p>
        <p>Hydration</p>
        <p>Webhooks</p>
        <p>Сборка</p>
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
        <p>cookies()</p>
        <p>headers()</p>
        <p>params</p>
        <br />
        <p>
          Cтандарт Web API <br /> общий для любой стороны, как для клиента так и
          для сервера
        </p>
        Cтандарт Web API: <br />
        Request <br />
        Response <br />
        Headers <br />
        URL <br />
        <p>
          На клиенте конструкторы классов предоставляет сам браузер а на сервере
          Node в globalThis
        </p>
        <br />
        <p>
          globalThis.Request <br />
          globalThis.Response <br />
          globalThis.Headers <br />
          globalThis.URL <br />
          globalThis.fetch <br />
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
      </NoteItem>
    </Note>
  );
}
