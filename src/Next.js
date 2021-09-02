import './Home.css';
import { useLocation } from 'react-router';

function Next() {

    var location = useLocation();
    var s = location.state;
    var flame = "Your relationship with "+s[0].name+ " is "+s[0].flame;
    return (
        <div>
            <center>
                <div className="container">
                    <div className="card">

                        <img src={s[0].image } alt={s[0].flame}/>

                        <div className="card-body">

                            <center>
                                <h5 className="card-title" style={{fontSize: 25+"px"}}>FLAMES</h5>
                            </center>
                            <div style={{fontSize: 15+"px",fontFamily:"Verdana"}}>{flame}</div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Next;