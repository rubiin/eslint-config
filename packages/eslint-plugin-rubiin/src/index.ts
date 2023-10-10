import type { ESLint, Linter } from 'eslint'
import { version } from '../package.json'
import {noThen} from "./rules/no-then"

const plugin = {
  meta: {
    name: 'rubiin',
    version,
  },
  rules: {
    "no-then": noThen
  },
} satisfies ESLint.Plugin

export default plugin

type RuleDefintions = typeof plugin['rules']

export type RuleOptions = {
  [K in keyof RuleDefintions]: RuleDefintions[K]['defaultOptions']
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}
