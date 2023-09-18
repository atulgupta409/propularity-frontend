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
