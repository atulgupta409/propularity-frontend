import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_MICROLOCATIONS = gql`
  query builder_ProjectsByLocation(
    $location: String
    $page: Int
    $perPage: Int
    $city: String
  ) {
    builderProjectsByLocation(
      location: $location
      page: $page
      perPage: $perPage
      city: $city
    ) {
      totalCount
      filteredProjects {
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
      }
    }
  }
`;

export const GET_PROJECTS_BY_LOCATIONS_AND_CITY = gql`
  query builder_ProjectsByLocation(
    $location: String
    $city: String
  ) {
    projectsByLocationForSearch(
      location: $location
      city: $city
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
    }
  }
`;
