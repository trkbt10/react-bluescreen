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
exports.ErrorViewWindows9x = void 0;
var React = __importStar(require("react"));
var windows9x_module_css_1 = __importDefault(require("./windows9x.module.css"));
var ErrorViewWindows9x = function (_a) {
    var error = _a.error, errorInfo = _a.errorInfo;
    var errorText = React.useMemo(function () {
        return errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack;
    }, [errorInfo]);
    return (React.createElement("div", { className: windows9x_module_css_1["default"].errorViewWindows9x },
        React.createElement("div", { className: windows9x_module_css_1["default"].body },
            React.createElement("h1", { className: windows9x_module_css_1["default"].heading }, "ERROR"),
            React.createElement("p", null, "An error has occureed. To continue:"),
            React.createElement("p", null, "Press Enter to return to Website, or"),
            React.createElement("p", null, "Press Alt+F4 to close this application. If you do this, you will lose any unsaved information in all open applications."),
            React.createElement("p", null,
                "Error: ", error === null || error === void 0 ? void 0 :
                error.name,
                ",", error === null || error === void 0 ? void 0 :
                error.message),
            errorText && React.createElement("p", null, errorText))));
};
exports.ErrorViewWindows9x = ErrorViewWindows9x;
