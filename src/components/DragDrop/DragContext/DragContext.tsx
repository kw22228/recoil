import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { dragDropAtom } from '../../../recoil/atoms';
import DroppableCard from '../DroppableCard/DroppableCard';
import * as s from './DragContext.style';
import { cloneDeep } from 'lodash';

const DragContext = () => {
    const [todos, setTodos] = useRecoilState(dragDropAtom);
    const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
        if (
            !destination ||
            (destination?.droppableId === source.droppableId && destination.index === source.index)
        ) {
            return;
        }

        setTodos(prevTodos => {
            //1. deepCopy
            const newTodos = cloneDeep(prevTodos);

            //2. 뺀 아이템 삭제
            const target = newTodos[source.droppableId].splice(source.index, 1);

            //3. 옮긴 아이템 집어넣기
            newTodos[String(destination?.droppableId)].splice(
                Number(destination?.index),
                0,
                target[0]
            );

            return newTodos;
        });
    };
    return (
        <s.Wrapper>
            <DragDropContext onDragEnd={onDragEnd}>
                <s.Boards>
                    {Object.entries(todos).map(([key, value]) => (
                        <DroppableCard key={key} todoList={value} id={key} />
                    ))}
                </s.Boards>
            </DragDropContext>
        </s.Wrapper>
    );
};

export default DragContext;
