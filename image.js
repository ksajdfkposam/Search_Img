let inp= document.getElementById("inp");
let btn= document.getElementById("btn");
let imgD= document.getElementById("imgDiv");
let last_b= document.getElementById("last_b");;


let page=1;

inp.addEventListener("change",(e)=>{

  e.preventDefault();
  
  console.log(e.target.value,"billa")
  })




async function inpField(city){
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${city}&client_id=SBmCpdYhrrvd7pXe4yYIFe5E4TD-IShC_VZ5CpIeKuE&per_page=12`;

  const res= await fetch(url);
  const data= await res.json()
 const arr=data.results;
  //console.log(arr);

  for(let i=0;i<arr.length;i++){




const img = document.createElement("img");

  img.src=arr[i].urls.small;
img.classList.add("img_1")

imgD.appendChild(img)



  }
  last_b.style.visibility="visible"




}





















btn.addEventListener("click",(e)=>{

e.preventDefault();


page=1;

    inpField(inp.value);
})




last_b.addEventListener("click",()=>{

    page++;
    
    
    console.log("hi")
    inpField(inp.value);
// inpField(inp.value);
    })




   


