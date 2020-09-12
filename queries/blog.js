import { gql } from "@apollo/client";

export const ALL_POST_QUERY = gql`
  {
    posts {
      edges {
        node {
          title
          slug
          date
        }
      }
    }
  }
`;

export const ALL_POST_SLUG = gql`
  {
    posts {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const SINGLE_POST_BY_SLUG = gql`
  query getPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      date
      content
    }
  }
`;
