

document.getElementById("SEbtn").addEventListener("click", ()=>{

        let search=document.getElementById("search").value;
        
        fetch("http://api.weatherapi.com/v1/current.json?key=fc2ec1424b5e41068c813428242502&q=colombo")
        
        .then(data=>{
           console.log(data);
        }
        )
}) 