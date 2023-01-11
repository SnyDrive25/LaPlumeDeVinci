import "./Loading.css";
import loading from '../../images/loading.gif';

function Loading() {
    return (
        <div id="Loading">
            <p>
                <img src={loading} alt="loading"></img>
            </p>
        </div>
    );
}

export default Loading;