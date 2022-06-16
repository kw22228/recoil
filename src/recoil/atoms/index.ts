//atoms -> recoil의 bubble (글로벌에서 사용할 수 있는 스토어)

import { atom } from 'recoil';
import { Categories, ITodo } from '../../components/TodoList/types';

export const todoAtom = atom<ITodo[]>({
    key: 'todo',
    default: [],
});

export const categoryAtom = atom<Categories>({
    key: 'category',
    default: Categories.TODO,
});

export const minutesAtom = atom({
    key: 'minutes',
    default: 0,
});

export const dragDropAtom = atom({
    key: 'dragDrop',
    default: ['a', 'b', 'c', 'd', 'e', 'f'],
});
