import * as s from './DroppableCard.style';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { dragDropAtom } from '../../../recoil/atoms';
import DraggableCard from '../DraggableCard/DraggableCard';

const DroppableCard = () => {
    const [todos, setTodos] = useRecoilState(dragDropAtom);
    const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
        setTodos(prevTodos => {
            const newTodos = prevTodos.filter((todo, index) => source.index !== index);
            newTodos.splice(Number(destination?.index), 0, draggableId);

            return newTodos;
        });
    };
    return (
        <s.Wrapper>
            <DragDropContext onDragEnd={onDragEnd}>
                <s.Boards>
                    <Droppable droppableId="todos">
                        {provided => (
                            <s.Board ref={provided.innerRef} {...provided.droppableProps}>
                                {todos.map((todo: string, index: number) => (
                                    <DraggableCard todo={todo} key={todo} index={index} />
                                ))}

                                {/* Draggable을 움직일때, 밑에 height가 줄어드는걸 방지한다. */}
                                {provided.placeholder}
                            </s.Board>
                        )}
                    </Droppable>
                </s.Boards>
            </DragDropContext>
        </s.Wrapper>
    );
};

export default DroppableCard;
