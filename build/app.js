"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = (_a = process.env.PING_LISTEN_PORT) !== null && _a !== void 0 ? _a : 3000;
app.get('/ping', (req, res) => {
    console.log("la requete=" + req.headers.host);
    console.log(process.env.PING_LISTEN_PORT);
    res.json({ req: req.headers });
});
app.get('*', (req, res) => {
    res.sendStatus(404);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
