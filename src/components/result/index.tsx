import { useSelector } from "react-redux";
import { IStore } from "../../store";
import { IResult } from "../../utils/CommonFunctions";
import {Link} from 'react-router-dom';
import './styles.css';
import { useEffect } from "react";

const ResultPageComponent = () => {
    const character = useSelector((state : IStore) :IResult|undefined => state.characterReducer.selected);
    useEffect(() => {
        setTimeout(() => {
            const mostrarNavBar = () => {
                let navBar =document.getElementById('nav-bar');
                if(navBar != undefined){
                    navBar!.style.transform = "translateY(0px)";
                }
            };
            mostrarNavBar();
        }, 300);
    })
    return <div>
        <div className="container-result">
            <nav className="nav-bar-result" id="nav-bar">
                <Link className="button-volver" to="/"><span className="flecha"></span></Link>
            </nav>
            <header className="result-card">
                <img className="imagen-personaje" src={character?.thumbnail.path+"/landscape_medium."+character?.thumbnail.extension} />
                <div className="description">
                    <h1>{character?.name}</h1>
                    <p>{character?.description}</p>
                </div>
            </header>
            <div className="content">
                
            </div>
        </div>
    </div>
}
export default ResultPageComponent;