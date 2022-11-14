// create a search bar 
document.write(`
<section class="hero">
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="search">
        <form action="/" data-toggle="validator" data-focus="false" role="form">
          <div class="form-group has-error has-danger">
            <span><i class="fa fa-times-circle"></i></span>
            <input class="input" id="search_box" value="Search"  onblur="if (this.value == '') {this.value = 'Search';}"  onfocus="if (this.value == 'Search') {this.value = '';}"   type="text" name="q" placeholder="Name or ID only search?" required data-error="Please enter a search term">
            <button type="submit" class="disabled"><i class="fa fa-search"></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</section> 
`);
// search bar end 
// people fake user id create 
for(var j=0; j<=2; j++){document.write(`
    <div class="line1">
        <div class="page">
            <img src="./user.png" alt="">
            <div class="details" id="details">
                <div class="results"></div>
            </div>
            <div class="btn">
                <button type="button" id="open-popup-btn" class="btn btn-success" onclick="detailshow()">See Details</button>
                <button type="button" class="btn btn-danger" onclick="deleteitem()">Delete</button>
            </div>

            <div class="popup-1" id="popup-1">
                <div class="overlay"></div>
                <div class="content">
                    <div class="close-btn" onclick="detailshow()">&times;</div>
                    <h1>Title</h1>
                    <div class="popup"></div>
                </div>
            </div>
        </div>      
    </div>
`);
}
// people fake user id finish
// api fetching and data show in user id
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
    // for(var i=0; i<actualdata.length; i++)
    // {
    //     // console.log(i);
    //     var popup = document.getElementsByClassName("popup")[i];
    //     // console.log(popup[i]);
    //     popup.innerHTML += 
    //         `
    //             <p>ID:${actualdata[i].id}</p>
    //             <p>Name:${actualdata[i].name}</p>
    //             <p>User Name:${actualdata[i].username}</p>
    //             <p>Email:${actualdata[i].email}</p>
    //             <p>Phone:${actualdata[i].phone}</p>
    //             <p>Website:${actualdata[i].website}</p>
    //             <p>Address:-${actualdata[i].address.street}
    //             <p>${actualdata[i].address.suite}</p>
    //             <p>${actualdata[i].address.city}</p>
    //             <p>${actualdata[i].address.zipcode}</p>
    //             <p>${actualdata[i].address.geo.lat}</p>
    //             <p>${actualdata[i].address.geo.lng}</p>
    //             <p>Company:${actualdata[i].company.name}</p>
    //             <p>${actualdata[i].company.catchPhrase}</p>
    //             <p>${actualdata[i].company.bs}</p>
    //         `
    // }
})
.catch((error)=>{
    console.log(error);
})
// api fetching and data show in user id
function detailshow(){
    document.getElementById("popup-1").classList.toggle("active");
    for(var i=0; i<actualdata.length; i++)
    {
        // console.log(i);
        var popup = document.getElementsByClassName("popup")[i];
        // console.log(popup[i]);
        popup.innerHTML += 
            `
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
// search button validation 
// search bar
// if ($(window).width() < 767) {
//     $('.header .header--menubar').on('click', '.header--search', function(e){
//       $('.overlay').toggleClass('open');
//     });
//   } else {
//     $('.header .header--menubar').on('click', '.header--search', function(e){
//       $('.header--search_open').toggleClass('open');
//     });
//   }

//   $(document).mouseup(function (e){
//     var container = $('.header--menubar .header--search'),
//         container2 = $('.header--search_open form');

//     if (!container.is(e.target) && container.has(e.target).length === 0 && !container2.is(e.target)
//         && container2.has(e.target).length === 0)
//     {
//       $('.header--search_open').removeClass('open');
//     }
//   });

//   $('.header--search_open form').on('click', 'span', function() {
//     if ($(this).next().val() == '') {
//       $('.header--search_open').removeClass('open');
//     } else {
//       $(this).next().val('')
//     }
//   })

//   $('.hero .search').on('keyup', 'input', function () {
//     if ($(this).val() != '') {
//       $('.hero .search').addClass('search--active')
//     } else {
//       $('.hero .search').removeClass('search--active')
//     }
//   })

//   $('.hero .search').on('click', 'span', function() {
//     $(this).next().val('')
//     $(this).parents('.search').removeClass('search--active')
//   })
// search button validation 