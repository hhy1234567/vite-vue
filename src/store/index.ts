import { defineStore } from 'pinia'
import { Names } from './store_name'



export const useStore = defineStore(Names.STORENAME, {
  // other options...
  state: () => {
    return {
      token: 'asdkfadlkjlkjaljkdl2a1sd4fasldkf',
      name: 'pinia',

    }
  },
  getters: {

  },
  actions: {
    setToken() {
      this.token = 'asdfasdf'
    }
  }
})

// 修改pinia.state里的值
//1引入这个然后只用例如test.token='asdfasdfasdf'
//2test.$patch({token:'asdfasdfasdf',name:'asdfasdf'})
//3test.$patch((state)=>{state.token='2132432424.4'})
//4
//
