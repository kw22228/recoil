import styled from 'styled-components';

interface IBoardProps {
    isDraggingOver: boolean;
    draggingFromThisWith: boolean;
}

export const Form = styled.form`
    width: 100%;

    input {
        box-sizing: border-box;
        padding: 5px;
        width: 100%;
        text-align: center;
        font-weight: bold;
    }
`;

export const Board = styled.div<IBoardProps>`
    border: 1px solid ${props => props.theme.boardColor};
    background-color: ${props =>
        props.isDraggingOver ? 'pink' : props.draggingFromThisWith ? 'red' : props.theme.bgColor};
    min-width: 200px;
    min-height: 300px;
    padding: 0 10px;
    padding-top: 30px;

    transition: all 0.3s ease-in-out;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const CardHeader = styled.div`
    text-align: center;
    padding: 10px 30px;
    font-weight: bold;
`;

export const Wrapper = styled.div`
    background-color: lightgray;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
`;
