<script setup lang="ts">
import { PropType, computed, nextTick, ref } from "vue";
import { InputSizeType, SelectItemType } from "../types/input";
import { PIcon } from "../index";
import { vClickOutside } from "../hooks/index";
type baseType = String | Number | Boolean;
type modelValueType = baseType | Object | Array<baseType>;
const props = defineProps({
    size: {
        type: String as PropType<InputSizeType>,
        default: "default",
    },
    placeholder: {
        type: String,
        default: "请选择",
    },
    modelValue: {
        type: [String, Number, Boolean, Object, Array] as PropType<modelValueType>,
        required: true,
        default: "",
    },
    clearable: Boolean,
    multiple: Boolean,
    filterable: Boolean,
    option: {
        type: Array<SelectItemType>,
        default: () => {
            return [
                {
                    label: "选项一",
                    value: "1",
                },
                {
                    label: "选项二",
                    value: "2",
                },
                {
                    label: "选项三",
                    value: "3",
                },
            ];
        },
    },
});

const emit = defineEmits(["update:modelValue"]);
const inputValue = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});
const filterableValue = ref("");
const isFilterable = ref(false);
const selectOption = computed(() => {
    if (props.filterable && filterableValue.value.length) {
        return props.option.filter((item) => item.label.indexOf(filterableValue.value) > -1);
    }
    return props.option;
});
const inputLabel = computed({
    get() {
        if (!inputValue.value || props.option.length < 1) {
            return "";
        }
        const _inputValue = inputValue.value;
        if (["boolean", "string", "number"].includes(typeof _inputValue)) {
            const item = props.option.find((item) => item.value === _inputValue);
            if (item) {
                item.checked = true;
                return item.label;
            } else {
                return _inputValue;
            }
        }

        if (props.multiple && Array.isArray(_inputValue)) {
            resetChecked();
            const labels: Array<SelectItemType> = [];
            _inputValue.forEach((_item) => {
                const item = props.option.find((item) => item.value === _item);
                if (item) {
                    item.checked = true;
                    labels.push(item);
                }
            });
            return labels;
        }
    },
    set(value) {
        console.log(value);
    },
});
const removeSelected = (item: SelectItemType) => {
    inputValue.value = (inputValue.value as []).filter((_item: baseType) => _item !== item.value) as Array<baseType>;
};
const resetChecked = () => {
    props.option.map((item) => (item.checked = false));
};
const clear = () => {
    resetChecked();
    inputValue.value = "";
};
const inputRef = ref();
const isFocus = ref(false);
const optionDialog = ref(false);
const selectClick = () => {
    optionDialog.value = !optionDialog.value;
    if (props.filterable) {
        isFilterable.value = true;
        filterableValue.value = "";
        nextTick(() => {
            isFocus.value ? inputRef.value.blur() : inputRef.value.focus();
            isFocus.value = !isFocus.value;
        });
    }
};
const closeOption = () => {
    optionDialog.value = false;
    isFocus.value = false;
    isFilterable.value = false;
};
const selectItem = (item: SelectItemType) => {
    if (item.disabled) return;
    if (!props.multiple) {
        inputValue.value = item.value;
        resetChecked();
        item.checked = true;
        closeOption();
    } else {
        item.checked = !item.checked;
        if (Array.isArray(inputValue.value)) {
            if (item.checked) {
                inputValue.value.push(item.value);
            } else {
                inputValue.value = inputValue.value.filter((_item) => _item !== item.value);
            }
        }
    }
};
</script>
<template>
    <div class="p-select p-flex p-flex-ai-center" :class="['p-select--' + props.size, optionDialog ? 'option-is-open' : '']" v-click-outside="closeOption" @click="selectClick">
        <div
            class="select p-flex-1 p-flex"
            :class="{
                'not-selected': !inputLabel,
            }"
        >
            <template v-if="props.multiple && Array.isArray(inputLabel)">
                <span v-if="inputLabel.length < 1" class="not-selected">{{ placeholder }}</span>
                <div v-for="(item, index) in inputLabel" :key="index" class="multiple-item">
                    <span>{{ item.label }}</span>
                    <p-icon name="icon-close" size="16px" color="#888" class="remove" @click.stop="removeSelected(item)"></p-icon>
                </div>
            </template>
            <input v-else-if="props.filterable && isFilterable" v-model="filterableValue" :placeholder="(isFocus && String(inputLabel)) || placeholder" ref="inputRef" class="input" />
            <template v-else>
                {{ inputLabel || placeholder }}
            </template>
        </div>
        <!-- 可清除图标 -->
        <div class="clearable-icon" v-if="props.clearable && !props.multiple && inputLabel && !optionDialog" @click.stop="clear">
            <p-icon name="icon-close-circle" size="16px" color="#c8c9cc"></p-icon>
        </div>
        <p-icon name="icon-right" size="16px" color="#7e8db9" class="arrow"></p-icon>
        <ul class="option" v-if="optionDialog">
            <li class="option-item" :class="{ checked: item.checked, disabled: item.disabled }" v-for="(item, index) in selectOption" :key="index" @click.stop="selectItem(item)">{{ item.label }}</li>
            <li v-if="selectOption.length < 1" class="no-data">暂无数据</li>
        </ul>
    </div>
</template>
<script lang="ts">
export default {
    name: "pSelect",
};
</script>
<style scoped lang="scss">
@import "../style/base.scss";
.p-select--large {
    min-height: 40px;
    line-height: 40px;
    padding: 1px 15px;
    border-radius: $border-radius-lg;
    .p-option {
        border-radius: $border-radius-lg;
    }
}
.p-select--default {
    min-height: 32px;
    line-height: 32px;
    padding: 1px 11px;
    border-radius: $border-radius-md;
    .p-option {
        border-radius: $border-radius-md;
    }
    .no-data {
        color: $gray-7;
        text-align: center;
    }
}
.p-select--small {
    min-height: 24px;
    line-height: 24px;
    padding: 1px 7px;
    border-radius: $border-radius-sm;
    .p-option {
        border-radius: $border-radius-sm;
    }
}

.p-select {
    width: 200px;
    position: relative;
    border: 1px solid $border-color;
    cursor: pointer;
    user-select: none;
    color: $gray-8;
    .select {
        .multiple-item {
            display: block;
            padding: 3px 6px;
            border-radius: $border-radius-sm;
            background-color: $gray-3;
            color: $gray-7;
            margin: 5px 5px 5px 0;
            &:hover {
                .remove {
                    background-color: $gray-6;
                    border-radius: 50%;
                    color: #fff !important;
                }
            }
        }
        .input {
            width: 100%;
            border: none;
            outline: none;
            color: $gray-8;
            &::-webkit-input-placeholder {
                color: $placeholder;
            }
        }
    }
    .option {
        position: absolute;
        top: calc(100% + 10px);
        min-width: 200px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 2px 10px 0 $border-color;
        padding: 10px 0;
        z-index: 2;
        background-color: #fff;
        &::before {
            content: "";
            position: absolute;
            top: -6px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-bottom: 6px solid #fff;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
        }
        .option-item {
            padding: 10px;
            &.checked {
                color: $color-primary;
                font-weight: bold;
            }
            &:not(.disabled):hover {
                background-color: rgba($color-primary, 0.1);
            }
            &.disabled {
                cursor: not-allowed;
                color: $gray-6;
            }
        }
    }
    .not-selected {
        color: $placeholder;
    }

    .arrow {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        transform: rotate(90deg);
    }

    &.option-is-open {
        border-color: $color-primary;
        &:hover {
            border-color: $color-primary;
        }
        .clearable-icon {
            display: block;
        }
        .arrow {
            transform: rotate(270deg);
        }
    }
    &:hover {
        border-color: $gray-5;
        .clearable-icon {
            display: block;
            & ~ .arrow {
                display: none;
            }
        }
    }

    .clearable-icon {
        display: none;
    }
}
</style>
