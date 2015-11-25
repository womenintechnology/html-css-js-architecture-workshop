;(function($, window, document) {

  $(document).ready(function() {
    Wit.Newsletter.init();
  });

  /*
    var x = {
      key: value,
      anotherKey: otherValue
    }
  */

  var Wit = {};

  // Wit module
  Wit.Newsletter = {

    // called on intialization (document ready)
    init: function() {

      var $button = $('.js-button-submit');
      $button.on('click', $.proxy(this.submitNewsletter, this));

    },

    // Handle button on click
    submitNewsletter: function(event) {

      event.preventDefault();

      // get reference to button
      var $button = $(event.target);

      // prevent multiple form submissions
      if ($button.hasClass('is-loading')) {
        return false;
      }

      // email validation
      var $emailField = $("#user-email");
      if ($emailField.val() === '') {
        return false;
      }

      var $newsletterForm = $('.js-newsletter-form');

      // submit data via AJAX
      this.sendAjaxForm({
        url: $newsletterForm.prop('action'),
        data: {
          email: $emailField.val()
        }
      });

      $button.addClass('is-loading');

    },

    // execute AJAX request
    sendAjaxForm: function(params) {

      $.ajax({
        url: params.url,
        method: 'GET',
        data: params.data
      }).done(function(data){
        console.log('Ajax successfull');
      }).fail(function(error){
        console.log('Ajax failed');
      });

    }

  };

}(window.jQuery, window, document));
