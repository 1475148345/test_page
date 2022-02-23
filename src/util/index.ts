import { useToast } from 'pui-vue-pxs/hooks'

export const copyText=(value:string)=>{
    let oInput = document.createElement("input");
    oInput.value = value;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象;

    document.execCommand("Copy"); // 执行浏览器复制命令
    const toast = useToast()
    toast({ message: '复制成功' })
    oInput.remove();
}

export const getImageUrl = (url:string) => {
    const path = `/src/assets/${url}`;
    return new URL(path,import.meta.url).href
}
