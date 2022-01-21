import Toast from '../toast/index.vue'
import { createVNode, render } from 'vue'
export function useToast() {
    return function install(options:any){
        const container = document.createElement('div')
        const vm = createVNode(Toast,options)

        document.body.appendChild(container)
        render(vm,container)
    }
}
