import { Link } from 'react-router-dom';
import { LogoGithub } from 'react-ionicons'
import { Eye } from 'react-ionicons'

export default function Project(props) {
    return <div style={{border: "1px solid blue"}}>
                <div style={{border: "1px solid red"}}>
                    <img src={props.thubmnail}/>
                </div>
                <div style={{border: "1px solid green"}}>
                    <p>{props.title}</p>
                    <div>
                        <Link to={props.github_link}>
                            <LogoGithub
                                color={'#00000'} 
                                title={"GitHub"}
                                height="25px"
                                width="25px"
                            />
                        </Link>
                       {props.live_link ? 
                            <Link to={props.live_link}>
                                <Eye
                                    color={'#00000'} 
                                    title={"Eye"}
                                    height="25px"
                                    width="25px"
                                />
                            </Link>: null}
                    </div>
                </div>
            </div>
}