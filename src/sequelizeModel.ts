import { DataTypes } from 'sequelize';
import sequelize from './sequelize';

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  neighborhood_id: DataTypes.NUMBER,
  street: DataTypes.STRING,
  exterior_number: DataTypes.STRING,
  interior_number: DataTypes.STRING,
  postal_code: DataTypes.STRING
});

const Case = sequelize.define('Case', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  case_number: DataTypes.STRING,
  start_date: DataTypes.DATE,
  status_id: DataTypes.NUMBER,
});

const CaseDescription = sequelize.define('CaseDescription', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  case_id: DataTypes.NUMBER,
  description: DataTypes.STRING,
});

const CaseStatus = sequelize.define('CaseStatus', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  status_name: DataTypes.STRING,
  description: DataTypes.STRING,
});

const City = sequelize.define('City', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  state_id: DataTypes.NUMBER,
  name: DataTypes.STRING,
})

const Decision = sequelize.define('Decision', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  case_id: DataTypes.NUMBER,
  stage_id: DataTypes.NUMBER,
  user_id: DataTypes.NUMBER,
  decision_date: DataTypes.DATE,
  decision_text: DataTypes.STRING,
})

const Evidence = sequelize.define('Evidence', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  stage_id: DataTypes.NUMBER,
  submit_date: DataTypes.DATE,
})

const EvidenceDescription = sequelize.define('EvidenceDescription', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  evidence_id: DataTypes.NUMBER,
  description: DataTypes.STRING,
  file: DataTypes.STRING,
})

const InvolvedCase = sequelize.define('InvolvedCase', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  person_id: DataTypes.NUMBER,
  level_id: DataTypes.NUMBER,
  case_id: DataTypes.NUMBER,
})

const Neighborhood = sequelize.define('Neighborhood', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  city_id: DataTypes.NUMBER,
  name: DataTypes.STRING,
})

const Observation = sequelize.define('Observation', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  case_id: DataTypes.NUMBER,
  stage_id: DataTypes.NUMBER,
  user_id: DataTypes.NUMBER,
  observation_date: DataTypes.DATE,
  observation_text: DataTypes.STRING,
})

const Parties = sequelize.define('Parties', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  name: DataTypes.STRING, 
  contact_details: DataTypes.STRING,
  state_id: DataTypes.NUMBER,
  city_id: DataTypes.NUMBER,
  neighborhood_id: DataTypes.NUMBER,
  address_id: DataTypes.NUMBER,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
})

const StageDescription = sequelize.define('StageDescription', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  stage_id: DataTypes.NUMBER,
  description: DataTypes.STRING,
})

const Stages = sequelize.define('Stages', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  case_id: DataTypes.NUMBER,
  references: DataTypes.STRING,
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE,
})

const States = sequelize.define('States', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  name: DataTypes.STRING,
})

const UserTypes = sequelize.define('UserTypes', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true},
  type_name: DataTypes.STRING,
  description: DataTypes.STRING,
})

export {Address, Case, CaseDescription, CaseStatus, City, Decision, Evidence, 
  EvidenceDescription, InvolvedCase, Neighborhood, Observation, Parties,
  StageDescription, Stages, States, UserTypes};
