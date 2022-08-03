import queryString from 'query-string';

Page({
  data: {
    inputText: "",
    empty: false,
    index: undefined,
    keyList: undefined
  },
	onLoad(query) {
    const params = queryString.parse(query)
    console.log(params)
    my.getStorage({
      key: params.keyList,
      success: (res) => {
        this.setData({
          inputText: res.data.tasks[Number(params.index)].task,
          index: Number(params.index),
          keyList: params.keyList
        })
      }
    })
	},
	onReady() {
	},
	onShow() {
	},
	onHide() {
	},
	onUnload() {
	},
  onInput(e) {
    this.data.inputTask = e.detail.value;
    this.setData({
      empty: this.data.inputTask===""
    })
  },
  returnHome(e) {
    my.navigateBack()
  },
  editTask(e) {
    my.getStorage({
      key: this.data.keyList,
      success: (res) => {
        const tasks = res.data.tasks
        tasks[this.data.index].task=this.data.inputTask
        my.setStorage({
          key:this.data.keyList,
          data: {
            tasks: tasks
          },
          success: () => {
            console.log(tasks)
            my.redirectTo({url: "pages/index/index"})
          }
        })
      }
    })
  }
});