import { PMessage  } from '../index'
import { ToastType  } from '../types'
import { createVNode, render } from 'vue'
const messagesAction:any = {
    items:new Map(),
    add:function(id:number,el:HTMLDivElement){
        this.items.set('pMessage' + id,el);
        let myReq:number,start = (this.items.size-1)*60;
        const thisEl:any = el.children[0].children[0]
        const _this=this
        function step() {
            start+=3;
            thisEl.style.top = start + "px";
            if (start < (_this.items.size<2? 20 : _this.items.size*60 - 40)) {
                myReq = requestAnimationFrame(step);
            }else{
                window.cancelAnimationFrame(myReq);
            }
        }
        myReq = requestAnimationFrame(step);
    },
    remove:function(id:number,el:HTMLDivElement){
        //移除动画
        let myReq:number,start = 60;
        const thisEl:any = el.children[0].children[0]
        const _this=this
        function step() {
            start-=5;
            thisEl.style.top = start + "px";
            if (start > -60) {
                myReq = requestAnimationFrame(step);
            }else{
                window.cancelAnimationFrame(myReq);
                document.body.removeChild(el)
                let mId = 'pMessage' + id
                _this.items.delete(mId)
                _this.resetPostion()
            }
        }
        myReq = requestAnimationFrame(step);
    },
    resetPostion:function(){
        for (const [,item] of this.items) {
            let top = item.children[0].children[0].style.top.split('px')[0]
            item.children[0].children[0].style.top = top - 60 + 'px'
        }
    }
}
let _vm=0;
export function useMessage() {
    return function install(options:ToastType){
        const _container = document.createElement('div')
        const vm = createVNode(PMessage,options)
        document.body.appendChild(_container)
        render(vm,_container);

        _vm++;
        (function(_vm){
            messagesAction.add(_vm,_container)
            let _timer = '_timer' + _vm as unknown as  number
            _timer = setTimeout(() => {
                messagesAction.remove(_vm,_container)
                clearTimeout(_timer)
            }, options.duration || 2000);
        })(_vm)
    }
}
