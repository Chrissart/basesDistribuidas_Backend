import { gql } from 'apollo-boost';

export const GET_ADDRESSES = gql`
  query GetAddresses {
    getAddresses {
      id
      street
      exterior_number
      interior_number
      postal_code
    }
  }
`;
