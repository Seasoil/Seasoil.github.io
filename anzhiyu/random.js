var posts=["2025/01/16/C或C++/1.基本数据处理/","2025/01/15/新领域指南/博客以及对应操作/","2024/12/14/note/11.30-12.7note/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };