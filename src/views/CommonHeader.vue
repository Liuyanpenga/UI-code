<template>
  <div v-if="showModal" class="mask" @click="onClickOverLay"></div>
  <div class="header">
    <button v-if="$route.name !='home'"
      class="hide"
      size="small"
      @click="openAside"
    >
      <svg class="icon">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </button>
    <div class="logo">
    <router-link to="/">
      <svg class="icon">
        <use xlink:href="#icon-sun"></use>
      </svg>
      </router-link>
    </div>
    <div class="menu"><router-link to="/doc/introduce">文档</router-link></div>
  </div>
</template>
<script lang="ts">
import { ref, inject, Ref } from "vue";
import { useRoute } from "vue-router";

export default({
  setup() {
  const route = useRoute()
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    // console.log(asideVisible.value);
    const openAside = () => {
      asideVisible.value = !asideVisible.value;
      showModal.value = !showModal.value
    };
    const showModal = ref(false)
    const onClickOverLay = () => {
        openAside();
    };
    return { openAside,showModal,onClickOverLay };
  },
});
</script>

<style lang="scss" scoped>
.mask {
  background-color: rgb(0, 0, 0);
  opacity: 0.3;
  position: fixed;
  top: 77.4px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 190
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #007974;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  background: rgb(160,166,213); 
  background: linear-gradient(145deg, rgba(160,166,213,1) 0%, rgba(207,217,205,1) 100%);
  padding: 20px;
  &>button{
    border: none;
  }

}
svg.icon {
    height: 32px;
    width: 32px;
}
.hide {
  position: absolute;
  display: none;
  background: none;
  &>svg{
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }
}
.logo>.router-link-active>svg{
  width: 40px;
  height: 40px;
}
@media (max-width: 500px) {
  .menu {
    display: none;
  }
  .logo {
    margin: 0 auto;
  }
  .hide {
    display: inline-block;
  }
}
</style>>