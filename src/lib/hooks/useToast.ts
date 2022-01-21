import { PToast  } from '../index'
import { ToastType  } from '../types'
import { createVNode, render } from 'vue'
let _container: HTMLElement | null
export function useToast() {
    return function install(options:ToastType){

        if(_container) document.body.removeChild(_container)
        // _container = document.getElementById('pToast')
        _container = document.createElement('div')
        _container.setAttribute('id','pToast')

        const vm = createVNode(PToast,options)
        document.body.appendChild(_container)
        render(vm,_container)

    }
}
