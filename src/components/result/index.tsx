import { useSelector } from "react-redux";
import { IStore } from "../../store";
import { IResult } from "../../utils/CommonFunctions";
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useEffect } from "react";

const ResultPageComponent = () => {
    const character = useSelector((state : IStore) :IResult|undefined => state.characterReducer.selected);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            let navBar =document.getElementById('nav-bar');
            if(navBar != undefined){
                navBar!.style.transform = "translateY(0px)";
            }
            let resultCard = document.getElementById('result-card');
            if(resultCard != undefined){
                resultCard!.style.transform = "translateX(0)";
            }
        }, 300);
        if(character === undefined){
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    })
    const goBack = () => {
        //no se porqué, pero al redirigir inmediatamente, no se ejecuta el useEffect del componente de busqueda 🙊
        setTimeout(() => {
            navigate('/');
        }, 10);
    }
    return <div>
        <div className="container-result">
            <div className="nav-bar-result" id="nav-bar">
                <div><a className="button-volver" onClick={() => goBack()}><span className="flecha"></span></a></div>
                <div><h3>Volver</h3></div>
            </div>
            
            <header className="result-card" id="result-card">
                {character === undefined ? 
                    <h1 style={{paddingLeft: "50px"}}>No se ha buscado personaje 😞</h1>
                    :
                    <>
                        <img className="imagen-personaje" src={character?.thumbnail.path+"/landscape_medium."+character?.thumbnail.extension} />
                        <div className="description">
                            <h1>{character?.name}</h1>
                            <p>{character?.description}</p>
                        </div>
                    </>
                }
                
            </header>
            <div className="content">
                
            </div>
        </div>
    </div>
}
export default ResultPageComponent;