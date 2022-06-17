import * as s from './DraggableCard.style';
import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { ITodo } from '../../../recoil/atoms/types';

interface IProps {
    todo: ITodo;
    index: number;
}

const DraggableCard = ({ todo, index }: IProps) => {
    return (
        // draggableId와 key는 같아야함
        <Draggable draggableId={todo.todo} index={index} key={todo.todo}>
            {(provided, snapshot) => (
                <s.Card
                    isDragging={snapshot.isDragging}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps} //dragHandleProps이 있는 곳에서만 드래그됨
                >
                    {/* <span {...provided.dragHandleProps}>🚗</span> */}
                    {todo.todo}
                </s.Card>
            )}
        </Draggable>
    );
};

//React.memo => Component의 props가 변하지 않으면 re-rendering하지 않음.
export default React.memo(DraggableCard);
