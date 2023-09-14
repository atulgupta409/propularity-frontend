import { gql } from "@apollo/client";

export const GET_PROJECTS_BY_MICROLOCATIONS = gql`
  query builder_ProjectsByLocation(
    $location: String
    $page: Int
    $perPage: Int
  ) {
    builderProjectsByLocation(
      location: $location
      page: $page
      perPage: $perPage
    ) {
      totalCount
      filteredProjects {
        name
        project_status
        starting_price
        slug
      }
    }
  }
`;
