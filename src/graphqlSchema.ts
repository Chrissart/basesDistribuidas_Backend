const { gql } = require('apollo-server-express');
const Sequelize = require('sequelize');
const { ApolloError } = require('apollo-server-express');
// import { makeExecutableSchema } from 'graphql-tools'; pa usar esta wea se debe instalar el graphql-tools
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

  type Query {
    getCases: String!
  }

  type Query {
    getCasesDescriptions: String!
  }

  type Query {
    getCasesStatus: String!
  }

  type Query {
    getCities: String!
  }

  type Query {
    getDecisions: String!
  }

  type Query {
    getEvidences: String!
  }

  type Query {
    getEvidencesDescriptions: String!
  }

  type Query {
    getInvolvedCases: String!
  }

  type Query {
    getNeighborhoods: String!
  }

  type Query {
    getObservations: String!
  }

  type Query {
    getParties: String!
  }
  
  type Query {
    getStages: String!
  }

  type Query {
    getStagesDescriptions: String!
  }

  type Query {
    getState: String!
  }

  type Query {
    getUserTypes: String!
  }
  
  
  `;

const resolvers = {
  Query: {
    // aquí van las funciones resolvers para las queries
    getAddresses: async () => {
        const addresses = await sequelizeModel.Address.findAll();
        return addresses;
      },
    getCases: async () => {
        const Case = await sequelizeModel.Case.findAll();
        return Case;
      },
    getCasesDescriptions: async () => {
        const CaseDescription = await sequelizeModel.CaseDescription.findAll();
        return CaseDescription;
      },
    getCasesStatus: async () => {
        const CaseStatus = await sequelizeModel.CaseStatus.findAll();
        return CaseStatus;
      },
    getCities: async () => {
        const City = await sequelizeModel.City.findAll();
        return City;
      },
    getDecisions: async () => {
        const Decision = await sequelizeModel.Decision.findAll();
        return Decision;
      },
    getEvidences: async () => {
        const Evidence = await sequelizeModel.Evidence.findAll();
        return Evidence;
      },
    getEvidencesDescriptions: async () => {
        const EvidenceDescription = await sequelizeModel.EvidenceDescription.findAll();
        return EvidenceDescription;
      },
    getInvolvedCases: async () => {
        const InvolvedCase = await sequelizeModel.InvolvedCase.findAll();
        return InvolvedCase;
      },
    getNeighborhoods: async () => {
        const Neighborhood = await sequelizeModel.Neighborhood.findAll();
        return Neighborhood;
      },
    getObservations: async () => {
        const Observation = await sequelizeModel.Observation.findAll();
        return Observation;
      },
    getParties: async () => {
        const Parties = await sequelizeModel.Parties.findAll();
        return Parties;
      },
    getStagesDescriptions: async () => {
        const StageDescription = await sequelizeModel.StageDescription.findAll();
        return StageDescription;
      },
    getStages: async () => {
        const Stages = await sequelizeModel.Stages.findAll();
        return JSON.stringify(Stages);
      },
    getState: async () => {
        const States = await sequelizeModel.States.findAll();
        return States;
      },
    getUserTypes: async () => {
        const UserTypes = await sequelizeModel.UserTypes.findAll();
        return UserTypes;
     },
  },
  /*
  Mutation: {
    // aquí van las funciones resolvers para las mutaciones
    createAddress: (_, { name, description, price }, { dataSources }) => {
      return dataSources.productAPI.createAddress({ name, description, price });
    },
    updateAddress: (_, { id, name, description, price }, { dataSources }) => {
      return dataSources.productAPI.updateAddress({ id, name, description, price });
    },
    deleteAddress: (_, { id }, { dataSources }) => {
      return dataSources.productAPI.deleteAddress({ id });
    },  
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
//export default makeExecutableSchema({ typeDefs, resolvers });