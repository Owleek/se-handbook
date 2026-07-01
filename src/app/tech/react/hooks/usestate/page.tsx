import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='useState & useReducer'>
      <NoteItem>
        <p>-- useState --</p>
        <p>
          <b>Lazy init</b>
        </p>
        <p>
          const [count, setCount] = {`useState(() => heavyCount())`} <br />
          Если есть какое то сложное вычисление initial значения, то лучше это
          вычисление передать в виде функции, поскольку React вызывет эту
          функцию 1 раз, а в остальные разы уже будет подставлять свой стейт,
          потому что если это вычисляемое значение будет происходить в
          компоненте, то оно будет вызываться каждый раз при вызове функции
          компонента, затрачивая ресурсы, при этом никак не влияя на initial
        </p>
        <br />
        <p>
          <b>Порядок обновлений</b>
        </p>
        <p>
          <pre>
            {`
            const [count, setCount] = useState(0)
            // 1: c = 3
            const handleClick = () => {
              setCount(c => c + 1);
              setCount(c => c + 1);
              setCount(c => c + 1);
            }
            // 2: c = 1
            const handleClick = () => {
              setCount(count + 1);
              setCount(count + 1);
              setCount(count + 1);
            }
          `}
          </pre>
        </p>
        <br />
        <p>
          У хуков есть очередь вызова, и каждый раз произходит подсчет state.
        </p>
        <p>
          Если мы в set передадим аргумент, то react увеличит значение и сравнит
          с текущим стейтом, если стейт уже соответсвтует вычисленному значению,
          операция применяться не будет
        </p>
        <p>
          Но если мы используем колбек при set, мы в аргументе коллбека получаем
          актуальное значение state с учетом выполненных подсчетов очреди, и по
          этому постоянный инкремент будет всегда больше актуального стейта
        </p>
        <br />
        <p>
          Для примитивов state сравнивается по значению, а для ссылочных типов
          по ссылке, если ссылка или значение не изменилась, перерендера не
          произойдет!
        </p>
        <br />
        <br />
        <p>-- useReducer --</p>
        <p>
          useReducer - это альтернатива useState для локального множественного
          состояния, локальный микро-redux.
        </p>
        <p>
          Используется для улучшение качества кода, чтобы не плодить множество
          useState в одном компоненте
        </p>
        <p>Для этого state объединяют и управляют им функцией dispatch.</p>
        <br />
        <p>
          reducer должен быть чистой функцией без побочных эффектов которая явно
          возвращает state, поскольку react рассчитывает именно на это и ни на
          что другое
        </p>
        <br />
        <p>
          Под капотом useReducer работает так же как useState (включая
          Batching), просто внешне изменился формат записи состояния.
        </p>
        <pre>
          {`
За функцией-->
const initialState = {
  loading: false,
  user: null,
  error: null,
  isAdmin: false,
  ....
}

const reducer = (currentState, action) {
    switch(action.type) {
      case "load":
        return {
          ...currentState,
          loading: true,
          error: null,
        };
      case "setUser": {
          ...currentState,
          loading: false,
          error: null,
          user: action.payload
      }
      ...
      default: 
        return currentState
    }
}
<--За функцией

Внутри функции-->
const [state, dispatch] = useReducer(reducer, initialState)

const someEvent = (isAdmin) => {
    dispatch({
       type: "toggleAdmin"
       payload: !!isAdmin
    })
}
<--Внутри функции
           `}
        </pre>
      </NoteItem>
    </Note>
  );
}
