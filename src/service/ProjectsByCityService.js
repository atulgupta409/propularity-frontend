import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_CITY = gql`
  query projects_By_City($city: String) {
    projectsByCity(city: $city) {
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
