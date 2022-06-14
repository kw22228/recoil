//selector -> atom을 가져와 get으로 인해 output을 변경할 수 있다.

import { selector } from 'recoil';
import { Categories, ITodo } from '../../components/TodoList/types';
import { categoryAtom, minutesAtom, todoAtom } from '../atoms';

export const todoSelector = selector({
    key: 'todoSelector',
    get: ({
        get, //atom의 내용을 가져옴
    }) => {
        const todos = get(todoAtom);
        const category = get(categoryAtom);

        let selectTodos = [] as ITodo[];
        switch (category) {
            case Categories.TODO:
                selectTodos = todos.filter(todo => todo.category === Categories.TODO);
                break;
            case Categories.DOING:
                selectTodos = todos.filter(todo => todo.category === Categories.DOING);
                break;
            case Categories.DONE:
                selectTodos = todos.filter(todo => todo.category === Categories.DONE);
                break;
        }

        return selectTodos;
    },
});

export const minuteToHourSelector = selector<number>({
    key: 'minuteToHour',
    get: ({ get }) => {
        const minutes = get(minutesAtom);

        return minutes / 60;
    },
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minutesAtom, minutes);
    },
});
