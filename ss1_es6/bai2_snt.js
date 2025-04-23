const snt = (a) => {
    let dem=0;
    for(let i= 2;i< a;i++){
        if(a%i===0){
            dem++;
        }
    }
    if(dem===0){
        console.log(a+" là snt")
    }else {
        console.log(a+" không phải snt")
    }
};

const arr = [1,3,5,12,18,19,77];
arr.forEach((value,index)=>
    {
        snt(value);
    }
)