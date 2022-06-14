export enum Categories {
    TODO = 'TODO',
    DOING = 'DOING',
    DONE = 'DONE',
}

export interface ITodo {
    text: string;
    id: number;
    category: Categories;
}

export interface IForm {
    todo: string;
}
