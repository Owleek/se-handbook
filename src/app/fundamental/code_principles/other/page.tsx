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
        <br />
        <p>
          DI Container &mdash; это контейнер для различных Dependency
          Inversions(Repository/Services).
          <br />
          Когда модулю А нужен некий функционал или сервис, то ему нужно его
          откуда то получить, и получать он будет не от конкретного модуля с
          конкретным называнием сервиса, а будет получать по абстрактному
          интерфейсу сервиса из Хранилища/Контейнера которы будет содержать в
          себе тот сервис который имплементирует нужный интерфейс.
          <br />
          Таким образом любой модуль может имплементировать запрашиваемый
          функционал и интерфейс модуля A, но об A он ничего знать не будет, он
          просто предоставит и зарегистрирует сервис в контейнере, а из
          контенера его возьмет любой другой модуль.
          <br />В таком случае между модулями нет прямой зависимости. <br />
          <br />
          {`container.register('IsomeService', SomeService')`} <br />
          тогда модуль А, просто `
          {'const service = container.get("IsomeService")'}` <br />В данном
          случае IsomeService просто ключ (id) к значению SomeService, но для id
          лучше использовать Symbol чтобы избавиться от фактора опечаток в
          названии индентификатора
          <br />
          {`export const PRODUCT_SERVICE = Symbol('PRODUCT_SERVICE');`} <br />
          {`container.register(PRODUCT_SERVICE, SomeService')`} <br />
          {`container.get(PRODUCT_SERVICE)`} <br />
        </p>
      </NoteItem>
    </Note>
  );
}
