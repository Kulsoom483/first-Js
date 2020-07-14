var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
n1="\r\n"
today = mm+'-'+dd+'-'+yyy+n1;
document.write(today);
today = mm+'/'+dd+'/'+yyy+n1;
document.write(today);
today = dd+'-'+mm+'-'+yyy;
document.write(today);
today = dd+'/'+mm+'/'+yyy;
document.write(today);