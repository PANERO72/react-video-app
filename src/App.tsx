import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { SearchContextProvider } from './context/SearchContext';

function App() {
    return (
        <div className={styles.App}>
            <SearchContextProvider>
                <Menu />
            </SearchContextProvider>
            <FavoriteContextProvider>
                <Container />
                <Favorite />
            </FavoriteContextProvider>
        </div>
    );
}

export default App;
