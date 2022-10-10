import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../store';
import { getAll, getByName } from '../../store/actions/CharactersActions';
import { IResponse } from '../../utils/CommonFunctions';
import './styles.css';


const SearchComponent = () => {
    const [ search, setSearch ] = useState<string>("");
    const dispatch = useDispatch();
    const characters = useSelector((state: IStore) =>  state.characterReducer.characters);
    const isLoading = useSelector((state: IStore) => state.characterReducer.isLoading);
    const errors = useSelector((state: IStore) => state.characterReducer.errors);

    useEffect(()=> {
        const listener = (event: KeyboardEvent) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
              console.log("Enter key was pressed. Run your function.");
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
            dispatch(getByName(search))
        }/*
        if(!search.length){
            dispatch(getAll());
        }*/
    }, [search]);

    /*const MapPersonajes = () =>{
        return(<div>
                {characters.map(character => {
                    return <div key={character.id}>
                    <h3>Nombre: {character.name}</h3>
                    </div>})
                }
            </div>);
    }*/

    

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
                    
                <div>
                    <div className='err-msg'>{errors}</div>
                    {/* isLoading ? "Cargando..." :
                    <MapPersonajes/>
                    */}
                </div>
            </div>
            </div>
    </div>)
}
export default SearchComponent;