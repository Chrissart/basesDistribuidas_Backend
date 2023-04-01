import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ADDRESSES = gql`
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

function AddressList() {
  const [addresses, setAddresses] = useState([]);
  const { loading, error, data } = useQuery(GET_ADDRESSES);

  useEffect(() => {
    if (data) {
      setAddresses(data.getAddresses);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Address List</h1>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            {address.street} {address.exterior_number} {address.interior_number} {address.postal_code}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddressList;
