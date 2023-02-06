import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2000 - 2006"
        iconStyle={{ background: "#3e497a", color:"#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of the Philippines
          </h3>  
          <p>Bachelor of Arts of Multimedia Studies</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2000 - 2006"
        iconStyle={{ background: "#3e497a", color:"#fff" }}
        icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Carlos F. Gonzales High School
          </h3>  
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2000 - 2006"
        iconStyle={{ background: "#e9d35b", color:"#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Carlos F. Gonzales High School
          </h3>  
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2000 - 2006"
        iconStyle={{ background: "#e9d35b", color:"#fff" }}
        icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Carlos F. Gonzales High School
          </h3>  
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
