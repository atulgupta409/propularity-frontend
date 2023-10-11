import { gql } from "@apollo/client";

export const GET_SEO_BY_SLUG = gql`
  query GetCitySeo($slug: String) {
    citySeoContent(slug: $slug) {
      page_title
      title
      description
      keywords
      footer_title
      footer_description
      script
      header_description
      twitter {
        title
        description
      }
      open_graph {
        title
        description
      }
    }
  }
`;
