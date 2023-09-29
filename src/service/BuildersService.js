import { gql } from "@apollo/client";

export const GET_ALL_BUILDERS_DATA = gql`
  query builders_by_slug($slug: String) {
    buildersBySlug(slug: $slug) {
      name
      BuilderLogo
      description
      starting_price
      configuration
      estb_year
      ratings
      residential_num
      commercial_num
      slug
      images {
        image
        name
        alt
      }
      cities {
        name
      }
    }
  }
`;

export const GET_ALL_IMAGES = gql`
  query builders_by_slug($slug: String) {
    buildersBySlug(slug: $slug) {
      images {
        image
        name
        alt
      }
    }
  }
`;

export const GET_ALL_PROJECTS_BY_BUILDER = gql`
  query projects_by_builders($builderName: String) {
    projectsByBuilder(builderName: $builderName) {
      name
      ratings
      slug
      starting_price
      project_status
      project_type
      location {
        micro_location {
          name
        }
        city {
          name
        }
      }
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


