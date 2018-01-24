console.log('\'Allo \'Allo!');

var formValidator = new window.formUtils.formValidator();

$('button').on('click', function() {
  $('.form-group').each(function() {
    var $input = $(this).find('input');
    if ($input.attr('name') == 'CI' && !formValidator.isEmptyInput($input)) {
      $input.parent().find('.result').html((formValidator.validateCI($input.val(), true)).toString());
    }
    if ($input.attr('name') == 'phone' && !formValidator.isEmptyInput($input)) {
      $input.parent().find('.result').html((formValidator.isValidUruguaianCellPhone($input.val())).toString());
    }
    if ($input.attr('name') == 'age' && !formValidator.isEmptyInput($input)) {
      var $date = $input.parent().find('[name=date]');
      console.log($date);
      $input.parent().find('.result').html((formValidator.isValidBirthdate($input.val(), $date.val())).toString());
    }
    if ($input.attr('name') == 'mail' && !formValidator.isEmptyInput($input)) {
      $input.parent().find('.result').html((formValidator.isValidMail($input.val())).toString());
    }
  })
})
