var posts=["2024/12/14/note/11.30-12.7note/","2025/01/15/新领域指南/博客以及对应操作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };