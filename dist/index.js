"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./app");
const db_1 = require("./db");
const seedData_1 = require("./utils/seedData");
dotenv_1.default.config();
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 8000;
(0, db_1.connectDB)(mongoUri)
    .then(async () => {
    await (0, seedData_1.seedData)();
    app_1.app.listen(port, () => {
        console.log("server is running on port", port);
    });
})
    .catch((err) => {
    console.log("server failed to run", err);
});
//# sourceMappingURL=index.js.map