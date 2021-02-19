$(document).ready(function () {
  // Add custom dropdown functionality
  $('.dropdown').dropdown();

  // Validate all 'required' fields
  var submit_button = document.getElementById("submit_button");

  submit_button.addEventListener("click", function (e) {
    var required = document.querySelectorAll("input[required]");

    required.forEach(function (element) {
      if (element.value.trim() == "") {
        element.classList.add("error");
      } else {
        element.classList.remove("error");
      }
    });
  });

  // Smooth scroll to Patient Information
  $("#btnContactInformation").click(function () {
    event.preventDefault();
    document.querySelector('#patientInformation').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Smooth scroll to Identification Documents
  $("#btnPatientInformation").click(function () {
    event.preventDefault();
    document.querySelector('#identificationDocuments').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Smooth scroll to Emergency Contact
  $("#btnIdentificationDocuments").click(function () {
    event.preventDefault();
    document.querySelector('#emergencyContact').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Smooth scroll to Primary Care Physician
  $("#btnEmergencyContact").click(function () {
    event.preventDefault();
    document.querySelector('#primaryCarePhysician').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Smooth scroll to Guardian Information
  $("#btnPrimaryCarePhysician").click(function () {
    event.preventDefault();
    document.querySelector('#guardianInformation').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Smooth scroll to Current Condition
  $("#btnGuardianInformation").click(function () {
    event.preventDefault();
    document.querySelector('#currentCondition').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // (TODO:Joe) Add logic here to toggle the scroll behavior dependant on whether Additional Questions exists or not.  If not, the #btnCurrentCondition should scroll to #signature instead.

  // Smooth scroll to Additional Questions
  $("#btnCurrentCondition").click(function () {
    event.preventDefault();
    document.querySelector('#additionalQuestions').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // Smooth scroll to Signature
  $("#btnAdditionalQuestions").click(function () {
    event.preventDefault();
    document.querySelector('#signature').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
