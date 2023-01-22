let data = JSON.parse(localStorage.getItem("data")) || []
let LsData = JSON.parse(localStorage.getItem("cart")) || [];
let api = "./obj_data/object1.json"
async function fetchData(){
      try{
         let res = await fetch(api)
         res = await res.json()  ;      
         localStorage.setItem("data",JSON.stringify(res))
         //console.log(data)
         display(res)

      }catch(err){
           console.log(err)
      }
}
fetchData()

let div = document.getElementById("obj_1");

function display(data){

    data.forEach((ele)=>{

        let card = document.createElement("div");
        let img = document.createElement("img");
        let ctg = document.createElement("h3");      
        let dscr = document.createElement("p");
        let price = document.createElement("h4");
        let rating = document.createElement("h4");
        let btn = document.createElement("button");
        let bkmk = document.createElement("button")

        img.src = ele.imgae;
        ctg.innerText = ele.category;
        dscr.innerText = ele.description;
        price.innerText = ele.price;
        rating.innerText =  ele.rating;
        btn.innerText = "Add to Cart"
        bkmk.innerText = "Bookmark"

        btn.addEventListener("click",()=>{
            if(checkCart(ele)===true){
                alert("You already Added this Product go for Another")
            }else{

                
               LsData.push(ele)
               //console.log(ele)
               localStorage.setItem("cart", JSON.stringify(LsData))
               alert("You Successfully Added in Cart")
            }
            
            })

       
            bkmk.addEventListener("click",()=>{
                let LsData =JSON.parse(localStorage.getItem("cart")) || [];
                   LsData.push(ele)
                   //console.log(ele)
                   localStorage.setItem("cart", JSON.stringify(LsData))
                });
        card.append(img,ctg,dscr,price,rating,btn,bkmk)
        div.append(card)
    })
}
function checkCart(e){
    console.log(LsData)
    for(let i=0; i<LsData.length; i++){
        if(LsData[i].id === e.id){
            return true
        }
        return false
        //console.log(LsData[i])
    }
}


  

