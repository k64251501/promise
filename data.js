let employees=[{id:101, name:"karthik", email:"karthik@gmail.com", gender:"male"}, {id:102, name:"rishi", email:"rishi@gmail.com", gender:"male"}]

let createEmployee=(emp)=>{
    return new promise ((resolve, reject)=>{
        setTimeout(()=>{
      let flag =true
      if (flag){
        resolve("Data instant successfully")
        employees.push(emp)
      }else{
        reject("not intrested")
      }
        },[1000])
    })
}
let getEmployee=()=>{
  console.log("test case 123")
   var rows="";
   setTimeout(()=>{
        employees.map((employee)=>{
            rows= rows+`<tr>
              <tb>${employee.id}</tb>
              <tb>${employee.name}</tb>
              <tb>${employee.email}</tb>
              <tb>${employee.gender}</tb>
            </tr>`
        });
       document.getElementById("kathik").innerHTML=rows
   },[1000])
}
createEmployee=({id:103, name:"vickybabu", emali:"vivky@gmail.com", gender:"male"})
// .then((msg)=>{
//      console.log(msg);
//      getEmployee()
// }).cacth((err)=>{
//     console.log(err)
// })