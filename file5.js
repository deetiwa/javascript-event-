const my_fun = () =>{
    alert("This is form...");
}
const change_color = () =>
{
    document.getElementById("field").style.backgroundColor = "#e2e2e2";
}
const update_text = () =>
{
    let data = document.getElementById('field').value;
    document.getElementById("heading").innerHTML = data;
}