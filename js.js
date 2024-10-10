const sch=document.getElementById("sch-container"),
    inf=document.getElementById("info-container"),
    mark1 = document.getElementById("mark1");
const d=new Date();
let num_id=0;
/*console.log(fetch("https://portal.ncu.edu.tw/openid/user"))
.then(res => console.log(res))*/
const course = [0,1,1,1,0,2,2,3,3,3,0,0,0,0 ,0,4,0,0,0,5,5,10,10,10,0,0,0,0 ,0,0,2,2,6,7,11,11,0,0,0,0,0,0 ,0,5,4,4,0,0,0,0,0,0,4,0,0,0 ,8,8,7,7,6,0,9,9,9,0,0,0,0,0];
const index1 = [null,"化","微","圖","英","程","服","中","體","廠","通1","通2"];
const index2 = ["系館129","系館129","系館129","教研大樓001","教研大樓001","系館101","系館101","系館101","教研大樓A202","系館308","系館308","志希館202","志希館202","志希館202","教研大樓001","教研大樓001","系館101","實驗室153","綜教209","綜教209","系館128","工程二137","工程二137","教研A003","依仁YH1","依仁YH1","實驗室153","實驗室153","系館101","其他","其他","其他"]
for(let j=0;j<5;j++){ //chemisty, calculus, graphmaking, eng,5 programming, service, chinese, PE, factory
    for(let i=0;i<14;i++){
        let tblock= document.createElement("div");
        tblock.classList+="blocks";
        tblock.style.left=j*190 + "px";
        tblock.style.top=i*190 + 0*645 + "px";
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
        tblock.addEventListener("mouseover",function(){
            //this.style.backgroundColor = "black";
            if(this.innerText!=""){
                this.innerText=index2[this.id];
                 tblock.style.fontSize="36px";
            }
            
        })
        tblock.innerText=index1[course[i+14*j]];
        if(course[i+14*j]!=0){
            tblock.id=num_id;
            num_id++;
        }
        //tblock.innerText = 1+i+5*j;
        sch.appendChild(tblock);
    }
}
function update(){
    let dayNow = d.getDay();
    let hoursNow = d.getHours();
    let tIndex = (dayNow-1)*14 + hoursNow-8;
    if(dayNow==0){
        inf.innerText = "是週日呢";
    }
    else if(dayNow==0){
        inf.innerText = "是週六呢";
    }
    else if(hoursNow<=7&&hoursNow>=4){
        inf.innerText="還早呢";
    }
    else if(hoursNow>=22||hoursNow<4){
        inf.innerText="多晚了";
    }
    else{
        mark1.style.display="block";
        mark1.style.left = (dayNow-1)*190 + 14 + "px";
        mark1.style.top = ((hoursNow-8)*190) + (d.getMinutes()*3.16667) + 712 + "px";
        console.log(dayNow);
        if(course[tIndex]==0){
            while(course[tIndex+1]==0){
                if([tIndex+1]%14==0){
                    break;
                }
                tIndex++;
            }
            if((tIndex+1)%14==0){
                inf.innerText="今天上完了呢"
            }
            else{
                inf.innerText=((tIndex%14)+9) + "點有課";
            }
        }
        else {
            inf.innerText = "授業中";
        }
    }
}
setInterval(60000,update());
update();
