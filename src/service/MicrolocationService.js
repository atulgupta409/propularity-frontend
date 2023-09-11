import { gql } from "@apollo/client";

export const GET_MICROLOCATIONS = gql`
  query GetMicroLocations($city: String) {
    microlocations(city: $city) {
      name
    }
  }
`;
