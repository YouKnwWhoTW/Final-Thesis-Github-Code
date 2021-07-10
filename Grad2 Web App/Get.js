function init () {
    document.getElementById("EPrescID").value = "";
    document.getElementById("Med").value = "";
    document.getElementById("PatID").value = "";
    document.getElementById("MGS").value = "";
    document.getElementById("Inst").value = "";
    document.getElementById("PDay").value = "";
    document.getElementById("Status").value = "";
    document.getElementById("PDate").value = "";
}
window.onload = init;

$('.u-form-1 form').on('submit',function(e){
    e.preventDefault();
    var MedID=$('#EPrescID').val();
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

                
                             $("#Med").val(Medicine);
                             $("#PatID").val(Patient);
                             $("#MGS").val(Mgs);
                             $("#Inst").val(Instruction);
                             $("#PDay").val(PerDay);
                             $("#Status").val(Status);
                             $("#PDate").val(Date);

                      /*$(document).ready(function(){
                    $("button").click(function(){
                        $.get("http://localhost:3000/api/MedPresc/"+MedID, function(data, status){*/
                            //alert("data"+ " "+ Patient+" "+ PerDay  );
                }
            });
           
            
            });
            