let tbody=document.getElementById("tbody")
    let localdata=JSON.parse(localStorage.getItem("localdata")) || []
    console.log(localdata)
    localdata.map((e,i)=>{
        let tr=document.createElement("tr")
        let th=document.createElement("th")
        th.innerText=i+1
        let td1=document.createElement("td")
        td1.innerHTML=e.name
        let td2=document.createElement("td")
        td2.innerHTML=e.email
        let td3=document.createElement("td")
        td3.innerHTML=e.age
        let td4=document.createElement("td")
        td4.innerHTML=e.phone
        let td5=document.createElement("td")
        td5.innerHTML=e.adhaar
        let td6=document.createElement("td")
        td6.innerHTML=e.address
        let td7=document.createElement("td")
        td7.innerHTML=e.date
        tr.append(th,td1,td2,td3,td4,td5,td6,td7)
        tbody.append(tr)
    })