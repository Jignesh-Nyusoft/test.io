//////////////////
// PROTECT MAIL //
//////////////////
function replaceMailTags() {
  // Get all <mail> elements
  var mailElements = document.getElementsByTagName('mail');

  // Convert NodeList to array to avoid live updating
  mailElements = Array.from(mailElements);

  // Loop through each <mail> element
  mailElements.forEach(function(mailElement) {
      // Save the "to" attribute
      var toAttribute = mailElement.getAttribute('to');

      // Create <a> element
      var aElement = document.createElement('a');

      // Copy all attributes from <mail> to <a>
      for (var j = 0; j < mailElement.attributes.length; j++) {
          var attr = mailElement.attributes[j];
          aElement.setAttribute(attr.name, attr.value);
      }

      // Replace tag name
      aElement.removeAttribute('to');
      aElement.removeAttribute('class');
      aElement.innerHTML = mailElement.innerHTML;
      aElement.href = 'mailto:' + toAttribute + '@netfabric.ai';

      if (aElement.getAttribute('addBody') == "true") {
          aElement.innerHTML = toAttribute + '@netfabric.ai';
      }

      // Replace <mail> with <a>
      mailElement.parentNode.replaceChild(aElement, mailElement);
  });
}

// Call the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', replaceMailTags);

//////////////
// TOOLTIPS //
//////////////
document.addEventListener("DOMContentLoaded", function() {
  // Your code here
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});




$(document).ready(function() {

  const currentYear = new Date().getFullYear();
  $('#year').text(currentYear);

});


Jquery('.client-slider').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  items: 2,
  navText: ["<i class='icon icon-icon-3 '></i>","<i class='icon icon-icon-2 '></i>"],
  responsive : {
      // breakpoint from 0 up
      0 : {
          items: 1,
      },
      // breakpoint from 480 up
      480 : {
          items: 1,
      },
      // breakpoint from 768 up
      768 : {
          items: 2,
      }
  }
})


Jquery('.logo-slider').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: false,
  responsive : {
      // breakpoint from 0 up
      0 : {
          items: 1,
      },
      // breakpoint from 480 up
      480 : {
          items: 2,
      },
      // breakpoint from 768 up
      768 : {
          items: 7,
      }
  }
})