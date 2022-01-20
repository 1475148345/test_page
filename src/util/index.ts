
export const copyText=(value:string)=>{
    let oInput = document.createElement("input");
      oInput.value = value;
      document.body.appendChild(oInput);

      oInput.select(); // 选择对象;

      document.execCommand("Copy"); // 执行浏览器复制命令
    //   this.$message({
    //     message: "复制成功",
    //     type: "success",
    //   });
      oInput.remove();
}
