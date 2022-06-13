import { atom } from 'recoil';
import { ITodo } from '../../components/TodoList/types';

export const todoAtom = atom<ITodo[]>({
    key: 'todo',
    default: [],
});
