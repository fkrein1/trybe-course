const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  //store.???
  return { type: INCREMENTO };
  // store.dispatch({ type: INCREMENTO });
};

const actionDecremento = () => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  //store.???
  store.dispatch({ type: DECREMENTO });
};
// ========== REDUCER ==========
// const initialState = "?";
const initialState = { count: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      return { count: state.count + 1 };
    case DECREMENTO:
    default:
      return { count: state.count - 1 };
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { count } = store.getState();
  // const counter = store.getState();
  showCountValue(count);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", () => {
  store.dispatch(actionIncremento());
});

btnDec.addEventListener("click", actionDecremento);
