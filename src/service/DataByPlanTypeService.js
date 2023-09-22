import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_PLAN_TYPE = gql`
  query GetPlanTypeData($city: String, $planType: String) {
    topProjectsByPlanAndCity(city: $city, planType: $planType) {
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
