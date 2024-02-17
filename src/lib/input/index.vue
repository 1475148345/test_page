<script setup lang="ts">
import { PropType, computed, ref } from "vue";
import { InputSizeType } from "../types/input";
import { PIcon } from "../index";
const props = defineProps({
    size: {
        type: String as PropType<InputSizeType>,
        default: "default", // 'large' | 'default' | 'small'
    },
    placeholder: {
        type: String,
        default: "请输入内容",
    },
    modelValue: {
        type: [String, Number],
    },
    clearable: Boolean,
    showPassword: Boolean,
    type: {
        type: String,
        default: "text", //text、password等
    },
    prefixIcon: String, //前缀图标 slot
    suffixIcon: String, //后缀图标 slot
});

const type = ref(props.type);

const emit = defineEmits(["update:modelValue"]);
const inputValue = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit("update:modelValue", value);
    },
});

const isFocus = ref(false);
const focus = () => {
    isFocus.value = true;
};
const blur = () => {
    isFocus.value = false;
};
const clear = () => {
    inputValue.value = "";
};

const isShowPassword = ref(props.showPassword);
const showPasswordChange = () => {
    isShowPassword.value = !isShowPassword.value;
    if (isShowPassword.value) {
        type.value = "password";
    } else {
        type.value = "text";
    }
};
</script>
<template>
    <div class="p-input p-flex p-flex-ai-center" :class="['p-input--' + props.size, isFocus ? 'is-focus' : '']">
        <!-- 前缀图标 -->
        <div class="">
            <p-icon :name="props.prefixIcon" size="16px" color="#7e8db9" v-if="props.prefixIcon"></p-icon>
            <slot name="prefixIcon" v-else></slot>
        </div>
        <input :type="type" :placeholder="placeholder" class="p-flex-1" v-model="inputValue" @focus="focus" @blur="blur" />
        <!-- 后缀图标 -->
        <div class="">
            <p-icon :name="props.suffixIcon" size="16px" color="#7e8db9" v-if="props.suffixIcon"></p-icon>
            <slot name="suffixIcon" v-else></slot>
        </div>
        <!-- 可清除图标 -->
        <div class="icon-can-click clearable-icon" v-if="props.clearable && inputValue" @click="clear">
            <p-icon name="icon-close-circle" size="16px" color="#c8c9cc"></p-icon>
        </div>
        <!-- 密码图标 -->
        <div class="icon-can-click" v-if="showPassword" @click="showPasswordChange">
            <p-icon name="icon-eye-close" size="16px" color="#7e8db9" v-if="isShowPassword"></p-icon>
            <p-icon name="icon-eye" size="16px" color="#7e8db9" v-else></p-icon>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: "pInput",
};
</script>
<style scoped lang="scss">
//   @import '../style/base.scss';
.p-input--large {
    height: 40px;
    line-height: 40px;
    padding: 1px 15px;
    border-radius: $border-radius-lg;
}
.p-input--default {
    height: 32px;
    line-height: 32px;
    padding: 1px 11px;
    border-radius: $border-radius-md;
}
.p-input--small {
    height: 24px;
    line-height: 24px;
    padding: 1px 7px;
    border-radius: $border-radius-sm;
}
.p-input {
    &.is-focus {
        border-color: $color-primary;
        &:hover {
            border-color: $color-primary;
        }
        .clearable-icon {
            display: block;
        }
    }
    border: 1px solid $border-color;
    &:hover {
        border-color: $gray-5;
        .clearable-icon {
            display: block;
        }
    }
    input {
        width: 100%;
        outline: none;
        border: none;
        &::-webkit-input-placeholder {
            color: $placeholder;
        }
    }
    .icon-can-click {
        cursor: pointer;
        opacity: 0.7;
    }
    .clearable-icon {
        display: none;
    }
}
</style>
