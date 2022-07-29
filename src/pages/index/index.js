Page({
  data: {
    tasks: [],
    inputTask: "",
    keyList: "todolist-yang"
  },
  onLoad(query) {
    my.getStorage({
      key: this.data.keyList,
      success: (res) => {
        this.setData({
          tasks: res.data.tasks
        });
      }
    });
  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  deleteTask(e) {
    this.data.tasks.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      tasks: this.data.tasks
    })
    my.setStorage({
      key: this.data.keyList,
      data: {
        tasks: this.data.tasks
      }
    })
  },
  onInput(e) {
    this.data.inputTask = e.detail.value;
  },
  addTask(e) {
    if (this.data.inputTask==="") return;
    this.data.tasks = this.data.tasks || [];
    this.data.tasks.push({
      task: this.data.inputTask,
      completed: false
    })
    this.setData({
      tasks: this.data.tasks
    })
    my.setStorage({
      key: this.data.keyList,
      data: {
        tasks: this.data.tasks
      }
    })
  },
  completedTask(e) {
    this.data.tasks[e.currentTarget.dataset.index].completed = !this.data.tasks[e.currentTarget.dataset.index].completed
    this.setData({
      tasks: this.data.tasks
    })
    my.setStorage({
      key: this.data.keyList,
      data: {
        tasks: this.data.tasks
      }
    })
    console.log(this.data.tasks[e.currentTarget.dataset.index])
  }
});
