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
exports.__esModule = true;
var client_1 = require("react-dom/client");
var ErrorBoundary_1 = require("./components/ErrorBoundary");
var React = __importStar(require("react"));
var App = function () {
    var _a = React.useState("windows9x"), variant = _a[0], setVariant = _a[1];
    return (React.createElement(ErrorBoundary_1.ErrorBoundary, { variant: variant },
        React.createElement("h1", null, "React-BlueScreen"),
        React.createElement("hr", null),
        React.createElement(ErrorButton, null),
        React.createElement("h2", null, "Theme"),
        React.createElement("select", { name: "options", onChange: function (e) { return setVariant(e.target.value); }, value: variant },
            React.createElement("option", { value: "windows" }, "windows"),
            React.createElement("option", { value: "windows9x" }, "windows9x"),
            React.createElement("option", { value: "macOS" }, "macOS"))));
};
var ErrorButton = function () {
    var _a = React.useState(undefined), error = _a[0], setError = _a[1];
    React.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    return (React.createElement("button", { onClick: function () {
            setError(new Error("useEffect"));
        } }, "throw Error"));
};
window.addEventListener("DOMContentLoaded", function () {
    var mountNode = document.getElementById("root");
    if (!mountNode) {
        throw new Error("#root element is not found");
    }
    var root = (0, client_1.createRoot)(mountNode);
    root.render(React.createElement(App, null));
});
