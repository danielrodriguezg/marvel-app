import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../store';
import { clearSearch, getByName } from '../../store/actions/CharactersActions';
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
                    console.log("render");
                    toast.success('Ingresa el nombre de un personaje de Marvel en el Buscador. Haz clic en el personaje que quieras y mira información relacinada con él. 🤗', {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
                mensaje();
            }, 3000);
    }, [rendered]);
    /** 
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

    }**/
    

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
            <div className='logo'/>
            <div className='search' id="search">
                <h2>Buscador De Personajes</h2>
                <input
                    className='search-input'
                    id='search-input'
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