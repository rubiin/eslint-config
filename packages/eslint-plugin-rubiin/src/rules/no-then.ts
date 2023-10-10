import { createEslintRule } from './utils'

export const RULE_NAME = "no-then";
export type MessageIds = "noThen" | "noCatch";

export type Options = []

export const noThen =  createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer async/await to Promise.then()',
      recommended: 'recommended',
    },
    schema: [],
    messages: {
      noCatch: "Prefer async/await to Promise.catch()",
      noThen: "Prefer async/await to Promise.then()",
    },
  },
  defaultOptions: [],
  create: (context) => {
    return {
      MemberExpression: (node) => {
        if (node.property.type === "Identifier" && node.property.name === "then")
          context.report({ messageId: "noThen", node: node.property });
        else if (node.property.type === "Identifier" && node.property.name === "catch")
          context.report({ messageId: "noCatch", node: node.property });
      },
    };
  },
})
