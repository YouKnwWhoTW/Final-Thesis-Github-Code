function init () {
    document.getElementById("prescriptionID1").value = "";
    document.getElementById("Med1").value = "";
    document.getElementById("PatID1").value = "";
    document.getElementById("MGS1").value = "";
    document.getElementById("Inst1").value = "";
    document.getElementById("PDay1").value = "";
    document.getElementById("Status1").value = "";
    document.getElementById("PDate1").value = "";
}
window.onload = init;

$('.u-form-4 form').on('submit',function(e){
    e.preventDefault();
        var prescID = $('#prescriptionID1').val();
        var Medicine1 = $('#Med1').val();
        var Patient1 = $('#PatID1').val();
        var Mgs1 = $('#MGS1').val();
        var Instruction1 = $('#Inst1').val();
        var PerDay1 = $('#PDay1').val();
        var Date1 = $('#Status1').val();
        var Status1 = $('#PDate1').val();
       
    
        alert(prescID);
        
        $.ajax({
          method: 'POST',
          url: 'http://localhost:3000/api/MedPresc',
          data:{
            "$class": "org.ehr.basic.MedPresc",
            "medPrescId": prescID,
            "patient": Patient1,
            "Medicine": Medicine1,
            "mgs": Mgs1,
            "PerDay": PerDay1,
            "instruction": Instruction1,
            "status": Status1,
            "date": Date1
          }
           
        
          /*data: {
            "$class": "org.ehr.aspatal.CreateMedicalRecord",
            "patient": "org.ehr.aspatal.Patient#Patient01",
            "doctor": "org.ehr.aspatal.Doctor#Doctor001",
            "diagnosis": diagnosis,
            "notes": notes,
            "therapy": therapy
        }*/
      })
      
});
