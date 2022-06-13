import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { todoAtom } from '../../recoil/atoms';
import { IForm } from './types';

const CreateTodo = () => {
    const setTodos = useSetRecoilState(todoAtom);

    const defaultValues = {
        todo: 'Todo',
    };
    const { register, handleSubmit, setValue } = useForm<IForm>({
        defaultValues,
    });
    const onValid = ({ todo }: IForm) => {
        setTodos(prev => [{ text: todo, id: Date.now(), category: 'DONE' }, ...prev]);
        setValue('todo', defaultValues.todo);
    };
    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input
                placeholder="Wirte a to do"
                {...register('todo', {
                    required: 'Todo is required.',
                })}
            />
            <button>Add</button>
        </form>
    );
};

export default CreateTodo;
