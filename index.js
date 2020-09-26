let title=document.getElementById('title');
let content=document.getElementById('content');
let btn=document.getElementById('post');
let box=document.getElementById('box');
let main=document.getElementById('main');

let posts=[];
if(posts.length==0){
    box.innerHTML='<p>no quotes available add one </p>'
}
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(title.value=="" || content.value==""){
        box.innerHTML=`
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong> You should  enter both fields before adding.</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
        `
        title.value='';
        content.value='';
        
    }
    else{
        let post={
        tk:title.value,
        cont:content.value
        }
        title.value='';
        content.value='';
        Add(post);
    }
})
function Add(post){
    posts.push(post);
    let newquote="";
    posts.forEach((elem,index)=>{
        newquote+=`<div class="jumbotron" id="main">
        <h1 class="display-4">${elem.tk}</h1>
        <hr class="my-4">
        <p class="lead">${elem.cont}</p>
        <button type="button" id=${index} onclick="remove(this.id)" class="btn btn-danger">Delete</button>
        </div>
         `
     })
    box.innerHTML=newquote; 
}
function remove(index){
    posts.splice(index,1)
    if(posts.length==0){
        box.innerHTML='<p>no quotes available add one </p>'
    }
    let newquote="";
    posts.forEach((elem,index)=>{
        newquote+=`<div class="jumbotron" id="main">
        <h1 class="display-4">${elem.tk}</h1>
        <hr class="my-4">
        <p class="lead">${elem.cont}</p>
        <button type="button" id=${index} onclick="remove(this.id)" class="btn btn-danger">Delete</button>
        </div>
         `
     })
    box.innerHTML=newquote; 
    
}

/*function checktitle(){
    let check=[];
            for(let i=0;i<=title.value.length;i++){
                let checker=title.value.charAt(i);
                check.push(checker);
            }
            check.forEach(elem=>{
                if(elem==0 || elem==1 || elem==2 || elem==4 || elem==5 || elem==6 ||elem==7 ||
                    elem==8 || elem==9){
                        box.innerHTML=`
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Holy guacamole!</strong> You should not enter number as your title.
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        `
                        title.value='';
                        content.value='';
                }
        })
}*/