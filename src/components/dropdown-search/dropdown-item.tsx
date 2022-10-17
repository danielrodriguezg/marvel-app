import { useDispatch } from "react-redux";
import { selectCharacter } from "../../store/actions/CharactersActions";
import { IResultCharacters } from "../../utils/ResponsesInterfaces";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const DropdownItemComponent = ({ value }:{ value:IResultCharacters }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnClick = () => {
        dispatch(selectCharacter(value));
        const search = document.getElementById('search');
        if(search != undefined){
            search!.style.transform = "translateX(-100px)";
            search!.style.opacity = "0";
        }
        const logo = document.getElementById('logo');
        if(logo != undefined){
            logo!.style.transform = "translateY(-100px)";
            logo!.style.opacity = "0";
        }
        setTimeout(() => navigate('/detail'), 700);
    }

    return <div onClick={() => handleOnClick()} key={value.id} className="item"><span>{value.name}</span></div>;
}
export default DropdownItemComponent;