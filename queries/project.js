import { gql } from "@apollo/client";

export const ALL_PROJECT_QUERY = gql`
  {
    projects {
      edges {
        node {
          title
          projectDetail {
            description
            image {
              altText
              sourceUrl
            }
            isOngoing
            isPrivate
            responsibilities
            startTime
            endTime
            url
            stack
          }
        }
      }
    }
  }
`;
