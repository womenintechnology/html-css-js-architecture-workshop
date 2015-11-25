/*
  var x = {
    key: value,
    anotherKey: otherValue,
    myVal: 3,
    someFunc: function() {
      console.log(this.myVal);
    }
  }
*/

// define global namespace Wit
var Wit = {};

// define newsletter module
Wit.Newsletter = {

  // module initializaion (on DOM ready)
  init: function() {

    console.log('Module Wit Newsletter initialized!');
    $('.newsletter-form').on('submit', $.proxy(this.formOnSubmit, this));

  },

  // handle form submit event
  formOnSubmit: function(event){

    event.preventDefault();

    // var $newsletterForm = $(event.target);
    var $emailField = $('#user-email');
    var userEmail = $emailField.val();

    // email field validation
    if(userEmail === '') {
      return false;
    }

    this.sendAjax(userEmail);

  },

  // submit data via AJAX
  sendAjax: function(email){

    console.log("Submitted email:", email);

    // submit form via ajax
    $.ajax({
      method: 'GET',
      action: '#',
      params: {
        email: email
      }
    })
    .done(function(data){
      console.log('AJAX successful!');
    })
    .fail(function(error){
      console.log('AJAX failed.');
    });

  }

}


jQuery(document).ready(function($) {

  Wit.Newsletter.init();
  // ... other modules initalization;

});
