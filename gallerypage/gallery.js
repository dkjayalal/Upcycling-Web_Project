//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{ //once window loarded
    filterItem.onclick = (selectedItem)=>{ //when user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){//if user click the element has.item class
           filterItem.querySelector(".active").classList.remove("active"); //remove the active class
           selectedItem.target.classList.add("active");
           let filterName = selectedItem.target.getAttribute("data-name");
           filterImg.forEach((image)=>{
               let filterImages = image.getAttribute("data-name");
               if((filterImages==filterName)|| filterName=="all"){
                image.classList.remove("hide");
                image.classList.add("show");
               }
               else{
                image.classList.add("hide");
                image.classList.remove("show");
               }
            });
            }
        }
    }