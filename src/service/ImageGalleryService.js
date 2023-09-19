import { gql } from "@apollo/client";

export const GET_PROJECT_DETAILS = gql`
  query projectsDetails($slug: String) {
    projectDetails(slug: $slug) {
      images {
        name
        alt
        image
      }
      location {
        city {
          name
        }
      }
      builder {
        name
      }
    }
  }
`;
