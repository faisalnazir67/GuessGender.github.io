$(document).ready(()=>{

    $("#form1").submit (function(e){

        e.preventDefault();
        const name1 = $("#name2").val();
        console.log(name1)
        sendRequest(name1);
    })

    const sendRequest= (name1)=>{
        
        const url = `https://api.genderize.io?name=${name1}`

        $.get(url,function(response){

     $("#heading").text(response.gender )

        })
    
    }


})

