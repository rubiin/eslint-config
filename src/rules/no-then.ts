import { TSESLint} from '@typescript-eslint/utils';

export const RULE_NAME = "no-then";
export type MessageIds = "noThen" | "noCatch";

const myRule: TSESLint.RuleModule<MessageIds> = {
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    messages: {
      noCatch: "Prefer async/await to Promise.catch()",
      noThen: "Prefer async/await to Promise.then()",
    },
    fixable: 'code',
    schema: [], // no options
  },
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
}

export default myRule
