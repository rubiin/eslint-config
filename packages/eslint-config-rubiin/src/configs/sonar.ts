import { pluginSonarjs } from "../plugins";
import type { FlatConfigItem } from "../types";

export async function sonar(): Promise<FlatConfigItem[]>{

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
