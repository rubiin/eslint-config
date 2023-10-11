import { pluginSonarjs } from "../plugins";
import type { ConfigItem } from "../types";

export function sonar(): ConfigItem[] {


  return [
    {
      name: "rubiin:sonar",
      plugins: {
        "sonarjs": pluginSonarjs ,
      },
      rules: {
       ...pluginSonarjs.configs.recommended.rules,
      },
    },
  ];
}
