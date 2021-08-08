import { ACTION_TYPE } from './constants';

export const selectLevel = (payload: number) => ({ type: ACTION_TYPE.SELECT_LEVEL, payload });

export const getMap = (payload: string) => ({ type: ACTION_TYPE.GET_MAP, payload });

export const getResult = (payload: string) => ({ type: ACTION_TYPE.GET_RESULT, payload });

export const getHelper = (payload: string) => ({ type: ACTION_TYPE.GET_HELPER, payload });

export const resetHelper = () => ({ type: ACTION_TYPE.RESET_HELPER });
