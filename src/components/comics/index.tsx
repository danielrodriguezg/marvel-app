import { IComicResult } from "../../utils/ResponsesInterfaces";
import './styles.css';

const ComicInfoComponent = ({result, direction}:{result:IComicResult, direction:string}) => {
    const mapImages = () => {
        return result.images.filter(f => f.extension !== result.thumbnail.extension).map(img => {
            return <img src={img.path+"/standard_medium."+img.extension}></img>
        })
    }
    const mapPersonajes = () => {
        return result.characters.items.map(item => {
            return item.name;
        }).join(", ")
    }
    return <div id="fade-in" className={'fade-in '+direction}>
            <img src={result.thumbnail.path+"/portrait_incredible."+result.thumbnail.extension}/>
        <div className="comic-description">
            <h1>{result.title}</h1>
            <p>{result.description}</p>
            <p><b>Por</b> {result.creators.items.map(it=> it.name).join(", ")}</p>
                {mapImages().length > 0 &&
                <div className="otras-imagenes">
                <h3>Otras imagenes: </h3>
                <div>{mapImages()}</div>
                </div>
                }
            <p><b>Personajes:</b> {mapPersonajes()}</p>
        </div>
    </div>
}
export default ComicInfoComponent;