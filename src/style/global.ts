import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
    
    html{
        box-sizing: inherit;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        font-family: 'Source Sans Pro', sans-serif;
        color: black;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyle;
