const store = new Vuex.Store({
    state:{
      loading: false,
      todoList : [
        {id:1,name:'11'},
        {id:2,name:'22'},
        {id:3,name:'33'},
      ],
      num: 0,
    },
    mutations:{
      setNumIs5(state){
        state.num = 5
      },
      setNumIsWhat(state,payload){
        state.num = payload.num
      }
    },
    actions:{   //<----- 增加actions属性
      setNum(content){  //<----- 增加setNum方法，默认第一个参数是content，其值是复制的一份store
        return new Promise((resolve)=>{  //<----- 返回一个promise，我们模拟一个异步操作，1秒后修改num为5
          setTimeout(()=>{
            content.commit('setNumIs5')
            resolve()
          },1000)
        })
      }
    }
  })