import { App } from "vue";
import PButton from "./button/index.vue";
import pRow from "./layout/row.vue";
import pCol from "./layout/col.vue";

export {  PButton, pRow, pCol };

const components = [PButton, pRow, pCol];

// 全局注册主键
export function register(app: App): void {
  for (const component of components) {
    app.component(`p-${component.name}`, component);
  }
}

export default register;

