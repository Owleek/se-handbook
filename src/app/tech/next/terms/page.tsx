import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Deployment'>
      <NoteItem>
        <p>
          cookies() - изпользуется в серверных компонентах, для получения куки,
          технически ее можно вызывать и middleware и в route, но это излишне
          так как в те файлы next в аргумент функции передает request из
          которого можно достать как cookies так прочую информацию
        </p>
        <p>
          headers() - по аналогии с cookies() используется только в серверных
          компонентах для получения заголовков
        </p>
        <p>
          params - это объект в котором будет содержатся информаци о
          динамическом роуте, его нужно вызывать в компонентах. <br />
          app/users/[id]/page.tsx. тогда в params будет лежать ключ id со
          значением. <br />
          так же как и обычные роуты, динамические роуты тоже обслуживаются
          сервером api: <br />
          app/api/users/[id]/route.ts <br />
          если динамический роут может быть составным, тогда это может выглядеть
          так: <br /> app/users/[...slug]/page.tsx <br />
          <pre>
            / docs / next / routing / dynamic-routes
            {`
            slug: [
              'next',
              'routing',
              'dynamic-routes'
            ]`}
          </pre>
          <br />
          <p>
            При опциональном query в url, их можно считывать из searchParams,
            они будут в пропсах на уровне с params:
          </p>
          <p>/products?page=2&sort=price</p>
          <pre>{`const { page, sort } = await searchParams;`}</pre>
          <br />
          <p>
            searchParams есть только в page, а в rounte handler нужно получать
            иначе:
          </p>
          <pre>
            {`
              const url = new URL(request.url);
              const page = url.searchParams.get('page');
            `}
          </pre>
          <br />
          <p>Один параметр при динамическом API:</p>
          <p>app/api/users/[id]/route.ts</p>
          <pre>
            {`
              export async function GET(
              ...
              const { id } = await params;
              ...
               return Response.json({userId: id});
            `}
          </pre>
          <br />
          <p>
            Несколько параметров: <br />
            app/users/[userId]/orders/[orderId]/page.tsx <br />
            /users/15/orders/999 <br />
            <pre>
              params:
              {`
                {
                  userId: '15',
                  orderId: '999'
                }
              `}
            </pre>
          </p>
          <br />
          <p>slug параметры :</p>
          <p>app/users/[...slug]/page.tsx</p>
          <p>/ docs / next / routing / dynamic-routes</p>
          <p>
            <pre>
              {`
            export async function GET(
            ..
            const { slug } = await params;
            ...
            return Response.json({slug});
            `}
            </pre>
            <p>
              В API их можно было бы достать из request.url, но парсить долго,
              проще достать из await params
            </p>
          </p>
        </p>
        <br />
        <p>
          Web API: Request, Response, URL, Headers
          <br />
          Является общим для любой стороны, как для клиента так и для сервера и
          в него входят стандраты запросов, ответов, url и др.:
        </p>
        <p>
          На клиенте (в браузере) классы существуют в самом браузере, а Node
          передоставляет классы через globalThis: globalThis.Response и прочие
        </p>
        <p>
          Request - при помощи самого класса можно создать запрос new
          Request(url, {`{method: post и тд}`}), это и делает под капотом fetch.
        </p>
        <p>
          На сервере же, мы получаем экземпляр класса Request, в котором как раз
          те самые поля которые генерировал класс Request на клиенте: method,
          url, body и др.
        </p>
        <br />
        <p>
          Response - создает http response клиенту стандартного, привычного
          вида:
        </p>
        <pre>
          {` return Response.json( { error: 'Not found' }, { status: 404 } ); `}
        </pre>
        <br />
        <p>URL - формирует из строки объект c полями, pathname, searchParams</p>
        <p>Headers - позволяет создать заголовки в стандартном виде</p>
        <br />
        <p>
          notFound - допустим база в компоненте на запрос данных вернула null,
          тогда вызываем notFound(), и next прервет выполнение компонента, код
          ниже вызова notFound не будет выполнен, next покажет app/not-found.tsx{' '}
          <br />
          <pre>{` if (!product) notFound() `}</pre>
        </p>
        <br />
        <p>
          generateStaticParams() - Если список страниц известен заранее, Next
          может создать их HTML еще на этапе next build, чтобы не генерировать
          их при первом запросе.
          <pre>
            {`
              page.tsx

              export async function generateStaticParams() {
                return [
                  { id: '1' },
                  { id: '2' },
                  { id: '3' }
                ]
              }

              export default async function ProductPage({ params }: Props) {
                const { id } = await params
                return <h1>Product {id}</h1>
              }
            `}
          </pre>
        </p>
        <br />
        <p>
          generateMetadata() - когда метаданные нужно вычислить из
          динамическического роута
          <pre>
            {`
              export async function generateMetadata(
                { params }: Props
              ): Promise<Metadata> {
                const { id } = await params

                const product = await getProduct(id)

                return {
                  title: product.name,
                  description: product.description,
                }
              }
            `}
          </pre>
        </p>
        <br />
        <p>
          metadata - когда метаданные известны заранее и не меняются
          <pre>
            {`
              export const metadata = {
                title: 'software engineer handbook',
                description: '........',
                metadataBase: new URL('https://site.com'),
                icons: '/favicon.ico',
              }
            `}
          </pre>
        </p>
        <br />
      </NoteItem>
    </Note>
  );
}
