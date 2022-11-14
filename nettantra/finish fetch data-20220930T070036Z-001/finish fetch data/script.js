fetch('https://jsonplaceholder.typicode.com/users')
.then((apidata)=>{
    // console.log(apidata);
    return apidata.json(); 
})
.then((actualdata)=>{
    for(var i=0; i<actualdata.length; i++){
        var results = document.getElementsByClassName("results")[i];
        results.innerHTML += `<p>${actualdata[i].name}</p><p>${actualdata[i].email}</p>`
        
    }
    for(var i=0; i<actualdata.length; i++){
        var popup = document.getElementsByClassName("popup")[i];
        popup.innerHTML += `
        <p>ID:${actualdata[i].id}</p>
        <p>Name:${actualdata[i].name}</p>
        <p>User Name:${actualdata[i].username}</p>
        <p>Email:${actualdata[i].email}</p>
        <p>Phone:${actualdata[i].phone}</p>
        <p>Website:${actualdata[i].website}</p>
        <p>Address:-${actualdata[i].address.street}
        <p>${actualdata[i].address.suite}</p>
        <p>${actualdata[i].address.city}</p>
        <p>${actualdata[i].address.zipcode}</p>
        <p>${actualdata[i].address.geo.lat}</p>
        <p>${actualdata[i].address.geo.lng}</p>
        <p>Company:${actualdata[i].company.name}</p>
        <p>${actualdata[i].company.catchPhrase}</p>
        <p>${actualdata[i].company.bs}</p>
        `
        
    }
})
.catch((error)=>{
    console.log(error);
})

function detailshow(){
    document.getElementById("popup-1").classList.toggle("active");
  }
    // var openPopupBtn = document.querySelector("#open-popup-btn");
    // var closePopupBtn = document.querySelector(".close-popup-btn");
    

    // openPopupBtn.addEventListener("click",function(){
    //     document.body.classList.add("popup-active");
    // });
    // closePopupBtn.addEventListener("click",function(){
    //     document.body.classList.remove("popup-active");
    // });
    // function detailshow(){
    //     if(openPopupBtn!=none){
            
    //     }else{

    //     }
        
    // }

/*Run sucessfully */
/*started working btn */







































// function getData(){
//     url = "https://jsonplaceholder.typicode.com/users";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getData()

/*
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    // console.log(json);
    let str="";
    let dt = document.getElementById("details").value;
    const markup = json.map(el => {
        // for (var j = 0; j < json.length; j++){

        // }
        // console.log(json[0]);
        
        str = `
            <p class="details">
                <div class="showdata">
                    <p>Name:${el.name}</p><br>
                </div>
                <div class="user-email">
                    <p>Email:${el.email}</p><br>
                </div>
                <div>

                </div>
            </p>

        `
        dt.innerHTML=str;
    });

    console.log(markup);
    document.querySelector('.showdata').innerHTML = markup.join('');
  
})

*/
/*  
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    console.log(json);
    const markup = json.map(el => {
        return `
        
        <li class="card-container">
             <div class="name-container"> 
                 <p>ID:${el.id}</p><br>
                 <p>Name:${el.name}</p><br>
                 <p>User Name:${el.username}</p><br>
                 <p>Email:${el.email}</p><br>
                 <p>Phone:${el.phone}</p><br>
                 <p>Website:${el.website}</p><br>
                 <p>Address:-${el.address.street}</p>
                 <p>${el.address.suite}</p>
                 <p>${el.address.city}</p>
                 <p>${el.address.zipcode}</p>
                 <p>${el.address.geo.lat}</p>
                 <p>${el.address.geo.lng}</p><br>
                 <p>Company:${el.company.name}</p>
                 <p>${el.company.catchPhrase}</p>
                 <p>${el.company.bs}</p>
                
             </div> <br>
            </li>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
}) */
