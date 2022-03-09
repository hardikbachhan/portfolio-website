import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as SchoolIcon } from "../public/icons/school.svg";

import timelineElements from "../public/data/db.js";

function Experience() {

    const schoolIconStyles = {
        background: "#FF5C8D"    // #F9c74f
    }

    return (
        <div className="" style={{ backgroundColor: "#FFC0D3" }}>
            <VerticalTimeline>
                {timelineElements.work.map((element) => {
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={schoolIconStyles}
                            icon={<SchoolIcon />}
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
                            <a className={"timeline-button experience-button"} href={element.websiteLink}>{element.buttonText}</a>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
