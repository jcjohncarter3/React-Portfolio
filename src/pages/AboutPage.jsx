// This is a static page mocking an "About Us" section for our fake user data
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="page">
      <h2>About Me</h2>
      <img className="profile-image" src="profile.png" alt="Logo" />;

      <p>John Carter is a junior full stack web developer and musician based in Dallas, Texas. 
        He began his journey into tech in 2024 when he completed his certification 
        from <Link to="https://www.smu.edu/">
        Southern Methodist University
        </Link> where he attained skills in MERN, AWS, and Python.
        His desires for customer satisfaction, coaching, and personal development makes him a 
        strong candidate for a personal projects and team projects as well as mentoring future 
        candidates when he works his way to senior level.</p>
    </div>
  );
}
