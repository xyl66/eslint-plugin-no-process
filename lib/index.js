/**
 * @fileoverview 多语言校验
 * @author Xkk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
//
var requireIndex = require("requireindex");
const output = {
  rules: requireIndex(__dirname + "/rules"), // 导出所有规则
};

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = output;
