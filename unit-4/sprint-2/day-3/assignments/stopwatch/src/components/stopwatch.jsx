import "./stopwatch.css";

export const Stopwatch = ({watch}) => {
    let hr = Math.floor(watch / 360000);
    let min = Math.floor((watch % 360000) / 6000);
    let sec = Math.floor(((watch % 360000) % 6000) / 100);
    let miliSec = watch%100;
    return (
        <div id="stopwatch">
            {hr ? <div>{hr}<p>h</p> </div>:null}
            {min ? <div>{min}<p>m</p> </div>:null}
            <div>{sec}<p>s</p> </div>
            <div>{miliSec}<p></p></div>
        </div>
    )
}