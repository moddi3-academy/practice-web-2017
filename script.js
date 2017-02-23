var app = new Vue({
  el: '#app',
  data: {
    parts: [
      {
        name: "HTML",
        href: "collapseOne",
        tasks: [
          {name: "Task 01", href: "HTML/task_01/index.html"},
          {name: "Task 02", href: "HTML/task_02/index.html"},
          {name: "Task 03", href: "HTML/task_03/index.html"},
          {name: "Task 04", href: "HTML/task_04/index.html"},
          {name: "Task 05", href: "HTML/task_05/index.html"},
          {name: "Task 06", href: "HTML/task_06/index.html"},
          {name: "Task 07", href: "HTML/task_07/index.html"},
          {name: "Task 08", href: "HTML/task_08/index.html"}
        ]
      },
      {
        name: "CSS",
        href: "collapseTwo",
        tasks: [
          {name: "Task 01", href: "CSS/task_01/index.html"},
        ]
      },
      {
        name: "JS",
        href: "collapseThree",
        tasks: [

        ]
      },
    ]
  }
})
