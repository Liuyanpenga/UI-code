<template>
  <h1>button示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <br>
  <h1>button示例2</h1>
  <div>
    <Button size="small">小小小</Button>
    <Button >普普通通</Button>
    <Button size="big">大大大</Button>
  </div>
  <br>
<div>
  <h1>button示例3</h1>
  <div>
    <Button>普通按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="warning">警告按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <br>
  <div>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link" level="warning">警告链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <br>
  <div>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text" level="warning">警告文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
</div>
<br>
<div>
  <h1>button示例4</h1>
  <Button loading>加载中按钮</Button>
  <Button >加载完毕</Button>
</div>
<br>
<div>
  <h1>button示例5</h1>
  <Button :disabled="false">正常按钮</Button>
  <Button disabled>禁用按钮</Button>
  <Button disabled theme="link" >禁用链接按钮</Button>
  <Button disabled theme="text" >禁用文字按钮</Button>
</div>
<br>
<div>
  <p>
    下一节：<router-link to="/doc/dialog"><strong>Dialog 组件</strong> </router-link>
  </p>
</div>
</template>

<script>
import Button from '../lib/Button.vue'
export default({
  name:'ButtonTest',
  components:{Button},
})
</script>