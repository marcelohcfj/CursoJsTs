import * as types from '../types';

export function botaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function botaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function botaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
