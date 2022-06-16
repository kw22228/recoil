import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${props => props.theme.cardColor};
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    margin-bottom: 5px;
`;
