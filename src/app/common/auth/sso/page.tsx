import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='SSO / OAuth 2.0 / OIDC'>
      <NoteItem>
        <p>SSO - Single Sign-on (единый способ входа)</p>
        <br />
        <p>OAuth provider = Identity Provider</p>
        <br />
        <p>
          Первым web SSO, был SAML (Security Assertion Markup Language) <br />
          Его использовали в Enterprise <br />
          У корпораций много различных сервисов на разных доменах и системах,
          для всех них нужен был единый вход. <br />
          Для этого придумали протокл SAML. <br />
          На IDP (Identity provider) по протоколу SAML редиректили все сервисы
          для авторизации и доверяли его ответу. <br />
          SAML работал поверх xml, однако канонизация xml при сериализации очень
          сложная, по этому в современный веб его тащить не стали и искали
          другие способы.
        </p>
        <br />
        <p>
          OAuth 1.0 <br />
          OAuth является протоколом для предостоставления прав доступа, но его
          начали использовать для логинизации (авторизации).
          <br />
          В OAuth 1.0 многоступенчатая система обмена криптограческими хешами
          <br />
          Каждое хешированое дорогое но их еще и много. Из-за этих сложностей
          OAuth 2.0 сделали простым
        </p>
        <br />
        <p>
          Ранний OAuth 2.0 - только code exchange, не использует подписываение
          запросов криптографией как в OAuth 1.0 (он опасный потому что без
          защиты)
        </p>
        <br />
        <p>
          Совренменный OAuth 2.0 - state + OIDC(аутентификация) + code exchange
          + PCKE (защита) + best practice
        </p>
        <br />
        <p>
          state - это уникальная строка сгенерированная инициатором. Она
          прикрепляется к url при редиректе, а после получает ее обратно с
          обратным редикертом от OAuth provider, после этого, изначальный и
          полученный state сравнивается, если совпали, значит данные вернули
          подлинные данные.
        </p>
        <br />
        <p>
          Поскольку OAuth 2.0 не очень подходил для логинизации, к нему
          прикрутили OIDC (Open Id Connect). <br />
          OIDC - это протокол аутентификации для OAuth 2.0 <br />
          Хотя OIDC вообще не является частью OAuth 2.0, но без OIDC OAuth 2.0
          уже не используется. <br />
          scope в url может быть следующим - scope: openid email calendar
          <br />
          openid - это как раз от OIDС, что гуглу нужно вернуть
          идентификационные данные пользователя
          <br />а scope: email calendar это чисто OAuth 2.0, разрешения на
          использование сервисов email, calendar пользователя
        </p>
        <br />
        <p>
          code exchange - после редирект на OAuth provider, OAuth provider
          выдает authorazation_code в ответ по callbak_uri. <br />
          Для того что бы получить токен доступа, нужно передать OAuth provider
          этот authorazation_code и в обмен получить access_token <br />
          Зачем этот шаг ? <br />
          Затем что Authorization Code Flow (code exchange) - появился для того,
          чтобы OAuth provider не возаращал сразу токен в callback uri (это было
          в OAuth 1.0 - implicit flow), это небезопасно.
        </p>
        <br />
        <p>
          Для нового подхода к OAuth 2.0 просто code exchange недостаточно,
          нужно доказать что я тот кому выдавался auth_code, по этому пришли к
          PKСE.
          <br />
          PKСE - Proof Key for Code Exchange (пикси).
          <br />
          Отправитель auth_code, создает уникальную строку - verify_code,
          хеширует ее крипт.алгоритмом, получившийся хеш (code_challange) и
          использованный крипт.алгоритм передает OAuth provider в url при
          редикерте, затем при code exchange отправляет verify_code, OAuth
          provider хеширует полученный verify_code полученным ранее
          крипт.алгоритм и сравнивает с code_challange, если совпало, отдает
          токены.
        </p>
        <br />
        <p>
          best practice - не хранить secrect на frontend, не использовать
          подходы раннего OAuth 2.0 и др.
        </p>
      </NoteItem>
    </Note>
  );
}
