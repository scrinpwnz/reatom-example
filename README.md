[![reatom logo](https://reatom.js.org/logos/logo.svg)](https://reatom.js.org)

[Reatom](https://reatom.js.org/#/) это **декларативный** и **реактивный** менеджер состояния, спроектированный для простых и сложных приложений.

Из его основных плюсов можно выделить:

- Небольшой API
- Минимум бойлерплейта
- Сильная типизация
- Высокая производительность
- Маленький размер
- Удобное разделение кода из коробки
- Совместимость с Redux (и Redux Devtools)
- Иммутабельность данных

В основе **Reatom** лежат направленные ациклические графы.


## API
- `declareAction` - объявление действия.
- `declareAtom` - объявление атома. Атом является аналогией *reducer* в **Redux**.
- `combine` - комбинирование атомов. В результате создается новый атом.
- `map` - преобразование формата данных.
- `createStore` - создание **store**.



### `declareAction`
Используется для объявления действия.  
Примеры использования:
```typescript jsx
const setValueAction = declareAction<string>()
const setValueAction = declareAction<string>("SET_VALUE")
```
Так же имеется возможность добавить **reaction** - реакцию (callback), которая будет вызываться после прохождения
 действия через атом. В нее передается **payload** и текущий **state**:

```typescript jsx
const setValueAction = declareAction<string>(
  "SET_VALUE",
  (payload, state) => {
    /** ...какая-то логика */
  }
)
```
Реакции отлично подходят для эффектов (аналогия **thunk** из **redux-thunk**):
```typescript jsx
const fetchData = declareAction<number>(
  "FETCH_DATA",
  async (payload, {dispatch}) => {
    try {
      const result = await api.getItems(payload)
      dispatch(setItemsAction(result))
    } catch (error) {
      dispatch(handleErrorAction(result))
    } 
  }
)
```
К сожалению, асинхронные реакции работают некорректно в **React.StrictMode**. [Issue #351](https://github.com/artalar/reatom/issues/351)

### `declareAtom`
Используется для объявления атома.  
Примеры использования:
```typescript jsx
/** Предметы, помеченные на удаление (массив uuid) */
const itemsToDeleteAtom = declareAtom<string[]>(
  [], /** Изначальное состояние */
  on => [ /** Обработчик действий */
    on(addAction, (state, payload) => [...state, payload]),
    on(deleteAction, (state, payload) => state.filter(item => item.id !== payload))
  ] 
)
const itemsAtom = declareAtom<IState>(
  "items", /** Если в функцию передано 3 аргумента, то первый аргумент будет именем атома */
  [item1, item2], /** Изначальное состояние */
  on => [
    /** ...какие-то действия с items */
  ]
)
```

### `combine`
Используется для объединения атомов. Любое изменение в изначальных атомах вызовет пересчет объедененного атома.
```typescript jsx
const combinedAtom = combine([itemsToDeleteAtom, itemsAtom])
```

### `map`
Используется для преобразования формата данных.
```typescript jsx
const deletingItemsAtom = map(combinedAtom, ([
  itemsToDeleteAtom,
  itemsAtom
]) => itemsToDeleteAtom.map(item => itemsAtom[item.id]))
```
Атом, созданный функцией `map`, будет возвращать уже не `uuid` а `item`, которому этот `uuid` принадлежит.


### `createStore`
Для того чтобы атомы начали хранить свое состояние, нужно создать ``store``.
```typescript jsx
const store = createStore(combinedAtom)
```
Все зависимости, от которых зависит данный атом, будут подключены к ``store``.  
Далее можно подписываться на изменения:
```typescript jsx
store.subscribe(combinedAtom, () => console.log('combinedAtom изменился'))
```
Вызов действия:
```typescript jsx
store.dispatch(addAction('uuid удаляемого итема'))
```



