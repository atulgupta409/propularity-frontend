import { gql } from "@apollo/client";

export const GET_PROJECT_DETAILS = gql`
  query projectsDetails($slug: String) {
    projectDetails(slug: $slug) {
      name
      builder {
        name
      }
      starting_price
      brochure
      location {
        address
        latitude
        longitude
        city {
          name
        }
        micro_location {
          name
        }
      }
      images {
        name
        alt
        image
      }
      project_type
      configuration
      ratings
      project_size
      description
      project_status
      master_plan
      short_descrip
      highlights
      for_sale
      for_rent
      amenties {
        name
        icon
      }
      plans {
        category {
          name
        }
        size
        size_sq
        price
        image
      }
    }
  }
`;

export const GET_ALL_BUILDERS = gql`
  {
    builders {
      _id
      name
      BuilderLogo
      slug
    }
  }
`;


