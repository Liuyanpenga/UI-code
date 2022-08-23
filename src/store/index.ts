import { createStore } from 'vuex'

export default createStore({
  state:{
    codeVisible:false,
    visible:false,
    visible1:false,
    visible2:false,
    visible3:false,
    visible4:false,
    visible5:false,
    codeVisible1:false,
    codeVisible2:false,
    codeVisible3:false,
    codeVisible4:false,
    codeVisible5:false,
  },
  mutations:{
    updatedCodeVisible(state){
      state.codeVisible = !state.codeVisible
    },
    updatedVisible(state){
      state.visible = !state.visible
    },
    updatedVisible1(state){
      state.visible1 = !state.visible1
    },
    updatedVisible2(state){
      state.visible2 = !state.visible2
    },
    updatedVisible3(state){
      state.visible3 = !state.visible3
    },
    updatedVisible4(state){
      state.visible4 = !state.visible4
    },
    updatedVisible5(state){
      state.visible5 = !state.visible5
    },
    updatedCodeVisible1(state){
      state.codeVisible1 = !state.codeVisible1
    },
    updatedCodeVisible2(state){
      state.codeVisible2 = !state.codeVisible2
    },
    updatedCodeVisible3(state){
      state.codeVisible3 = !state.codeVisible3
    },
    updatedCodeVisible4(state){
      state.codeVisible4 = !state.codeVisible4
    },
    updatedCodeVisible5(state){
      state.codeVisible5 = !state.codeVisible5
    }
  }

})