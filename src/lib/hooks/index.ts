import Toast from '../toast/index.vue'
import { createVNode, render } from 'vue'
let _container: HTMLElement | null
export function useToast() {
    return function install(options:any){
        if(_container) document.body.removeChild(_container)
        _container = document.getElementById('pToast')
        _container = document.createElement('div')
        _container.setAttribute('id','pToast')

        const vm = createVNode(Toast,options)

        document.body.appendChild(_container)
        render(vm,_container)

    }
}
