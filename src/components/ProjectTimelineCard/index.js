import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineDetails} = props
  const {imageUrl, projectTitle, description, duration, projectUrl} =
    projectTimelineDetails
  return (
    <div className="project-timeline-card-container">
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-url"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard