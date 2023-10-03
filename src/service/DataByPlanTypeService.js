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


export const GET_PROJECTS_BY_BUILDER_AND_TYPE = gql`
  query builder_Projects(
    $builderName: String,
    $type: String
  ) {
    projectsByBuilderAndTypes(
      builderName: $builderName
      type: $type
    ) { 
      name
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
      location{
        city{
          name
        }
        micro_location{
          name
        }
      }
    }
  }
`;