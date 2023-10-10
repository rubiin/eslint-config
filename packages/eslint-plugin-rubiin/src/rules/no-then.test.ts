import { RuleTester } from "@typescript-eslint/rule-tester";

import noThen from "./no-then";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
});

ruleTester.run("no-then", noThen, {
  invalid: [
    {
      code: "(function() { read().then(data => console.log(data)) })()",
      errors: [
        {
          messageId: "noThen",

        },
      ],
      parserOptions: { ecmaVersion: 2017 },
    },
  ],
  valid: [
    {
      code: "(async function() { const data = await read(); console.log(data) })()",
      parserOptions: { ecmaVersion: 2017 },
    },
    {
      code: "(async function() { try { await read() } catch(error) { console.error(error) } })()",
      parserOptions: { ecmaVersion: 2017 },
    },
  ],
});
