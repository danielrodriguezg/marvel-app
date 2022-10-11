import { useDispatch } from "react-redux";
import { selectCharacter } from "../../store/actions/CharactersActions";
import { IResult } from "../../utils/CommonFunctions";
import './styles.css';

const DropdownItemComponent = ({value}:{value:IResult}) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(selectCharacter(value));
    }

    return <div onClick={() => handleOnClick()} key={value.id} className="item"><span>{value.name}</span></div>;
}
export default DropdownItemComponent;