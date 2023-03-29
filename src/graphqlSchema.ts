const { gql } = require('apollo-server-express');
const Sequelize = require('sequelize');
import * as sequelizeModel from './sequelizeModel'

const typeDefs = gql`
  type Address {
    id: Int!
    neighborhood_id: Int!
    street: String!
    exterior_number: String!
    interior_number: String!
    postal_code: String!
    neighborhood: Neighborhood!
  }

  type Case {
    id: Int!
    case_number: String!
    start_date: String!
    status_id: Int!
    status: CaseStatus!
    descriptions: [CaseDescription!]!
    decisions: [Decision!]!
    observations: [Observation!]!
    involved_parties: [InvolvedCase!]!
  }

  type CaseDescription {
    id: Int!
    case_id: Int!
    description: String!
  }

  type CaseStatus {
    id: Int!
    status_name: String!
    description: String!
  }

  type City {
    id: Int!
    state_id: Int!
    name: String!
    neighborhoods: [Neighborhood!]!
  }

  type Decision {
    id: Int!
    case_id: Int!
    stage_id: Int!
    user_id: Int!
    decision_date: String!
    decision_text: String!
    stage: Stage!
    involved_case: InvolvedCase!
  }

  type Evidence {
    id: Int!
    stage_id: Int!
    submit_date: String!
    stage: Stage!
    description: EvidenceDescription!
  }

  type EvidenceDescription {
    id: Int!
    evidence_id: Int!
    description: String!
    file: String
  }

  type InvolvedCase {
    id: Int!
    person_id: Int!
    level_id: Int!
    case_id: Int!
    person: Party!
    level: UserType!
    case: Case!
  }

  type Neighborhood {
    id: Int!
    city_id: Int!
    name: String!
    city: City!
    addresses: [Address!]!
  }

  type Observation {
    id: Int!
    case_id: Int!
    stage_id: Int!
    user_id: Int!
    observation_date: String!
    observation_text: String!
    stage: Stage!
    involved_case: InvolvedCase!
  }

  type Party {
    id: Int!
    name: String!
    contact_details: String!
    state: State!
    city: City!
    neighborhood: Neighborhood!
    address: Address!
    email: String
    password: String
  }

  type Stage {
    id: Int!
    name: String!
  }

  type State {
    id: Int!
    name: String!
    cities: [City!]!
  }

  type UserType {
    id: Int!
    name: String!
  }

  type Query {
    getAddresses: String!
  }
  `;

const resolvers = {
  Query: {
    // aquí van las funciones resolvers para las queries
    getAddresses: async () => {
        const addresses = await sequelizeModel.Address.findAll();
        return addresses;
      },
  }, 
  /*
  Mutation: {
    // aquí van las funciones resolvers para las mutaciones

    
  },
  /*
  Address: {
    // aquí van las funciones resolvers para el tipo Address

  },
  /*
  Case: {
    // aquí van las funciones resolvers para el tipo Case
  },
  CaseDescription: {
    // aquí van las funciones resolvers para el tipo CaseDescription
  },
  CaseStatus: {
    // aquí van las funciones resolvers para el tipo CaseStatus
  },
  City: {
    // aquí van las funciones resolvers para el tipo City
  },
  Decision: {
    // aquí van las funciones resolvers para el tipo Decision
  },
  Evidence: {
    // aquí van las funciones resolvers para el tipo Evidence
  },
  EvidenceDescription: {
    // aquí van las funciones resolvers para el tipo EvidenceDescription
  },
  InvolvedCase: {
    // aquí van las funciones resolvers para el tipo InvolvedCase
  },
  Neighborhood: {
    // aquí van las funciones resolvers para el tipo Neighborhood
  },
  Observation: {
    // aquí van las funciones resolvers para el tipo Observation
  },
  Party: {
    // aquí van las funciones resolvers para el tipo Party
  },
  Stage: {
    // aquí van las funciones resolvers para el tipo Stage
  },
  State: {
    // aquí van las funciones resolvers para el tipo State
  },
  UserType: {
    // aquí van las funciones resolvers para el tipo UserT
*/
};
  
export {typeDefs, resolvers};
