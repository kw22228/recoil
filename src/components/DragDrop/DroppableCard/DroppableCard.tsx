import * as s from './DroppableCard.style';
import { Droppable } from 'react-beautiful-dnd';
import DraggableCard from '../DraggableCard/DraggableCard';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { dragDropAtom } from '../../../recoil/atoms';
import { ITodo } from '../../../recoil/atoms/types';

interface IProps {
    todoList: ITodo[];
    id: string;
}

interface IForm {
    [key: string]: string;
}

const DroppableCard = ({ todoList, id }: IProps) => {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const [todos, setTodos] = useRecoilState(dragDropAtom);
    const onValid = (data: IForm) => {
        setValue(id, '');

        setTodos(prevTodos => {
            return {
                ...prevTodos,
                [id]: [
                    ...prevTodos[id],
                    {
                        todo: data[id],
                        id: Date.now(),
                    },
                ],
            };
        });
    };

    return (
        <s.Wrapper>
            <s.CardHeader>{id}</s.CardHeader>
            <s.Form onSubmit={handleSubmit(onValid)}>
                <input
                    type="text"
                    placeholder={`Add task on ${id}`}
                    {...register(id, { required: true })}
                />
            </s.Form>
            <Droppable droppableId={id}>
                {(
                    provided, //droppableProps, placeholder, innerRef
                    snapshot //isDraggingOver, draggingOverWith, draggingFromThisWith, isUsingPlaceholder
                ) => (
                    <s.Board
                        isDraggingOver={snapshot.isDraggingOver}
                        draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {todoList.map((todo: ITodo, index: number) => (
                            <DraggableCard todo={todo} key={todo.id} index={index} />
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
