import styled from 'styled-components';

interface ICardProps {
    isDragging: boolean;
}

export const Card = styled.div<ICardProps>`
    background-color: ${props => (props.isDragging ? 'lightgreen' : props.theme.cardColor)};
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    margin-bottom: 5px;

    box-shadow: ${props => (props.isDragging ? '0px 2px 5px rgba(0, 0, 0, 0.5)' : 'none')};
`;
