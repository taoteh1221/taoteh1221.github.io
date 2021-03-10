


/////////////////////////////////////////////////////////////


function addCSSClassRecursively(topElement, CssClass) {

$(topElement).addClass(CssClass);

    $(topElement).children().each(
            function() {
                 $(this).addClass(CssClass);
                 addCSSClassRecursively($(this), CssClass);
            });
            
}



/////////////////////////////////////////////////////////////




function copy_text(elm_id, alert_id) {
	
  elm = document.getElementById(elm_id);

  // for Internet Explorer
  if(document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
	 document.getElementById(alert_id).innerHTML = 'Copied to clipboard.';
  }
  // other browsers
  else if(window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
	 document.getElementById(alert_id).innerHTML = 'Copied to clipboard.';
  }
  
}


/////////////////////////////////////////////////////////////

