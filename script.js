
function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    if (p == undefined || p == NaN || p == ""){
        alert("Please enter a principal amount");
        document.getElementById("principal").focus();
        return;
    }else if (p < 0){
        alert("Please enter enter a positive principal number");
        document.getElementById("principal").focus();
        return;
    }
    y = document.getElementById("years").value;
    year = new Date().getFullYear()
    end_year = Number(year) + Number(y);
    money_left = p * r * y;
    
    document.getElementById("money_left").innerHTML = "if you invest $" + p +  "\n at a rate of " + r + "% APY for " + y + " years, you will have $" + money_left + " in the year " + end_year;

    
}

function view_value()
{
    value = document.getElementById("rate").value;
    console.log(value);
    document.getElementById("rate_value").innerHTML = value;
    
}
