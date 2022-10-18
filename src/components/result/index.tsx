import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../store";
import { IResponseComic, IResultCharacters } from "../../utils/ResponsesInterfaces";
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useEffect } from "react";
import { getComic } from "../../store/actions/ComicsActions";
import ComicInfoComponent from "../comics";

const ResultPageComponent = () => {
    const character = useSelector((state : IStore) :IResultCharacters|undefined => state.characterReducer.selected);
    const comics = useSelector((state: IStore) :IResponseComic|undefined => state.comicReducer.comics);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(character && character.id){
            dispatch(getComic(character!.id));
        }
    }, [character])
    
    //Scroll
    useEffect(() => {
        document.addEventListener('scroll', fadeIn, true);
        function fadeIn () {
            let elementsArray = document.querySelectorAll(".fade-in");
            for (let i in elementsArray) {
                var elem = elementsArray[i];
                var distInView = elem.getBoundingClientRect().top - window.innerHeight + 300;

                if (distInView < 0) {
                    elem.classList.add("in-view");
                } else {
                    elem.classList.remove("in-view");
                }
            }
        }
    });

    //Carga elementos principales
    useEffect(() => {
        setTimeout(() => {
            let navBar =document.getElementById('nav-bar');
            if(navBar != undefined){
                navBar!.style.transform = "translateY(0px)";
                navBar!.style.opacity = "1";
            }
            let resultCard = document.getElementById('result-card');
            if(resultCard != undefined){
                resultCard!.style.transform = "translateX(0)";
                resultCard!.style.opacity = "1";
            }
            let titleComics = document.getElementById('title-comics');
            if(titleComics != undefined){
                titleComics!.style.transform = "translateX(0)";
                titleComics!.style.opacity = "1";
            }
            let titleResult = document.getElementById('title-results');
            if(titleResult != undefined){
                titleResult!.style.transform = "translateX(0)";
                titleResult!.style.opacity = "1";
            }
        }, 300);
        if(character === undefined){
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    });

    const goBack = () => {
        let navBar =document.getElementById('nav-bar');
        if(navBar != undefined){
            navBar!.style.transform = "translateY(-100px)";
            navBar!.style.opacity = "0";
        }
        let resultCard = document.getElementById('result-card');
        if(resultCard != undefined){
            resultCard!.style.transform = "translateX(-100px)";
            resultCard!.style.opacity = "0";
        }
        let titleComics = document.getElementById('title-comics');
        if(titleComics != undefined){
            titleComics!.style.transform = "translateX(-100px)";
            titleComics!.style.opacity = "0";
        }
        let titleResults = document.getElementById('title-results');
        if(titleResults != undefined){
            titleResults!.style.transform = "translateX(-100px)";
            titleResults!.style.opacity = "0";
        }
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }
    const MostrarComics = () => {
        if(comics !== undefined){
            let direction = true;
            return <>
            {
                comics.data.results.map(result => {
                direction = !direction;
                return <ComicInfoComponent result={result} direction={direction?"left":"right"}/>
            })}
            </>
        }
        return <></>
    }
    return <div>
        <div className="container-result">
            <div className="nav-bar-result" id="nav-bar">
                <div><a className="button-volver" onClick={() => goBack()}><span className="flecha"></span></a></div>
                <div><h3>Volver</h3></div>
            </div>
            <h1 id= "title-results" className="title-results">Resultados</h1>
            <header className="result-card" id="result-card">
                {character === undefined ? 
                    <h1 style={{paddingLeft: "50px"}}>No se ha buscado personaje 😞</h1>
                    :
                    <>
                        <img className="imagen-personaje" src={character?.thumbnail.path+"/portrait_incredible."+character?.thumbnail.extension} />
                        <div className="description">
                            <h2><b>Personaje:</b> {character?.name}</h2>
                            <p>{character?.description}</p>
                        </div>
                    </>
                }
            </header>
            <h1 id="title-comics" className="title-comics">Comics</h1>
            <div className="content">
                <MostrarComics/>
            </div>
        </div>
    </div>
}
export default ResultPageComponent;