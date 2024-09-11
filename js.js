const sch=document.getElementById("sch-container");
const course = [0,1,1,1,0,2,2,3,3,3,0,0,0,0 ,0,4,0,0,0,5,5,10,10,10,0,0,0,0 ,0,0,2,2,6,7,11,11,0,0,0,0,0,0 ,0,5,4,4,0,0,0,0,0,0,4,0,0,0 ,8,8,7,7,6,0,9,9,9,0,0,0,0,0];
const index1 = [null,"化","微","圖","英","程","服","中","體","廠","通1","通2"];
for(let j=0;j<5;j++){ //chemisty, calculus, graphmaking, eng,5 programming, service, chinese, PE, factory
    for(let i=0;i<14;i++){
        let tblock= document.createElement("div");
        tblock.classList+="blocks";
        tblock.style.left=j*190 + "px";
        tblock.style.top=i*190 + 645 + "px";
        tblock.id=i+14*j;
        if(i==0){
            tblock.style.backgroundColor="rgb(45,0,195)";
            tblock.style.color="yellow";
        }
        if(i==4){
            tblock.style.backgroundColor="rgb(255,87,87)";
        }
        if(i>=10){
            tblock.style.backgroundColor="rgb(255,230,153)";
            tblock.style.color="rgb(150,0,0)";
        }
        tblock.innerText=index1[course[i+14*j]];
        //tblock.innerText = 1+i+5*j;
        sch.appendChild(tblock);
    }
}
