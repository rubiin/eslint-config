import { pluginSonarjs } from "../plugins";
import type { FlatESLintConfigItem } from "../types";

export function sonar(): FlatESLintConfigItem[] {


  return [
    {
      name: "rubiin:sonar",
      plugins: {
        "sonarjs": pluginSonarjs ,
      },
      rules: {
       ...pluginSonarjs.configs.recommended
      },
    },
  ];
}
