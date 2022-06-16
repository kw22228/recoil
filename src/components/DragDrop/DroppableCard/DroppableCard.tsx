import * as s from './DroppableCard.style';
import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from '../DraggableCard/DraggableCard';
import React from 'react';

interface IProps {
    todoList: string[];
    id: string;
}

const DroppableCard = ({ todoList, id }: IProps) => {
    return (
        <s.Wrapper>
            <s.CardHeader>{id}</s.CardHeader>
            <Droppable droppableId={id}>
                {provided => (
                    <s.Board ref={provided.innerRef} {...provided.droppableProps}>
                        {todoList.map((todo: string, index: number) => (
                            <DraggableCard todo={todo} key={todo} index={index} />
                        ))}

                        {/* Draggable을 움직일때, 밑에 height가 줄어드는걸 방지한다. */}
                        {provided.placeholder}
                    </s.Board>
                )}
            </Droppable>
        </s.Wrapper>
    );
};

export default DroppableCard;
