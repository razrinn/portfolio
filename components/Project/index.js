import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { DateString } from "components";

const Project = ({
  title,
  image,
  description,
  responsibility,
  startTime,
  endTime,
  url,
  isOngoing,
  isPrivate,
  stack,
}) => {
  return (
    <div className="baseProject">
      <h2 className="projectTitle">{title}</h2>
      <p className="projectDate">
        <DateString dateString={startTime} />
        {" - "}
        {isOngoing ? "Present" : <DateString dateString={endTime} />}
      </p>
      <img src={image.sourceUrl} alt={image.altText} className="projectImage" />
      <p className="projectDescription">{description}</p>
      <h3>Responsibilities</h3>
      <div
        className="projectResponsibilities"
        dangerouslySetInnerHTML={{ __html: responsibility }}
      />
      <h3>Stacks</h3>
      <p>{stack}</p>
      {!isPrivate && (
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className="projectLink"
        >
          Visit website
        </a>
      )}
      <style jsx>{`
        .baseProject {
          color: #ffffff;
          padding-bottom: 24px;
        }
        .baseProject:not(:last-child) {
          margin-bottom: 48px;
          border-bottom: 1px solid #a1a1a1;
        }
        .projectTitle {
          color: #ffffff;
          margin-block-end: 0.5em;
          font-weight: bold;
        }
        h3 {
          margin-block-end: 0em;
        }
        .projectDate {
          margin-block-start: 0;
          color: #a1a1a1;
        }
        .projectImage {
          height: 300px;
          text-align: right;
        }
        @media only screen and (max-width: 768px) {
          .projectImage {
            height: auto;
            width: 100%;
          }
        }
        .projectDescription {
          color: #ffffff;
          font-family: "Work sans";
        }
        .projectResponsibilities {
          font-family: "Work sans";
          color: #ffffff;
        }
        .projectLink {
          color: #a1a1a1;
        }
        .projectLink:hover {
          color: #ffffff;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    sourceUrl: PropTypes.string,
    altText: PropTypes.string,
  }),
  description: PropTypes.string,
  responsibility: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  url: PropTypes.string,
  isPrivate: PropTypes.bool,
  isOngoing: PropTypes.bool,
  stack: PropTypes.string,
};

export default Project;
