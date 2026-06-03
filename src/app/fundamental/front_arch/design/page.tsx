import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Архитектурные дизайн системы'>
      <NoteItem>
        <p>FSD</p>
        <p>
          Самое главное в построении архитектуры приложения - это следовать
          принципу High cohesion & Low Coupling
        </p>
        <p>
          Новая версия методологии FSD для тонких клиентов пытается следовать
          этому принципу
        </p>
        <p>
          Однако для толстых клиентов - использование всех слоев порождает
          размазывание кода по слоям, что ухудшает Cohesion(цельность,
          модульность), особенно слой features
        </p>
        <p>
          Тем не менне, в fsd есть очень крутое предложение для повышения
          прозрачности архитектуры при кроссимпортах между модулями, а именно
          явное указание в @x/ о связах с другими модулями
        </p>
        <p>
          FSD &mdash; для малого бизнеса вообще не нужен, поскольку FSD это про
          сложную архитектуру крупного приложения, расширяемость,
          поддерживаемость, эксперитизу, большую команду что для малого проекта
          слишком долго и дорого. Для малого проекта (бизнеса) подойдет любая
          псевдоархитектура (т.е ее отсутствие)
        </p>
        <p>
          С одной стороны FSD должен нивелировать некомпетентность некоторых
          кадров в большой команде, однако если некоторые не понимают FSD, то и
          следовать ей не смогут. А если понимают - то поймут и более подходящую
          для проекта архитектуру, fsd же будет порождать больше проблем чем
          решений
        </p>
        <br />
        <p>entity сущность user (модуль):</p>
        <p>
          <pre>
            {`
              entities/
                    └── user/
                        ├── model/
                        │   ├── types.ts
                        │   ├── store.ts
                        │   ├── selectors.ts
                        │   └── hooks.ts
                        │
                        ├── api/
                        │   ├── userApi.ts
                        │   ├── dto/
                        │   └── mappers/
                        │
                        ├── ui/
                        │   ├── UserAvatar.tsx
                        │   └── UserCard.tsx
                        │
                        ├── lib/
                        │   ├── formatUserName.ts
                        │   └── getUserRole.ts
                        │
                        └── index.ts
            `}
            {`
              dto/
                ├── user.dto.ts
                ├── update-user.dto.ts
                └── index.ts
            `}
            {`
              Или + часть от DDD
              entities/user/
                        ├─ domain/
                        ├─ repositories/
                        ├─ model/
                        ├─ api/
                        ├─ lib/
                        └─ ui/
              `}
          </pre>
        </p>
        <p></p>
        <p>Monorepository</p>
        <p></p>
        <p>DTO</p>
        <p>repositories</p>
        <p>domain</p>
        <p>infrastructure</p>
        <p>config</p>
        <p>settings</p>
        <p>client</p>
        <p>adapters</p>
        <p>mappers</p>
        <p>interceptors</p>
        <p>routes</p>
        <p>dto</p>
        <p>schema</p>
        <p>model</p>
        <p>features</p>
        <p>entities</p>
        <p>utils</p>
      </NoteItem>
    </Note>
  );
}
