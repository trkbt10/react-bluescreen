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
exports.ErrorView = void 0;
var React = __importStar(require("react"));
var ErrorViewMacOS_1 = require("./ErrorViewMacOS");
var ErrorViewWindows10_1 = require("./ErrorViewWindows10");
var ErrorViewWindows9x_1 = require("./ErrorViewWindows9x");
var ErrorView = function (_a) {
    var error = _a.error, errorInfo = _a.errorInfo, onConfirm = _a.onConfirm, variant = _a.variant;
    React.useEffect(function () {
        var onBlur = function (e) {
            e.key === "Enter" && onConfirm();
        };
        window.addEventListener("keypress", onBlur, { once: true });
    }, []);
    var errorViewType = React.useMemo(function () {
        if (variant) {
            return variant;
        }
        if (window.navigator.userAgent.includes("Windows")) {
            return "windows";
        }
        return "windows9x";
    }, [variant]);
    switch (errorViewType) {
        case "macOS": {
            return React.createElement(ErrorViewMacOS_1.ErrorViewMacOS, { error: error, errorInfo: errorInfo });
        }
        case "windows9x": {
            return React.createElement(ErrorViewWindows9x_1.ErrorViewWindows9x, { error: error, errorInfo: errorInfo });
        }
    }
    return (React.createElement(ErrorViewWindows10_1.ErrorViewWindows10, { error: error, errorInfo: errorInfo }));
};
exports.ErrorView = ErrorView;
exports.ErrorView.displayName = "BlueScreen";
