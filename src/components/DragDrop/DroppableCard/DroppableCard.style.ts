import styled from 'styled-components';

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`;

export const Board = styled.div`
    border: 1px solid ${props => props.theme.boardColor};
    background-color: ${props => props.theme.bgColor};
    min-width: 200px;
    min-height: 300px;
    padding: 0 10px;
    padding-top: 30px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
