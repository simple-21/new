const Userdata=[
    {id:1,name:"sefina",age:25,gender:"female",hasPassedOut: true,Occupation:undefined},
    {id:2,name:"jalan",age:25,gender:"male",hasPassedOut: false,Occupation:undefined},
    {id:3,name:"nirpa",age:23,gender:"male",hasPassedOut: true,Occupation:"intern"},
    {id:4,name:"gaurav",age:100000,gender:"male",hasPassedOut: false,Occupation:"animater"},
    {id:5,name:"ishwor",age:20,gender:"undefined",hasPassedOut: true,Occupation:"be god"},
    {id:6,name:"safalta",age:20,gender:"female",hasPassedOut: false,Occupation:undefined },
    {id:7,name:"bimal",age:23,gender:"male",hasPassedOut: true,Occupation:"SSWE"},
]
const response={
    status:200,
    message:"data fetched successfully",
    data:Userdata
}
const getUsername=()=>{
    const APIStatus=response.status;
    if(APIStatus===200){
    //  const result=response.data.map((user)=>user.name);
        const result=response.data
        .filter((user)=>user.Occupation)
        .map((user)=>user.name);
        return result;
        
    }else{
    }

}

console.log (getUsername());