// nav
module.exports = [
  { text: '首页', link: '/' },    
  {
    text:'📓笔记', 
    link: '/note',
    items:[
      {
        text: '🧐我正在学:',
        items:[
          {text:'<JavaWeb>笔记', link:'/note/javaweb/'},
          {text:'<操作系统>笔记', link:'/note/osnote/'}
        ]
      }
    ]
    
  }
]
