// const address = 'sample'; //will be imported from form page.
// console.log('hello')
// let idIndex = 1002;
// let a = 'railway station'
// console.log(a=='railway station')
// function getVehNo(locality){
//     if(locality=='khandagiri'|| locality=='dumduma'){
//       return 1;
//     }
//     else if(locality=='nayapalli'|| locality=='railway station'){
//       return 2;
//     }
//     else if(locality=='sahid nagar'){
//       return 3;
//     }
//     return 0;
// }
// const vehNo = getVehNo();
// function createPickup(locality, type){
//     const vehical = getVehNo(locality);
//     const idd = "p" + idIndex;
//     idIndex += 1;
//     document.querySelector(".pickupData").insertAdjacentHTML("afterbegin",
//     `<div class="col-md-6 mb-3">
//     <div class="card mb-4 mb-md-0">
//       <div class="card-body" id="${idd}">
//         <p class=" mb-4"><span class="text-primary font-italic me-1">Donate ${type}</span> Pickup Status
//         </p>
//         <p class="status mb-1" style="font-size: .77rem;">In Progress : 25%</p>
//         <div class="progress rounded" style="height: 8px;">
//           <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="80"
//             aria-valuemin="0" aria-valuemax="100"></div>
//         </div>
//         <div class="mt-4" >
//           <div style="display: flex; justify-content: flex-start;"><div  class="proIni" ><div  class="pI"></div></div><div >&emsp;Process Initiated</div></div>
//           <div style="display: flex; justify-content: flex-start;"><div  class="vehAsign" style=" animation-duration: infinite;"><div  class="vA"></div></div><div class="vehNum">&emsp;Vehical Assigned : ${vehical}</div></div>
//           <div style="display: flex; justify-content: flex-start;"><div  class="outToPick" style=" animation-duration: infinite;"><div  class="oTP"></div></div><div >&emsp;Out For Pickup</div></div>
//           <div style="display: flex; justify-content: flex-start;"><div  class="picked" style=" animation-duration: infinite;"><div  class="pkd"></div></div><div >&emsp;Pickup Complete</div></div>
//         </div>
//         <br>
//         <div style="font-size: small;"><span class="bonus">Bonus Points : </span><span class="text-primary me-1" style="font-weight: bold;">100</span></div>
//       </div>
//       </div>
//     </div>`
//     );
//     if(vehical!=0) vehAsigned(idd);

// }
// createPickup('khandagiri', 'Cloth');
// createPickup('nayapalli', 'Food');
// createPickup('railway station', 'Food');
// createPickup('khandagiri', 'Food');
// function vehAsigned (id){
//     const master = document.querySelector("#"+id)
//     const ele = master.querySelector(".vehAsign");
//     ele.style.animationDuration = "0s";
//     ele.style.backgroundColor = "rgb(205, 250, 215)";
//     master.querySelector(".vA").style.backgroundColor = "rgb(19, 253, 144)";
//     master.querySelector(".status").innerHTML = "In Progress : 50%";
//     master.querySelector(".progress-bar").style.width = "50%";
// }
// vehAsigned("p1002");
// picked("p1004")
// function outToPick (id){
//     vehAsigned(id);
//     const master = document.querySelector("#"+id)
//     const ele = master.querySelector(".outToPick");
//     ele.style.animationDuration = "0s";
//     ele.style.backgroundColor = "rgb(205, 250, 215)";
//     master.querySelector(".oTP").style.backgroundColor = "rgb(19, 253, 144)";
//     master.querySelector(".status").innerHTML = "In Progress : 75%";
//     master.querySelector(".progress-bar").style.width = "75%";

// }

// function picked (id){
//     vehAsigned(id);
//     outToPick(id);
//     const master = document.querySelector("#"+id)
//     const ele = master.querySelector(".picked");
//     ele.style.animationDuration = "0s";
//     ele.style.backgroundColor = "rgb(205, 250, 215)";
//     master.querySelector(".pkd").style.backgroundColor = "rgb(19, 253, 144)";
//     master.querySelector(".status").innerHTML = "Progress Complete : 100%";
//     master.querySelector(".progress-bar").style.width = "100%";
//     master.querySelector(".progress-bar").style.backgroundColor = "#198754";
//     master.querySelector(".bonus").innerHTML = "Bonus Credited : ";
// }
