import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Context'>
      <NoteItem>
        <p>
          Контекст решает проблему пропс-дриллинга. <br />
          Его используют для передачи вниз редко меняющихся данных (тема,
          локаль, текущий пользователь, DI, конфигурация, feature flags)
        </p>
        <p>
          Начиная с версии 16.3 и по сей дей интерфейс создания выглядит
          следущим образом:
        </p>
        <pre>
          {`
    const ThemeContext = createContext(null | default_value)

    default value - на тот случай если мы пытаемся получить контекст 
    хуком компонент которого не обертнут провайдером
            `}
        </pre>
        <p>
          Передача контекста осуществляется через провайдер, и желательно делать
          это через children а не напрямую, дело не в том что меняется
          context_value или нет, а в том как устроен render самого реакт. <br />
          Если по какой либо причине происходит перерндер родителя, то
          независимо от того являются дочерние компоненты потребителями
          контекста или нет, они все будут перерендерены, реакт
          последоватовательно вызовет функцию каждого компонента чтобы
          постмотреть что могло измениться, и чтобы этого избежать, мы выносим
          дочерние компоненты наружу, таким образом вызов функции компонента
          будет выше самого родителя, и родитель становится псевдородителем, в
          него попадают лишь ссылки на готовые компоненты и реакт просто их
          переиспользует, однако это не значит что потребители не будут
          перендерены, те кто потребляет этот контекст, из за смены стейт будут
          перерендерены.
        </p>
        <pre>
          {`
    const ThemeProvider = ({children}) => {
      <ThemeContext.Provider value={contextValue}>
        { children }
      </ThemeContext.Provider>
    }
            `}
        </pre>
        <pre>
          {`
    <ThemeContext.Provider value={contextValue}>
       <Component1>
        <Component2 />
        <Component3 />
       </Component1>
    </ThemeContext.Provider>
          `}
        </pre>
        <br />
        <p>Полезные практики:</p>
        <p>
          Допустим мы в value провайдера передаем объект с темой и сеттером
          темы, в таком случае это все равно является объектом, а объект будет
          пересоздан при ререндере, его нужно мемоизировать. <br />
          Это уже хорошо, но когда меняется сама тема, будут ререндеры и у тех
          кто получает объект контекста но использует только сеттер который
          никогда не меняется, и в таком случае провайдеры нужно разделить.
          <br />
          <br />
          <small>
            * Это является главной причиной того почему для управления
            состоянием приложения используют redux и прочие библиотеки, потому
            что при изменении одного поля, трегерятся все получатели контекста
            вне зависимости от того изпользуют они измененное поле или нет.
            <br />
            Redux под капотом использует контекст, наверно он как раз и делит
            состояние на различные провадеры под капотом и упаковывает в простой
            интерфейс.
          </small>
        </p>
        <pre>
          {`

    export const ThemeValueContext = createContext(null);
    export const ThemeSetterContext = createContext(null);

    ....

    <ThemeValueProvider>
      <ThemeSetterProvider>
        <Component1>
          <Component2 />
          <Component3 />
        </Component1>
      </ThemeSetterProvider>
    </ThemeValueProvider>
          `}
        </pre>
        <br />
        <p>
          <b>-- useContext --</b> <br />
          Пример использование контекста начиная с версии 16.8 (появление хуков)
        </p>
        <pre>
          {`
    const context = useContext(ThemeValueContext);
          `}
        </pre>
        <br />
        DEPRECATED
        <p>До версии 16.8 испозовали контекст так:</p>
        <pre>
          {`
    <ThemeContext.Consumer>
      {(theme) => (
          <Component themeProp={theme}>
      )}
    </ThemeContext.Consumer>
          `}
        </pre>
        <p>
          Либо в классах, но в классе можно было получить только 1 контекcт,
          реакт его присваивал к this
        </p>
        <pre>
          {`
      class Component extends React.Component {
        static contextType = ThemeContext;
        render() {
          const context = this.context;
          return <div></div>;
        }
      }
          `}
        </pre>
      </NoteItem>
    </Note>
  );
}
