import { useDispatch } from "react-redux";
import { selectCharacter } from "../../store/actions/CharactersActions";
import { IResult } from "../../utils/CommonFunctions";
import { useNavigate } from 'react-router-dom';
import './styles.css';

const DropdownItemComponent = ({ value }:{ value:IResult }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnClick = () => {
        dispatch(selectCharacter(value));
        const search = document.getElementById('search');
        if(search != undefined){
            search!.style.transform = "translateX(-1300px)";
        }
        const logo = document.getElementById('logo');
        if(logo != undefined){
            logo!.style.transform = "translateY(-500px)";
        }
        setTimeout(() => navigate('/detail'), 700);
    }

    return <div onClick={() => handleOnClick()} key={value.id} className="item"><span>{value.name}</span></div>;
}
export default DropdownItemComponent;