import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Structure'>
      <NoteItem>
        <p>Пример структуры next приложения:</p>
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
        <p>
          в middleware.ts &mdash; мы перехватываем запрос пока он не дошел до
          конкретных страниц или route.ts для того чтобы проверить авторизаван
          ли пользователь, имеет ли доступ и сразу редиректить его на страницу
          логина.
        </p>
        <p>
          в переменной config обозначаются конкретные rout-ы (endpoint-ы) по
          которым нужно осуществлять перехват(проверку), потому что проверять
          все, слишком затратно по ресурсам
        </p>
        <pre>
          {`
            export function middleware(request: NextRequest) {
              const accessToken =
                request.cookies.get('access_token');

              if (!accessToken) {
                return NextResponse.redirect(
                  new URL('/login', request.url)
                );
              }

              return NextResponse.next();
            }

            export const config = {
              matcher: ['/dashboard/:path*'],
            };
          `}
        </pre>
        <br />
        <p>
          в route.ts обрабатываем входящие запросы с клиента и отвечаем на них
          просто вызывая нужный сервис не вдумываясь о том как он реализован
        </p>
        <pre>
          {`
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
        <br />
        <p>profile.service.ts отвечает за бизнес-логику.</p>
        <p>
          Он знает: <br />
          правила бизнеса <br />
          проверки <br />
          права доступа <br />
          оркестрацию нескольких репозиториев <br />
        </p>
        <pre>
          {`
              class ProfileService {
                constructor(
                  private profileRepository: ProfileRepository
                ) {}

                async updateProfile(id: string, dto: UpdateProfileDto) {
                  const profile = await this.profileRepository.findById(id);

                  if (!profile) {
                    throw new NotFoundException();
                  }

                  return this.profileRepository.update(id, dto);
                }
              }
            `}
        </pre>
        <br />
        <p>
          profile.repository.ts отвечает только за работу с источником данных.
        </p>
        <p>
          Он знает: <br />
          SQL <br />
          Prisma <br />
          TypeORM <br />
          MongoDB <br />
          внешний API <br />
          <br />
          Но не знает бизнес-логику.
        </p>
        <pre>
          {`
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
        <br />
      </NoteItem>
    </Note>
  );
}
