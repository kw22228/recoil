import { useRecoilState, useRecoilValue } from 'recoil';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import { categoryAtom, todoAtom } from '../../recoil/atoms';
import { todoSelector } from '../../recoil/selectors';
import React from 'react';
import { Categories, ITodo } from './types';

const TodoList = () => {
    // const todos = useRecoilValue(todoAtom);
    const todos = useRecoilValue(todoSelector);
    const [category, setCategory] = useRecoilState(categoryAtom);

    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const value = event.currentTarget.value as Categories;
        setCategory(value);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <CreateTodo />
            <select onInput={onInput} value={category}>
                <option value={Categories.TODO}>TODO</option>
                <option value={Categories.DOING}>DOING</option>
                <option value={Categories.DONE}>DONE</option>
            </select>
            <hr />
            {todos && (
                <ul>
                    {todos.map(todo => (
                        <Todo {...todo} key={todo.id} />
                    ))}
                </ul>
            )}
        </div>
    );
};

// interface IForm {
//     email?: string;
//     firstname: string;
//     lastname: string;
//     username: string;
//     password: string;
//     password1: string;
//     extraError?: string;
// }

// const TodoList = () => {
//     const {
//         register, //등록
//         watch, //데이터 변환 감지
//         handleSubmit, //submit
//         formState: { errors }, //form 에러
//         setError, //에러 핸들링
//     } = useForm<IForm>({
//         defaultValues: {
//             email: '@naver.com',
//         },
//     });
//     const onValid = (data: IForm) => {
//         if (data.password !== data.password1) {
//             return setError(
//                 'password1',
//                 { message: 'Password are not the same.' },
//                 { shouldFocus: true }
//             );
//         }
//         setError('extraError', { message: 'Server offline.' });
//     };

//     console.log(errors); //폼 에러 확인.
//     return (
//         <div>
//             <form
//                 style={{ display: 'flex', flexDirection: 'column' }}
//                 onSubmit={handleSubmit(onValid)}
//             >
//                 <input
//                     placeholder="Email"
//                     {...register('email', {
//                         required: 'Email is required',
//                         pattern: {
//                             value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                             message: 'Only naver.com emails allowed',
//                         },
//                     })}
//                 />
//                 <span>{errors?.email?.message}</span>

//                 <input
//                     placeholder="First Name"
//                     {...register('firstname', {
//                         required: 'First Name is required.',
//                         minLength: {
//                             value: 3,
//                             message: 'Your firstname is too short.', //minLenght에 메세지 셋팅 가능.
//                         },
//                         validate: value => (value.includes('nico') ? 'No "nico" allowed' : true), //React hook form 에서 문자열을 return한다는건 error를 return하는것
//                     })}
//                 />
//                 <span>{errors?.firstname?.message}</span>

//                 <input
//                     placeholder="Last Name"
//                     {...register('lastname', {
//                         required: 'Last Name is required.',
//                         validate: {
//                             noNico: async value =>
//                                 value.includes('nico') ? 'No "nico" allowed' : true, //비동기로 서버 통신을 해서 response값으로 처리도 가능.(id 중복체크.)
//                             noNick: value => (value.includes('nick') ? 'No "nick" allowed' : true),
//                         },
//                     })}
//                 />
//                 <span>{errors?.lastname?.message}</span>

//                 <input
//                     placeholder="Username"
//                     {...register('username', { required: 'UserName is required.' })}
//                 />
//                 <span>{errors?.username?.message}</span>

//                 <input
//                     placeholder="Password"
//                     {...register('password', { required: 'Password is required' })} //required에 메세지를 적을수있음.
//                 />
//                 <span>{errors?.password?.message}</span>

//                 <input
//                     placeholder="Password Confirm"
//                     {...register('password1', { required: 'Password Confirm is required' })} //required에 메세지를 적을수있음.
//                 />
//                 <span>{errors?.password1?.message}</span>

//                 <button>Add</button>
//                 <span>{errors?.extraError?.message}</span>
//             </form>
//         </div>
//     );
// };

export default TodoList;
