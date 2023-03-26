import styles from './menu.module.scss';
import classNames from 'classnames';
import logo from '../../assets/img/lama-logo.png';
import {useContext} from 'react';
import {SearchContext} from '../../context/SearchContext';

export interface MenuProps {
    className?: string;
}

const sortBy: {query: string, text: string}[] = [{ query: 'popularity.desc', text: 'Popularidad'}, {query: 'vote_count.desc', text: 'Más votada'}, {query: 'release_date.desc', text: 'Fecha de lanzamiento'}];

const genres: {id: string, text: string}[] = [{id: '28', text: 'Acción'}, {id: '12', text: 'Aventura'}, {id: '16', text: 'Animación'}, {id: '10752', text: 'Bélica'}, {id: '878', text: 'Ciencia ficción'},  {id: '35', text: 'Comedia'},  {id: '80', text: 'Crimen'}, {id: '99', text: 'Documental'}, {id: '18', text: 'Drama'},  {id: '10751', text: 'Familia'},  {id: '14', text: 'Fantasía'}, {id: '36', text: 'Historia'}, {id: '27', text: 'Horror'}, {id: '10402', text: 'Musical'}, {id: '9648', text: 'Misterio'}, {id: '10749', text: 'Romántico'}, {id: '10770', text: 'Película de televisión'}, {id: '53', text: 'Terror'}, {id: '', text: 'Western'}]

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    const {dispatch, state} = useContext(SearchContext);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src={logo} alt="" className={styles.logoImg} />
                <span className={styles.logoText}>LamaMovies</span>
            </div>
            <div className={styles.title}>
                <span>Ordenar por</span>
                <hr className={styles.hr} />
            </div>
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li key={item.query} className={styles.listItem} onClick={() => dispatch({type: "SORT_BY", payload:item.query})}>
                        {item.text}
                    </li>
                ))}
            </ul>
            <div className={styles.title}>
                <span>Género</span>
                <hr className={styles.hr} />
            </div>
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li key={item.id} className={styles.listItem} onClick={() => dispatch({type: "ADD_GENRE", payload:item.id})}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
