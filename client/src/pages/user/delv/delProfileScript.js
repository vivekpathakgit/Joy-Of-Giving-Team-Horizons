
console.log("hello");
let idIndex = 1002;

function getVehNo(address) {
  return 2;
}
const vehNo = getVehNo();
function executePickup(type, locality, address, pickupId) {
  const idd = "p" + idIndex;
  console.log(typeof(idd))
  idIndex += 1;

  document.querySelector(".pickupData").insertAdjacentHTML(
    "afterbegin",
    `<div class="col-md-6 mb-3">
    <div class="card mb-4 mb-md-0">
      <div class="card-body" id="${idd}">
        <p class=" mb-4"><span class="text-primary font-italic me-1">Pickup ${type}</span> Status
        </p>
        <p class="status mb-1" style="font-size: .77rem;">In Progress : 0%</p>
        <div class="progress rounded" style="height: 8px;">
          <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br>
        <hr>
        <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Locality</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">${locality}</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Address</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">${address} </p>
            </div>
        </div>
        <br>
        <div class="mt-4" >
          <div class="row">
            <div class="col-sm-9">
              <div style="display: flex; justify-content: flex-start;"><div  class="outToPick" style="background-color: #3b5998; animation-duration: infinite;"><div  class="oTP"></div></div><div >&emsp;Out For Pickup</div></div>
            </div> 
            <div class="col-sm-2">
            
              <button type="button" class="outTP btn btn-primary" onclick="outTP('${idd}')">Done</button>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-sm-9">
              <div style="display: flex; justify-content: flex-start;"><div  class="picked" style="background-color: #3b5998; animation-duration: infinite;"><div  class="pkd"></div></div><div >&emsp;Pickup Complete</div></div>
            </div> 
            <div class="col-sm-2">
              
              <button type="button" class="pickComp btn btn-primary" onclick="pickComp('${idd}')" >Done</button>
            </div>
          </div>
        </div>
        <br>
        
      </div>
      </div>
    </div>
    `
  );
  
  // document.querySelector("#"+idd).querySelector(".vehNum").innerHTML = "&emsp;Vehical Assigned : "+vehNo;
}
executePickup("Cloth","Khandagiri", "Near Reliance Mart, Kunti Apartment, H-309");
executePickup("Food","Khandagiri", "Near Reliance Mart, Kunti Apartment, H-309");
executePickup("Food","Khandagiri", "Near Reliance Mart, Kunti Apartment, H-309");
executePickup("Food","Khandagiri", "Near Reliance Mart, Kunti Apartment, H-309");


function outTP(id) {
  console.log(id)
  console.log(String(id));
  console.log(typeof(String(id)))

  const master = document.querySelector("#" + String(id));
  const ele = master.querySelector(".outToPick");
  ele.style.animationDuration = "0s";
  ele.style.backgroundColor = "rgb(205, 250, 215)";
  master.querySelector(".oTP").style.backgroundColor = "rgb(19, 253, 144)";
  master.querySelector(".status").innerHTML = "In Progress : 50%";
  master.querySelector(".progress-bar").style.width = "50%";
  master.querySelector(".outTP").disabled = "true";
}

function pickComp(id) {
  outTP( String(id));
  const master = document.querySelector("#" + String(id));
  const ele = master.querySelector(".picked");
  ele.style.animationDuration = "0s";
  ele.style.backgroundColor = "rgb(205, 250, 215)";
  master.querySelector(".pkd").style.backgroundColor = "rgb(19, 253, 144)";
  master.querySelector(".status").innerHTML = "Progress Complete : 100%";
  master.querySelector(".progress-bar").style.width = "100%";
  master.querySelector(".progress-bar").style.backgroundColor = "#198754";
  master.querySelector(".pickComp").disabled = "true";
}
