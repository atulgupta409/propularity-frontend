import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_STATUS = gql`
  query GetPlanTypeData($city: String, $status: String) {
    projectsByCityAndStatus(city: $city, status: $status) {
      name
      project_status
      starting_price
      slug
      ratings
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
