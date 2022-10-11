import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../store';
import { clearSearch, getByName } from '../../store/actions/CharactersActions';
import DropdownSearchComponent from '../dropdown-search';
import './styles.css';


const SearchComponent = () => {
    const [ search, setSearch ] = useState<string>("");
    const dispatch = useDispatch();
    const errors = useSelector((state: IStore) => state.characterReducer.errors);

    useEffect(()=> {
        const listener = (event: KeyboardEvent) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
              event.preventDefault();
              searchAction();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    });


    const searchAction = () => {

    }

    useEffect(()=> {
        if(search.length > 2){
           dispatch(getByName(search));
        }
        if(!search || search.length === 0){
            dispatch(clearSearch());
        }
    }, [search]);

    return (<div className='container'>
        <div className='items-search'>
            <div className='logo'/>
            <div className='search'>
                <h2>Buscador De Personajes</h2>
                <input
                    className='search-input'
                    type="text"
                    placeholder='Ej. Iron Man'
                    onChange={e => {setSearch(e.target.value)}}
                ></input>
                <DropdownSearchComponent searching={search.length > 2}/>
                <div>
                    <div className='err-msg'>{errors}</div>
                </div>
            </div>
            </div>
    </div>)
}
export default SearchComponent;