import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function LossNumberPrecision() {
  return (
    <Note title='OOP'>
      <NoteItem>
        <p>
          Composition over Inheritance &mdash; предпочитай собирать объект из
          независимых частей, не строй глубокие иерархии наследования. <br />
          Сначала подумай о композиции.
          <br />
          Если наследование простое и хорошо описывает предметную область
          &mdash; тогда наследование. <br />
          <br />
          Огрмное дерево наследования сложно поддерживать: <br />
          {'Animal'} <br />
          {'├── Dog'} <br />
          {'│   ├── PoliceDog'} <br />
          {'│   └── GuideDog'} <br />
          {'└── Cat'} <br />
          <br />
          Композиция проще: <br />
          {'interface Barkable {'}
          <br />
          &nbsp;{' bark(): void'} <br />
          {'}'} <br />
          {'interface Eatable {'} <br />
          &nbsp;{' eat(): void'} <br />
          {'}'} <br />
          {'class Dog implements Eatable, Barkable {'} <br />
          &nbsp;{'  eat() {}'} <br />
          &nbsp;{'  bark() {}'} <br />
          {'}'}
          {''}
        </p>
        <br />
        <p>
          Separation of Concerns (SOC) &mdash; Дели систему по зонам
          ответственности
        </p>
        <br />
        <p>
          High Cohesion, Low Coupling &mdash; высокая связность внутри модуля и
          низкая между модулями.
        </p>
        <br />
        <p>
          Convention over Configuration &mdash; разумные соглашения лучше лишних
          настроек.
        </p>
        <br />
        <p>
          Single Source of Truth (SSOT) &mdash; Должна быть единая точка истины
        </p>
        <br />
        <p>KISS &mdash; почти = YAGNI, не усложняй код, только необходимо</p>
        <br />
        <p>DRY &mdash; не повторяй логику и знания</p>
        <br />
        <p>Immutability &mdash; не изменяй данные, а создавай новые.</p>
        <br />
        <p>
          Pure Functions &mdash; функция зависит только от входных данных и не
          имеет побочных эффектов.
        </p>
      </NoteItem>
    </Note>
  );
}
