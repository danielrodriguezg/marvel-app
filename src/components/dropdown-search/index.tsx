import { useSelector } from 'react-redux';
import { IStore } from '../../store';
import { IResponse } from '../../utils/CommonFunctions';
import DropdownItemComponent from './dropdown-item';
import './styles.css';

const DropdownSearchComponent = ({searching}:{searching:boolean}) => {
    const characters = useSelector((state: IStore) :IResponse|undefined=>  state.characterReducer.characters);
    const isLoading = useSelector((state: IStore) => state.characterReducer.isLoading);
    const MapResult =() => {
        if(characters !== undefined && characters.data.count > 0){
            return <div className="dropdown">
                    {characters.data.results.map(result => {
                    return <DropdownItemComponent value={result}/>
                })}
            </div>
        }
        if(searching){
            if(isLoading){
                return <div className="dropdown">
                    <div className="item"><span>Cargando...</span></div>
                </div>
            }
            return <div className="dropdown">
                <div className="item"><span>No se encontraron resultados</span></div>
            </div>
        }
        return <></>;
        
    };
    return(
        <MapResult/>
    );
}
export default DropdownSearchComponent;