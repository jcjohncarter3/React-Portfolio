// This is a static page mocking an "About Us" section for our fake user data
const projectsList = [{
    title: "Travel Journal",
    thumbnail: "placeholder_image.png",
    github_link: "https://github.com/jcjohncarter3/travel-journal",

}, {
    title: "ReadMe Genereator",
    thumbnail: "placeholder_image.png",
    github_link: "https://github.com/jcjohncarter3/ReadMe_Generator",

}, {
    title: "Task Board",
    thumbnail: "placeholder_image.png",
    github_link: "https://github.com/jcjohncarter3/Task-Board",
    live_link: "https://jcjohncarter3.github.io/Task-Board/",

}, {
    title: "Weather App",
    thumbnail: "placeholder_image.png",
    github_link: "https://github.com/jcjohncarter3/Weather-App",
    live_link: "https://jcjohncarter3.github.io/Weather-App/",

}, {
    title: "Simple SVG Logo Maker",
    thumbnail: "placeholder_image.png",
    github_link: "https://github.com/jcjohncarter3/SVG-Logo-Maker",
    live_link: "https://github.com/jcjohncarter3/SVG-Logo-Maker?tab=readme-ov-file#link-to-video-demonstration",

}, {
    title: "Notetaker App",
    thumbnail: "placeholder_image.png",
    github_link: "https://github.com/jcjohncarter3/Note-Taker",

}, {
    title: "Employee Tracker",
    thumbnail: "placeholder_image.png",
    github_link: "https://github.com/jcjohncarter3/Employee-Tracker-12",

}]
import Project from "../components/Project"
export default function PortfolioPage() {
    return (
      <div className="container pt-4">
        <h2>Portfolio</h2>
        <div>
            {projectsList.map(project => {
                return <Project title={project.title} github_link={project.github_link} thumbnail={project.thumbnail} live_link={project.live_link} />
            })}
        </div>
      </div>
    );
  }
  