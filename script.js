var tbody = document.getElementById("tbody") 
function createtablerow()
{
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var td5 = document.createElement("td")
    var td6 = document.createElement("td")
    var td7 = document.createElement("td")
    var td8 = document.createElement("td")
    var fname = document.getElementById("fname").value 
    var lname = document.getElementById("lname").value 
    var address = document.getElementById("address").value 
    var pincode = document.getElementById("pincode").value 
    var gender = document.getElementById("gender").value 
    var food = document.getElementById("food").value 
    var state = document.getElementById("state").value 
    var country = document.getElementById("country").value
    td1.innerHTML = fname
    td2.innerHTML = lname
    td3.innerHTML = address
    td4.innerHTML = pincode
    td5.innerHTML = gender
    td6.innerHTML = food
    td7.innerHTML = state
    td8.innerHTML = country
    console.log(td1,td2,td3,td4,td5,td6,td7,td8)
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    tbody.append(tr)
}
