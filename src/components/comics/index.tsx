import { IComicResult } from "../../utils/ResponsesInterfaces";
import './styles.css';

const ComicInfoComponent = ({result, direction}:{result:IComicResult, direction:string}) => {
    return <div className={'fade-in '+direction}>
            <img src={result.thumbnail.path+"/portrait_incredible."+result.thumbnail.extension}/>
        <div className="comic-description">
            <h1>{result.title}</h1>
            <p>{result.description}</p>
        </div>
    </div>
}
export default ComicInfoComponent;