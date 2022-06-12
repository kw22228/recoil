import { ThemeProvider } from 'styled-components';
import TodoList from './components/TodoList/TodoList';
import GlobalStyle from './style/global';
import { darkTheme, lightTheme } from './style/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={false ? darkTheme : lightTheme}>
                <GlobalStyle />
                <TodoList />
            </ThemeProvider>
        </>
    );
}

export default App;
