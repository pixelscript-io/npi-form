$(document).ready(function () {
  // ***
  // Fetch Parameters
  // ***

  // Grab the 'pId' parameter from a URL
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

  // List of Additional Questions
  const questionsJSON = 'json/questions.json';


  // ***
  // Customize HTML Input Functionality
  // ***

  // Add custom dropdown functionality
  $('.dropdown').dropdown();

  // Add custom checkbox functionality
  $('.checkbox').checkbox();

  // Add custom modal functionality
  // Display the modal if the pId is not found
  if (pId === null || pId.length <= 0) {
    modalState = 'show';

    $('.ui.modal').modal({
      closable: false,
    }).modal(modalState);
  }


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

  // Populate Additional Questions Content
  conditionDropdown.empty();

  $.getJSON(questionsJSON, function (data) {
    const parentDiv = document.getElementById('additionalQuestionsContent');

    // Build the HTML sctructure of the dropdown box for each Additional Question
    $.each(data, function (key, entry) {
      const fieldsDiv = document.createElement('div');
      fieldsDiv.setAttribute('class', 'fields');

      const requiredFieldDiv = document.createElement('div');
      requiredFieldDiv.setAttribute('class', 'required field');

      const label = document.createElement('label');
      const labelContent = document.createTextNode(entry.label);

      const dropdownDiv = document.createElement('div');
      dropdownDiv.setAttribute('class', 'ui selection dropdown requiredDropdown');

      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('id', entry.id);
      input.setAttribute('name', entry.label);

      const icon = document.createElement('i');
      icon.setAttribute('class', 'dropdown icon');

      const defaultDiv = document.createElement('div');
      defaultDiv.setAttribute('class', 'default text');
      const placeholderContent = document.createTextNode(entry.placeholder);

      const menuDiv = document.createElement('div');
      menuDiv.setAttribute('class', 'menu');

      parentDiv.appendChild(fieldsDiv);
      fieldsDiv.appendChild(requiredFieldDiv);
      requiredFieldDiv.appendChild(label);
      label.appendChild(labelContent);
      requiredFieldDiv.appendChild(dropdownDiv);
      dropdownDiv.appendChild(input);
      dropdownDiv.appendChild(icon);
      dropdownDiv.appendChild(defaultDiv);
      defaultDiv.appendChild(placeholderContent);
      dropdownDiv.appendChild(menuDiv);

      // Necessary re-initialization of the dropdown functionality
      $('.dropdown').dropdown();

      // Populate the dropdown boxes with the available options
      $.each(entry.answers, function (key, entry) {
        const itemDiv = document.createElement('div');
        itemDiv.setAttribute('class', 'item');
        itemDiv.setAttribute('data-value', entry.value);

        const itemContent = document.createTextNode(entry.name);

        menuDiv.appendChild(itemDiv);
        itemDiv.appendChild(itemContent);
      });
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
