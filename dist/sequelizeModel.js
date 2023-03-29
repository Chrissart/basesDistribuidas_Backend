"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypes = exports.States = exports.Stages = exports.StageDescription = exports.Parties = exports.Observation = exports.Neighborhood = exports.InvolvedCase = exports.EvidenceDescription = exports.Evidence = exports.Decision = exports.City = exports.CaseStatus = exports.CaseDescription = exports.Case = exports.Address = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("./sequelize"));
const Address = sequelize_2.default.define('Address', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    neighborhood_id: sequelize_1.DataTypes.NUMBER,
    street: sequelize_1.DataTypes.STRING,
    exterior_number: sequelize_1.DataTypes.STRING,
    interior_number: sequelize_1.DataTypes.STRING,
    postal_code: sequelize_1.DataTypes.STRING,
});
exports.Address = Address;
const Case = sequelize_2.default.define('Case', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    case_number: sequelize_1.DataTypes.STRING,
    start_date: sequelize_1.DataTypes.DATE,
    status_id: sequelize_1.DataTypes.NUMBER,
});
exports.Case = Case;
const CaseDescription = sequelize_2.default.define('CaseDescription', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    case_id: sequelize_1.DataTypes.NUMBER,
    description: sequelize_1.DataTypes.STRING,
});
exports.CaseDescription = CaseDescription;
const CaseStatus = sequelize_2.default.define('CaseStatus', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    status_name: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
});
exports.CaseStatus = CaseStatus;
const City = sequelize_2.default.define('City', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    state_id: sequelize_1.DataTypes.NUMBER,
    name: sequelize_1.DataTypes.STRING,
});
exports.City = City;
const Decision = sequelize_2.default.define('Decision', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    case_id: sequelize_1.DataTypes.NUMBER,
    stage_id: sequelize_1.DataTypes.NUMBER,
    user_id: sequelize_1.DataTypes.NUMBER,
    decision_date: sequelize_1.DataTypes.DATE,
    decision_text: sequelize_1.DataTypes.STRING,
});
exports.Decision = Decision;
const Evidence = sequelize_2.default.define('Evidence', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    stage_id: sequelize_1.DataTypes.NUMBER,
    submit_date: sequelize_1.DataTypes.DATE,
});
exports.Evidence = Evidence;
const EvidenceDescription = sequelize_2.default.define('EvidenceDescription', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    evidence_id: sequelize_1.DataTypes.NUMBER,
    description: sequelize_1.DataTypes.STRING,
    file: sequelize_1.DataTypes.STRING,
});
exports.EvidenceDescription = EvidenceDescription;
const InvolvedCase = sequelize_2.default.define('InvolvedCase', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    person_id: sequelize_1.DataTypes.NUMBER,
    level_id: sequelize_1.DataTypes.NUMBER,
    case_id: sequelize_1.DataTypes.NUMBER,
});
exports.InvolvedCase = InvolvedCase;
const Neighborhood = sequelize_2.default.define('Neighborhood', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    city_id: sequelize_1.DataTypes.NUMBER,
    name: sequelize_1.DataTypes.STRING,
});
exports.Neighborhood = Neighborhood;
const Observation = sequelize_2.default.define('Observation', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    case_id: sequelize_1.DataTypes.NUMBER,
    stage_id: sequelize_1.DataTypes.NUMBER,
    user_id: sequelize_1.DataTypes.NUMBER,
    observation_date: sequelize_1.DataTypes.DATE,
    observation_text: sequelize_1.DataTypes.STRING,
});
exports.Observation = Observation;
const Parties = sequelize_2.default.define('Parties', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    name: sequelize_1.DataTypes.STRING,
    contact_details: sequelize_1.DataTypes.STRING,
    state_id: sequelize_1.DataTypes.NUMBER,
    city_id: sequelize_1.DataTypes.NUMBER,
    neighborhood_id: sequelize_1.DataTypes.NUMBER,
    address_id: sequelize_1.DataTypes.NUMBER,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
});
exports.Parties = Parties;
const StageDescription = sequelize_2.default.define('StageDescription', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    stage_id: sequelize_1.DataTypes.NUMBER,
    description: sequelize_1.DataTypes.STRING,
});
exports.StageDescription = StageDescription;
const Stages = sequelize_2.default.define('Stages', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    case_id: sequelize_1.DataTypes.NUMBER,
    references: sequelize_1.DataTypes.STRING,
    start_date: sequelize_1.DataTypes.DATE,
    end_date: sequelize_1.DataTypes.DATE,
});
exports.Stages = Stages;
const States = sequelize_2.default.define('States', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    name: sequelize_1.DataTypes.STRING,
});
exports.States = States;
const UserTypes = sequelize_2.default.define('UserTypes', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    type_name: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
});
exports.UserTypes = UserTypes;
//# sourceMappingURL=sequelizeModel.js.map