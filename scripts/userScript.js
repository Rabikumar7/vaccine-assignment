let formdata=JSON.parse(localStorage.getItem("localdata"))||[]
    let form=document.getElementById("form")
    form.addEventListener("submit",function(){
        // event.preventDefault()
        let name=document.getElementById("name").value
        let email=document.getElementById("email").value
        let age=document.getElementById("age").value
        let phone=document.getElementById("phone").value
        let adhaar=document.getElementById("adhaar").value
        let date=document.getElementById("date").value
        let address=document.getElementById("address").value
        let obj={
            name,
            email,
             age,
            phone,
            adhaar,
            date,
            address
        }
        console.log(obj)
        formdata.push(obj)
        localStorage.setItem("localdata",JSON.stringify(formdata))
        alert("Resistration Successful")
        form

         
    })