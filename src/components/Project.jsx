import { Link } from 'react-router-dom';
import { LogoGithub } from 'react-ionicons'
import { Eye } from 'react-ionicons'

export default function Project(props) {

    return <div className="project-card">
                <div >
                    <img src={props.thumbnail}/>
                </div>
                <div className = "info">
                    <p>{props.title}</p>
                    <div className = "links">
                        <Link to={props.github_link}>
                        <i className="bi bi-github"></i>
                        </Link>
                       {props.live_link ? 
                            <Link to={props.live_link}>
                               <i className="bi bi-eye-fill"></i>
                            </Link>: null}
                    </div>
                </div>
            </div>
}