
var database = firebase.database().ref("/");
var input = document.getElementById("uInput");

function addTodo(){
    var uVal = input.value;
    
    var todo ={
      userTodo : input.value
    }

    if(uVal < 1)
    {
        alert("You must have write somgthing");
        input.focus();
    }
    else{
        
        database.child("myTodoList").push(todo); 
    }
}
    function dltItem(li,recordId){
             
       database.child('myTodoList').child(recordId).remove();
        li.parentElement.remove();
        
    }
    database.child("myTodoList").on("child_added", function(s){
        var obj = s.val();
        id = s.key;
            // creates li element
            var span = document.createElement("li");
            var liText = document.createTextNode(obj.userTodo);
            span.appendChild(liText);
            document.getElementById('todoList').appendChild(span);

            // //creates a button
            // var upSpan = document.createElement("button");
            // var upTxt = document.createTextNode("update");
            // upSpan.appendChild(upTxt);
            // upSpan.className = "update"; 
            // upSpan.setAttribute('onclick', "update(this,'"+id+"');");    
            // span.appendChild(upSpan);
            
            // creates a button
            var dltBtn = document.createElement("button");
            var txt = document.createTextNode("x");
            dltBtn.appendChild(txt);
            dltBtn.className = "dlt"; 
            dltBtn.setAttribute('onclick', "dltItem(this,'"+id+"');");    
            span.appendChild(dltBtn);
            
                    
    })



            function dltAll(){

                // if(obj.userTodo < 1)
                //     {
                //         alert("There is nothing to delete");
                //         input.focus();
                //     }
                //     else{
                        todoList.innerHTML = null ;
                        database.child('myTodoList').remove()
                        
                        uVal = "";
                    // }
                }


   