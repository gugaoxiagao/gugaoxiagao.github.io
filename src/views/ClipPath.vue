<template>
  <div class="container">
    <a
      href="https://www.cnblogs.com/moqiutao/p/10547330.html"
    >使用CSS3的clip-path(裁剪路径)实现剪贴区域的显示以及实例实现图片渐变</a>
    <div class="file-border">111</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: rgb(23, 53, 122);
  height: 100%;
  color: white;
  .file-border {
    margin-left: 20px;
    height: 300px;
    width: 300px;
    border: rgb(44, 205, 211) 5px solid;
    background-color: rgb(255, 255, 255);
    clip-path:polygon(0 0, 100% 0, 100% 95%, 20% 95% , 15% 100%,0 100%);
  }
}
a {
  color: rgb(255, 255, 255);
  &:hover {
    color: rgb(197, 249, 255);
  }
}
</style>

