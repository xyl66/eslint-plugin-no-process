/**
 * @fileoverview jsx字符串需使用多语言转化
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/jsx-no-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("jsx-no-literal", rule, {

    valid: [

        // give me some code that won't trigger a warning
        {
          code: 'var someNumber = 1000; setTimeout(()=>{ console.log(11) },someNumber);'
      },
    ],

    invalid: [
      {
        code: 'setTimeout(()=>{ console.log(11) },1000)',
        errors: [{
            message: "setTimeout第二个参数禁止是数字", // 与rule抛出的错误保持一致
            type: "CallExpression" // rule监听的对应钩子
        }]
    },
    ]
});
