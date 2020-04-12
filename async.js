const post =[
    {title:"post one",body:"this is post one"},
    {title:"post two",body:"this is post two"}
    ];
    function getpost(){
       setTimeout(()=>{
           let output='';
           post.forEach((post,index)=>{
          output+='<li>${post.title}</li>';
           });
           document.body.innerHTML=output;
       },2000);
    }
    function createpost(posts,callback){
        setTimeout(()=>{
            post.push(posts);
            callback();
        },2000);
    }
    createpost({title:'post three',body:'this is post three'},getpost);