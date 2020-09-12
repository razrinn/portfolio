import { NetworkStatus, useQuery } from "@apollo/client";
import { ALL_PROJECT_QUERY } from "queries/project";
import { Project } from "components";

const ProjectList = () => {
  const { loading, error, data, networkStatus } = useQuery(ALL_PROJECT_QUERY, {
    notifyOnNetworkStatusChange: true,
  });
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  // Client-side data fetching
  if (error) return <p>ada error</p>;
  if (loading && !loadingMorePosts) return <div>Loading</div>;
  const projects = data.projects.edges;
  return (
    <div>
      {projects.map(({ node: project }, idx) => (
        <Project
          key={idx}
          title={project.title}
          image={project.projectDetail.image}
          startTime={project.projectDetail.startTime}
          endTime={project.projectDetail.endTime}
          description={project.projectDetail.description}
          responsibility={project.projectDetail.responsibilities}
          stack={project.projectDetail.stack}
          url={project.projectDetail.url}
        />
      ))}
    </div>
  );
};

export default ProjectList;
