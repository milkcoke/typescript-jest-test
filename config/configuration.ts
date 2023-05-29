import {readFileSync} from 'fs'
import {join} from 'path'
import * as yaml from 'js-yaml'

const YAML_CONFIG_FILENAME = 'default.yaml'

function loadYamlConfig(): Record<string, any> {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8')
  )
}
export default loadYamlConfig
