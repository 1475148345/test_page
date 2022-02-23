
import { reactive, nextTick } from 'vue'
export type dragType = {
    isActive:boolean,
    x:number,
    y:number,
    el:HTMLElement|null,
}
export function useDrag(el:string) {
    const moveData:dragType = reactive({
        isActive:false,
        x:0,
        y:0,
        el:null,
    })

    const methodsMap = {
        mousedown:(e:MouseEvent)=>{
            moveData.isActive = true
            // moveData.el = document.getElementById(id)
            if(moveData.el){
                let mt = moveData.el.style.marginTop || '0px'
                let ml = moveData.el.style.marginLeft || '0px'
                const {clientX,clientY} = e
                moveData.x = clientX - Number(ml.split('px')[0])
                moveData.y = clientY - Number(mt.split('px')[0])
            }
        },
        mouseup:()=>{
            moveData.isActive = false
        },
        mouseleave:()=>{
            moveData.isActive = false
        },
        mousemove:(e:MouseEvent)=>{
            if(moveData.isActive){
                const {clientX,clientY} = e
                const {x,y} = moveData
                if(moveData.el){
                    moveData.el.style.marginLeft = (clientX - x) + 'px'
                    moveData.el.style.marginTop = (clientY - y) + 'px'
                }
            }
        },
        init:()=>{
            const els: any = document.body.querySelectorAll(el)
            moveData.el = els[els.length-1]
            if(moveData.el){
                moveData.el.addEventListener('mousedown',methodsMap.mousedown)
                moveData.el.addEventListener('mouseup',methodsMap.mouseup)
                moveData.el.addEventListener('mouseleave',methodsMap.mouseleave)
                moveData.el.addEventListener('mousemove',methodsMap.mousemove)
            }
        },
        remove:()=>{
            if(moveData.el){
                moveData.el.removeEventListener('mousedown',methodsMap.mousedown)
                moveData.el.removeEventListener('mouseup',methodsMap.mouseup)
                moveData.el.removeEventListener('mouseleave',methodsMap.mouseleave)
                moveData.el.removeEventListener('mousemove',methodsMap.mousemove)
            }
        }
    }

    nextTick(()=>{
        methodsMap.init()
    })

    return {...moveData,remove:methodsMap.remove}
}
