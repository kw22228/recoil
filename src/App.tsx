import { ThemeProvider } from 'styled-components';
import DragContext from './components/DragDrop/DragContext/DragContext';
// import RecoilSelector from './components/Practice/RecoilSelector';
// import TodoList from './components/TodoList/TodoList';
import GlobalStyle from './style/global';
import { darkTheme, lightTheme } from './style/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={true ? darkTheme : lightTheme}>
                <GlobalStyle />
                {/* <TodoList /> */}
                {/* <RecoilSelector /> */}
                {<DragContext />}
            </ThemeProvider>
        </>
    );
}

export default App;
