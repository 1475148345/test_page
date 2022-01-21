import { PMessage  } from '../index'
import { ToastType  } from '../types'
import { createVNode, render } from 'vue'
let _container: HTMLElement | null
export function useMessage() {
    return function install(options:ToastType){

        if(_container) document.body.removeChild(_container)
        // _container = document.getElementById('pMessage')
        _container = document.createElement('div')
        _container.setAttribute('id','pMessage')

        const vm = createVNode(PMessage,options)
        document.body.appendChild(_container)
        render(vm,_container)

    }
}
