let api = "./obj_data/object1.json"
async function fetchData(){
      try{
         let res = await fetch(api)
         res = await res.json()
         console.log(res)
         display(res)
      }catch(err){
           console.log(err)
      }
}
fetchData()

let div = document.getElementById("obj_1");

function display(data){

    data.forEach((ele,ind)=>{

        let card = document.createElement("div");
        let img = document.createElement("img");
        let ctg = document.createElement("h3");      
        let dscr = document.createElement("p");
        let price = document.createElement("p");
        let rating = document.createElement("p");
        let btn = document.createElement("button");
        let bkmk = document.createElement("button")

        img.src = ele.imgae;
        ctg.innerText = ele.category;
        dscr.innerText = ele.description;
        price.innerText = ele.price;
        rating.innerText =  ele.rating;
        btn.innerText = "Add to Cart"
        bkmk.innerText = "Bookmark"



        card.append(img,ctg,dscr,price,rating,btn,bkmk)
        div.append(card)
    })
}


  

