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
        <p>cookies(), headers(), params</p>
        <br />
        <br />
        <pre className='fz-12'>
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
├── services/                      (работа с внешними API)

│   ├── auth.service.ts
│   ├── user.service.ts
│   ├── product.service.ts
│   └── order.service.ts

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
      </NoteItem>
    </Note>
  );
}
