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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ErrorViewWindows10 = void 0;
var React = __importStar(require("react"));
var windows10_module_css_1 = __importDefault(require("./windows10.module.css"));
var ErrorViewWindows10 = function (_a) {
    var error = _a.error, errorInfo = _a.errorInfo;
    return (React.createElement("div", { className: windows10_module_css_1["default"].errorView },
        React.createElement("div", { className: windows10_module_css_1["default"].body },
            React.createElement("h1", { className: windows10_module_css_1["default"].heading }, ":("),
            React.createElement("p", null, "A problem has occurred with the website and it needs to be reloaded."),
            React.createElement("p", null, "We just collect some Error information and then restart for you."),
            React.createElement("div", { className: windows10_module_css_1["default"].details },
                React.createElement("p", null,
                    "For more information on this issue and possible solutions, please visit the website:",
                    React.createElement("a", { href: "https://reactjs.org/docs/error-boundaries.html", target: "_blank" }, "https://reactjs.org/docs/error-boundaries.html")),
                React.createElement("p", null, error === null || error === void 0 ? void 0 :
                    error.name, error === null || error === void 0 ? void 0 :
                    error.message),
                React.createElement("p", null, errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack)))));
};
exports.ErrorViewWindows10 = ErrorViewWindows10;
