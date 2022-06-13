export interface ITodo {
    text: string;
    id: number;
    category: 'TODO' | 'DOING' | 'DONE';
}

export interface IForm {
    todo: string;
}
