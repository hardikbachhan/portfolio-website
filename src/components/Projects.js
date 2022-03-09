import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as ProjectIcon } from "../public/icons/project.svg";

import timelineElements from "../public/data/db.js";

function Projects() {

    const projectIconStyles = {
        background: "#BAABDA"    // #F9c74f
    }

    return (
        <div className="" style={{ backgroundColor: "#D9D7F1" }}>
            <VerticalTimeline>
                {timelineElements.projects.map((element) => {
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={projectIconStyles}
                            icon={<ProjectIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timeline-card-heading">
                                {element.title}
                            </h3>
                            <h6 className="vertical-timeline-element-subtitle">
                                {element.category}
                            </h6>
                            <p id="description" >
                                {element.description}
                            </p>
                            <a className={"timeline-button project-button"} href={element.websiteLink}>{element.buttonText}</a>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Projects;
