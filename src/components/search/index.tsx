import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../store';
import { clearSearch, getAll, getByName } from '../../store/actions/CharactersActions';
import DropdownSearchComponent from '../dropdown-search';
import { toast } from 'react-toastify';
import './styles.css';


const SearchComponent = () => {
    const [ search, setSearch ] = useState<string>("");
    const dispatch = useDispatch();
    const errors = useSelector((state: IStore) => state.characterReducer.errors);
    const [rendered] = useState<boolean>();
    

    useEffect(()=>{
            setTimeout(() =>{
                const mensaje =() =>{
                    toast.success('Ingresa el nombre de un personaje de Marvel en el Buscador. Haz clic en el personaje que quieras y mira información relacinada con él. 🤗', {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                mensaje();
            }, 3000);
    }, [rendered]);
     
    useEffect(()=> {
        const inputSearch = document.getElementById('search');
        if(inputSearch != undefined){
            inputSearch!.style.transform = "translateY(0px)";
            inputSearch!.style.opacity = "1";

        }

        const logo = document.getElementById('logo');
        if(logo != undefined){
            logo!.style.transform = "translateY(0px)";
            logo!.style.opacity = "1";
        }
        
        const listener = (event: KeyboardEvent) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                searchAction();
            }
        };
        document.addEventListener("keydown", listener);
    });

    const searchAction = () => {
       /** if(!search || search.length === 0){
            dispatch(getAll());
        }*/
    }
    

    useEffect(()=> {
        const inputSearch = document.getElementById('search');
        if(search.length > 2){
           dispatch(getByName(search));
            if(inputSearch != undefined){
                inputSearch!.style.transform = "translateY(-90px)";
            }
        }
        if(!search || search.length === 0){
            dispatch(clearSearch());
            if(inputSearch != undefined){
                inputSearch!.style.transform = "translateY(0px)";
            }
        }
    }, [search]);

    return (<div className='container'>
        <div className='items-search'>
            <div className='logo' id="logo"/>
            <div className='search' id="search">
                <h2>Buscador De Personajes</h2>
                <input
                    className='search-input'
                    id='search-input'
                    type="text"
                    placeholder='Ej. Iron Man'
                    autoComplete="off"
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