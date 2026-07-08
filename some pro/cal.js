let clicknumber='';

function appendNumber(number){
if(number==0){
    displaycal(null);
}
else{
    clicknumber+=number;
    displaycal();
}
};
function appendOperator(operator){

}
function displaycal(){
  let  calculation= document.querySelector('.calculator input')
    calculation.value=clicknumber;
}
function deleteall(){
clicknumber=null;
displaycal();
}
function deleteone(){
    clicknumber = clicknumber.slice(0,-1);
    displaycal();
}