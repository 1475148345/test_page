import { App } from "vue";
// export * from './hooks'
// export * from './types'
// import "./style/base.scss";
import PButton from "./button/index.vue";
import PRow from "./layout/row.vue";
import PCol from "./layout/col.vue";
import PLoading from "./loading/index.vue";
import PIcon from "./icon/index.vue";
import PImage from "./image/index.vue";
import PToast from "./toast/index.vue";
import PMessage from "./message/index.vue";
import PProgress from "./progress/index.vue";
import PDialog from "./dialog/index.vue";
import PTag from "./tag/index.vue";
import PTooltip from "./tooltip/index.vue";
import PPopover from "./popover/index.vue";
import PInput from "./input/index.vue";
import PSelect from "./select/index.vue";
const version = "1.1.9";
export { PButton, PRow, PCol, PLoading, PIcon, PImage, PToast, PMessage, PProgress, PDialog, PTag, PTooltip, PPopover, PInput, PSelect, version };

// 全局注册主键
type compType = {
    [propName: string]: any;
};
const COMP: compType = {
    PButton,
    PRow,
    PCol,
    PLoading,
    PIcon,
    PImage,
    PToast,
    PMessage,
    PProgress,
    PDialog,
    PTag,
    PTooltip,
    PPopover,
    PInput,
    PSelect,
};
export function install(app: App): void {
    for (const key in COMP) {
        app.component(`p-${key}`, COMP[key]);
    }
}

export default install;
