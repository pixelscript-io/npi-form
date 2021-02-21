$(document).ready(function () {
  // ***
  // Fetch Parameters
  // ***

  // Grab the 'pId' parameter
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pId = urlParams.get('pId');


  // ***
  // JSON Files
  // ***

  // List of States
  const stateJSON = 'json/states.json';

  // List of Conditions
  const conditionJSON = 'json/conditions.json';


  // ***
  // Customize HTML Input Functionality
  // ***

  // Add custom dropdown functionality
  $('.dropdown').dropdown();

  // Add custom checkbox functionality
  $('.checkbox').checkbox();


  // ***
  // Signature Box
  // ***

  // Add custom signature box functionality
  $('.js-signature').jqSignature();

  // Clear the signature box canvas
  $("#btnClearSignature").click(function () {
    event.preventDefault();
    $('.js-signature').jqSignature('clearCanvas');
  });

  // Store the signature as a base64 image on form submit
  $("#btnSubmit").click(function () {
    var signature64 = $('.js-signature').jqSignature('getDataURL');
    // (TODO:Joe) Remove this for production
    console.log(signature64);
  });


  // ***
  // Form Validation
  // ***

  // Validate fields on form submit
  var submitButton = document.getElementById("btnSubmit");

  submitButton.addEventListener("click", function (e) {
    var required = document.querySelectorAll("input[required]");
    var requiredDropdown = document.querySelectorAll(".requiredDropdown");
    var requiredTextarea = document.querySelectorAll(".requiredTextarea");

    // Validate all required text inputs
    required.forEach(function (element) {
      if (element.value.trim() == "") {
        element.classList.add("error");
      } else {
        element.classList.remove("error");
      }
    });

    // Validate all required dropdowns
    requiredDropdown.forEach(function (element) {
      if (element.getElementsByClassName("default").length > 0) {
        element.classList.add("error");
      } else {
        element.classList.remove("error");
      }
    });

    // Validate all required textareas
    requiredTextarea.forEach(function (element) {
      if (element.value.length == 0) {
        element.classList.add("error");
      } else {
        element.classList.remove("error");
      }
    });
  });


  // ***
  // Populate Dropdowns
  // ***

  // Populate State Dropdowns
  let stateDropdown = $('.stateDropdown');

  stateDropdown.empty();
  stateDropdown.prop('selectedIndex', 0);

  $.getJSON(stateJSON, function (data) {
    $.each(data, function (key, entry) {
      stateDropdown.append($('<div class="item" data-value=""></div>').attr('data-value', entry.abbreviation).text(entry.name));
    });
  });

  // Populate Qualifying Conditions Dropdown
  let conditionDropdown = $('#conditionDropdown');

  conditionDropdown.empty();
  conditionDropdown.prop('selectedIndex', 0);

  $.getJSON(conditionJSON, function (data) {
    $.each(data, function (key, entry) {
      conditionDropdown.append($('<div class="item" data-value=""></div>').attr('data-value', entry.value).text(entry.name));
    });
  });


  // ***
  // Smooth Scrolling
  // ***

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
