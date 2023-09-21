import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_COUNTRY = gql`
  {
    topIndiaProjects {
      name
      ratings
      project_status
      starting_price
      slug
      builder {
        name
      }
      images {
        name
        alt
        image
      }
      location {
        micro_location {
          name
        }
        city {
          name
        }
      }
    }
  }
`;
