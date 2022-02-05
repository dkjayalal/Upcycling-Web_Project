//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");


window.onload = ()=>{ //once window loarded
    filterItem.onClick = (selectedItem)=>{ //when user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){//if user click the element has.item class
           filterItem.querySelector(".active").classList.remove("active");
        }
         else{
                console.log("false");
            }

        }
    }