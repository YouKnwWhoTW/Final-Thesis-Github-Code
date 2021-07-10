function init () {
    document.getElementById("PrescID2").value = "";
    document.getElementById("Med2").value = "";
    document.getElementById("PatID2").value = "";
    document.getElementById("MGS2").value = "";
    document.getElementById("Inst2").value = "";
    document.getElementById("PDay2").value = "";
    document.getElementById("Status2").value = "";
    document.getElementById("Date2").value = "";
}
window.onload = init;

function Button()
{
  //var Med = $('#name-44f2').val();
  alert ("Pressed Button");
var MedID=$('#PrescID2').val();
    $.ajax({
    method: 'GET',
  url: 'http://localhost:3000/api/MedPresc/'+MedID,
success: function(data){

var Medicine = data.Medicine;
var Patient = data.patient;
var Mgs = data.mgs;
var Instruction = data.instruction;
var PerDay = data.PerDay;
var Date = data.date;
var Status = data.status;


           $("#Med2").val(Medicine);
           $("#PatID2").val(Patient);
           $("#MGS2").val(Mgs);
           $("#Inst2").val(Instruction);
           $("#PDay2").val(PerDay);
           $("#Status2").val(Status);
           $("#Date2").val(Date);

    /*$(document).ready(function(){
  $("button").click(function(){
      $.get("http://localhost:3000/api/MedPresc/"+MedID, function(data, status){
          //alert("data"+ " "+ Patient+" "+ PerDay  );*/
}
});

}
document.getElementById("Button1").addEventListener("click",Button);
//$('.u-form-1 form').on('submit',function(e){
 // e.preventDefault();
  //alert("button 1 pressed");
// });
