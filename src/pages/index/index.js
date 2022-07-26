Tasks = []
Page({
    data: {
        tasks: [],
        inputTask: ''
    },
    onLoad(query) {},
    onReady() {},
    onShow() {},
    onHide() {},
    onUnload() {},
    deleteTask(e) {
        Tasks.splice(e.currentTarget.dataset.index, 1);
        this.setData({
            tasks: Tasks
        })
    },
    onInput(e) {
        this.inputTask = e.detail.value
    },
    addTask(e) {
        Tasks.push(this.inputTask)
        this.setData({
            tasks: Tasks
        })
    },
});