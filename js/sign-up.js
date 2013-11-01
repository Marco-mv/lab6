//signup.js 
// add your JavaScript code to this file

 
//document ready function
$(function(){
    var stateSelect = $('select[name="state"]');
 	var option;
	var idx;
	var state;

	for(idx = 0; idx < usStates.length; ++idx) {
	    state = usStates[idx];
	    option = $(document.createElement('option'));
	    option.attr('value', state.abbreviation);
	    option.html(state.name);
	    stateSelect.append(option);
	}

	$('.signup-form').submit(function(){

	    var signupForm = $(this);

	    var addr1Input = signupForm.find('input[name="addr-1"]');
   		var addr1Value = addr1Input.val();
   		if (addr1Value.length > 0) {
   			 var zipInput = signupForm.find('input[name="zip"]');
   			 var zipValue = zipInput.val();
   			 if (zipValue && zipValue.trim().length > 0) {
   			 	return true;
   			 } else {
   			 	alert('You need to provide a zip code');
				return false;
   			 }
   		}
	});

	$('.cancel-signup').click(function(){
		$('.cancel-signup-modal').modal();
    }); //cancel-signup click

	$('.btn-abandon').click(function(){
	    window.location = 'http://www.google.com';
	});

	$('select[name="refer"]').change(function(){
	    //get a ref to the refer select
	    //add the refer-other input
	    var referSelect = $(this);
	    var otherInput = $('[name="refer-other"]');

	    //if the refer select's value in lower case is equal to "other"...
	    if ('other' === referSelect.val().toLowerCase()) {
	        //remove the disabled attribute from the
	        //refer-other input, show it, and set focus to it
	        otherInput.removeAttr('disabled');
	        otherInput.show();
	        otherInput.focus()
	    } else {
	        //otherwise, make the refer-other input disabled
	        //and hide it
	        otherInput.attr('disabled', true);
	        otherInput.hide();
	    }
	}); //refer change function

}); //on document ready 