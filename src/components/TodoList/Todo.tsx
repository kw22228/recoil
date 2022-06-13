import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../recoil/atoms';
import { ITodo } from './types';

const Todo = ({ text, category, id }: ITodo) => {
    const setTodos = useSetRecoilState(todoAtom);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // setTodos(oldTodos => {
        //     const targetIndex = oldTodos.findIndex(todo => todo.id === id);
        //     const newTodo = { text, id, category: event.currentTarget.name as ITodo['category'] };

        //     return [...oldTodos.slice(0, targetIndex), newTodo, ...oldTodos.slice(targetIndex + 1)];
        // });

        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, category: event.currentTarget.name as ITodo['category'] }
                    : todo
            )
        );
    };
    return (
        <li id={`${id}`}>
            <span>{text}</span>
            {category !== 'TODO' && (
                <button name="TODO" onClick={onClick}>
                    Todo
                </button>
            )}
            {category !== 'DOING' && (
                <button name="DOING" onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== 'DONE' && (
                <button name="DONE" onClick={onClick}>
                    Done
                </button>
            )}
            <span>{category}</span>
        </li>
    );
};

export default Todo;
