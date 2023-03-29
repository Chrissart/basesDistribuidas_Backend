"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const { gql } = require('apollo-server-express');
const Sequelize = require('sequelize');
const sequelizeModel = __importStar(require("./sequelizeModel"));
const typeDefs = gql `
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
exports.typeDefs = typeDefs;
const resolvers = {
    Query: {
        // aquí van las funciones resolvers para las queries
        getAddresses: () => __awaiter(void 0, void 0, void 0, function* () {
            const addresses = yield sequelizeModel.Address.findAll();
            return addresses;
        }),
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
exports.resolvers = resolvers;
//# sourceMappingURL=graphqlSchema.js.map