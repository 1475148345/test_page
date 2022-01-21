import { App } from "vue";
import PButton from "./button/index.vue";
import PRow from "./layout/row.vue";
import PCol from "./layout/col.vue";
import PLoading from "./loading/index.vue";
import PIcon from "./icon/index.vue";
import PImage from "./image/index.vue";
export {
  PButton,
  PRow,
  PCol,
  PLoading,
  PIcon,
  PImage
}

// 全局注册主键
type compType={
    [propName:string]:any
}
const COMP:compType = {
  PButton, PRow, PCol, PLoading, PIcon,PImage
}
export function register(app: App): void {
  for (const key in COMP) {
    app.component(`p-${key}`, COMP[key]);
  }
}

export default register;

