
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
    function createpost(posts){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                post.push(posts);
                const error = false;
                if(error){
                    reject("error:somthing went wrong");
                }else{
                    resolve();
                }
            },2000);
        });
       
    }
    createpost({title:'post three',body:'this is post three'})
    .then(getpost)
    .catch(err=>console.log(err));