import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../recoil/atoms';
import { Categories, ITodo } from './types';

const Todo = ({ text, category, id }: ITodo) => {
    const setTodos = useSetRecoilState(todoAtom);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTodos(oldTodos => {
            const targetIndex = oldTodos.findIndex(todo => todo.id === id);
            const newTodo = { text, id, category: event.currentTarget.name as Categories };

            //slice
            // return [...oldTodos.slice(0, targetIndex), newTodo, ...oldTodos.slice(targetIndex + 1)];

            //splice
            const newTodos = [...oldTodos];
            newTodos.splice(targetIndex, 1, newTodo);
            return newTodos;
        });

        // setTodos(prevTodos =>
        //     prevTodos.map(todo =>
        //         todo.id === id
        //             ? { ...todo, category: event.currentTarget.name as ITodo['category'] }
        //             : todo
        //     )
        // );
    };
    return (
        <li id={`${id}`}>
            <span>{text}</span>
            {category !== Categories.TODO && (
                <button name={Categories.TODO} onClick={onClick}>
                    Todo
                </button>
            )}
            {category !== Categories.DOING && (
                <button name={Categories.DOING} onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== Categories.DONE && (
                <button name={Categories.DONE} onClick={onClick}>
                    Done
                </button>
            )}
            <span>{category}</span>
        </li>
    );
};

export default Todo;
