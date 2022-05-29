
import "./timer.css";


export const Timer = ({ timer,handleChange,mount}) => { 
    return (
        <div id="Timer">
            {!mount ? <> <><input type="text" defaultValue={Math.floor(timer / 3600)} placeholder="00" name="hr" onChange={handleChange} />
                <p>h</p></>
                <><input type="text" defaultValue={Math.floor(Math.floor(timer % 3600) / 60)} placeholder="00" name="min" onChange={handleChange} />
                    <p>m</p></>
                <><input type="text" defaultValue={(timer % 3600) % 60 } placeholder="00" name="sec" onChange={handleChange} />
                    <p>s</p></></> : <div id="TimerContent" >{Math.floor(timer / 3600)}<p>h </p> {Math.floor(Math.floor(timer % 3600) / 60)}<p>m </p> {(timer % 3600) % 60}<p>s </p> </div >}
        </div>
    )
}