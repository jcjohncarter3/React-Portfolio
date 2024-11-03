import { Link } from 'react-router-dom';

export default function Project(props) {
    return <div style={{border: "1px solid blue"}}>
                <div style={{border: "1px solid red"}}>
                    <img src={props.thubmnail}/>
                </div>
                <div style={{border: "1px solid green"}}>
                    <p>{props.title}</p>
                    <div>
                        <Link to={props.github_link}>G</Link>
                       {props.live_link ? <Link to={props.live_link}>X</Link>: null}
                    </div>
                </div>
            </div>
}