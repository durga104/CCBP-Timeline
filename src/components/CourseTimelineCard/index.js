import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineDetails} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineDetails
  return (
    <div className="course-timeline-card-container">
      <div className="course-title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>

      <ul className="course-tag-lists">
        {tagsList.map(eachTagList => (
          <li className="course-tag-list">
            <p className="course-tag">{eachTagList.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
