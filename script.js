function add()
{
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output = Number(a) + Number(b)
    document.getElementsByClassName("Result")[0].innerText = `The addition of two number is ${output}`
}
function sub()
{
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output = Number(a) - Number(b)
    document.getElementsByClassName("Result")[0].innerText = `The subraction of two number is ${output}`
}
function mul()
{
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output = Number(a) * Number(b)
    document.getElementsByClassName("Result")[0].innerText = `The multiplication of two number is ${output}`
}
function div()
{
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output = Number(a) / Number(b)
    document.getElementsByClassName("Result")[0].innerText = `The division of two number is ${output}`
}
function rem()
{
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output = Number(a) % Number(b)
    document.getElementsByClassName("Result")[0].innerText = `The reminder of two number is ${output}`
}
function ct()
{
    document.getElementById("time").innerHTML = Date()
}
let x = prompt("enter your name")
let y = prompt("age")
alert('Your ready to use calculator')