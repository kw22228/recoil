import styled from 'styled-components';

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;
