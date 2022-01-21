/**
 * @fileoverview jsx字符串需使用多语言转化
 * @author
 */
"use strict";
const path = require("path");
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "vite中限制使用process",
      category: "Fill me in",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    const {
      parserServices,
      options: [{ markupOnly: _markupOnly, ignore = [] } = {}],
      getFilename,
    } = context;

    const message =
      "不允许在vite中使用process变量\n如需使用环境变量请从utils引入";

    function isString(node) {
      return typeof node.value === "string";
    }

    const { esTreeNodeToTSNodeMap, program } = parserServices;
    let typeChecker;
    if (program && esTreeNodeToTSNodeMap)
      typeChecker = program.getTypeChecker();

    const scriptVisitor = {
      //
      // ─── JSX ─────────────────────────────────────────────────────────
      //

      Identifier(node) {
        if (node.name === "process" && getFilename().indexOf("src/") !== -1) {
          context.report({ node, message });
        }
      },
    };

    return scriptVisitor;
  },
};
