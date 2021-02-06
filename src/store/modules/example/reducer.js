import * as types from '../types';

const initalState = {
  botaoClicado: false,
};

// estado da aplicação
const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      // eslint-disable-next-line no-console
      console.log('Sucesso 😁');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      // eslint-disable-next-line no-console
      console.log('Deu erro 😒');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      // eslint-disable-next-line no-console
      console.log('estou fazendo a requisição 🤷‍♀️');
      return state;
    }

    default: {
      return state;
    }
  }
};

export default Reducer;
