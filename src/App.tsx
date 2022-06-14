import { ThemeProvider } from 'styled-components';
import RecoilSelector from './components/Practice/RecoilSelector';
// import TodoList from './components/TodoList/TodoList';
import GlobalStyle from './style/global';
import { darkTheme, lightTheme } from './style/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={false ? darkTheme : lightTheme}>
                <GlobalStyle />
                {/* <TodoList /> */}
                <RecoilSelector />
            </ThemeProvider>
        </>
    );
}

export default App;
