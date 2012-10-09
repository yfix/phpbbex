/**
* phpBB3 forum functions
*/

/**
* Window popup
*/
function popup(url, width, height, name)
{
	if (!name)
	{
		name = '_popup';
	}

	window.open(url.replace(/&amp;/g, '&'), name, 'height=' + height + ',resizable=yes,scrollbars=yes, width=' + width);
	return false;
}

/**
* Jump to page
*/
function jumpto()
{
	var page = prompt(jump_page, on_page);

	if (page !== null && !isNaN(page) && page == Math.floor(page) && page > 0)
	{
		if (base_url.indexOf('?') == -1)
		{
			document.location.href = base_url + '?start=' + ((page - 1) * per_page);
		}
		else
		{
			document.location.href = base_url.replace(/&amp;/g, '&') + '&start=' + ((page - 1) * per_page);
		}
	}
}

/**
* Mark/unmark checklist
* id = ID of parent container, name = name prefix, state = state [true/false]
*/
function marklist(id, name, state)
{
	var parent = document.getElementById(id);
	if (!parent)
	{
		eval('parent = document.' + id);
	}

	if (!parent)
	{
		return;
	}

	var rb = parent.getElementsByTagName('input');
	
	for (var r = 0; r < rb.length; r++)
	{	
		if (rb[r].name.substr(0, name.length) == name)
		{
			rb[r].checked = state;
		}
	}
}

/**
* Resize viewable area for attached image or topic review panel (possibly others to come)
* e = element
*/
function viewableArea(e, itself)
{
	if (!e) return;
	if (!itself)
	{
		e = e.parentNode;
	}
	
	if (!e.vaHeight)
	{
		// Store viewable area height before changing style to auto
		e.vaHeight = e.offsetHeight;
		e.vaMaxHeight = e.style.maxHeight;
		e.style.height = 'auto';
		e.style.maxHeight = 'none';
		e.style.overflow = 'visible';
	}
	else
	{
		// Restore viewable area height to the default
		e.style.height = e.vaHeight + 'px';
		e.style.overflow = 'auto';
		e.style.maxHeight = e.vaMaxHeight;
		e.vaHeight = false;
	}
}

/**
* Set display of page element
* s[-1,0,1] = hide,toggle display,show
* type = string: inline, block, inline-block or other CSS "display" type
*/
function dE(n, s, type)
{
	if (!type)
	{
		type = 'block';
	}

	var e = document.getElementById(n);
	if (!s)
	{
		s = (e.style.display == '' || e.style.display == type) ? -1 : 1;
	}
	e.style.display = (s == 1) ? type : 'none';
}

/**
* Alternate display of subPanels
*/
function subPanels(p)
{
	var i, e, t;

	if (typeof(p) == 'string')
	{
		show_panel = p;
	}

	for (i = 0; i < panels.length; i++)
	{
		e = document.getElementById(panels[i]);
		t = document.getElementById(panels[i] + '-tab');

		if (e)
		{
			if (panels[i] == show_panel)
			{
				e.style.display = 'block';
				if (t)
				{
					t.className = 'activetab';
				}
			}
			else
			{
				e.style.display = 'none';
				if (t)
				{
					t.className = '';
				}
			}
		}
	}
}

/**
* Call print preview
*/
function printPage()
{
	if (is_ie)
	{
		printPreview();
	}
	else
	{
		window.print();
	}
}

/**
* Show/hide groups of blocks
* c = CSS style name
* e = checkbox element
* t = toggle dispay state (used to show 'grip-show' image in the profile block when hiding the profiles) 
*/
function displayBlocks(c, e, t)
{
	var s = (e.checked == true) ?  1 : -1;

	if (t)
	{
		s *= -1;
	}

	var divs = document.getElementsByTagName("DIV");

	for (var d = 0; d < divs.length; d++)
	{
		if (divs[d].className.indexOf(c) == 0)
		{
			divs[d].style.display = (s == 1) ? 'none' : 'block';
		}
	}
}

function selectCode(a)
{
	// Get ID of code block
	var e = a.parentNode.parentNode.getElementsByTagName('CODE')[0];

	// Not IE and IE9+
	if (window.getSelection)
	{
		var s = window.getSelection();
		// Safari
		if (s.setBaseAndExtent)
		{
			s.setBaseAndExtent(e, 0, e, e.innerText.length - 1);
		}
		// Firefox and Opera
		else
		{
			// workaround for bug # 42885
			if (window.opera && e.innerHTML.substring(e.innerHTML.length - 4) == '<BR>')
			{
				e.innerHTML = e.innerHTML + '&nbsp;';
			}

			var r = document.createRange();
			r.setStart(e.firstChild, 0);
			r.setEnd(e.lastChild, e.lastChild.textContent.length);
			s.removeAllRanges();
			s.addRange(r);
		}
	}
	// Some older browsers
	else if (document.getSelection)
	{
		var s = document.getSelection();
		var r = document.createRange();
		r.selectNodeContents(e);
		s.removeAllRanges();
		s.addRange(r);
	}
	// IE
	else if (document.selection)
	{
		var r = document.body.createTextRange();
		r.moveToElementText(e);
		r.select();
	}
}

/**
* Play quicktime file by determining it's width/height
* from the displayed rectangle area
*/
function play_qt_file(obj)
{
	var rectangle = obj.GetRectangle();

	if (rectangle)
	{
		rectangle = rectangle.split(',');
		var x1 = parseInt(rectangle[0]);
		var x2 = parseInt(rectangle[2]);
		var y1 = parseInt(rectangle[1]);
		var y2 = parseInt(rectangle[3]);

		var width = (x1 < 0) ? (x1 * -1) + x2 : x2 - x1;
		var height = (y1 < 0) ? (y1 * -1) + y2 : y2 - y1;
	}
	else
	{
		var width = 200;
		var height = 0;
	}

	obj.width = width;
	obj.height = height + 16;

	obj.SetControllerVisible(true);
	obj.Play();
}

var in_autocomplete = false;
var last_key_entered = '';

/**
* Check event key
*/
function phpbb_check_key(event)
{
	// Keycode is array down or up?
	if (event.keyCode && (event.keyCode == 40 || event.keyCode == 38))
		in_autocomplete = true;

	// Make sure we are not within an "autocompletion" field
	if (in_autocomplete)
	{
		// If return pressed and key changed we reset the autocompletion
		if (!last_key_entered || last_key_entered == event.which)
		{
			in_autocompletion = false;
			return true;
		}
	}

	// Keycode is not return, then return. ;)
	if (event.which != 13)
	{
		last_key_entered = event.which;
		return true;
	}

	return false;
}

jQuery(function($)
{
	// Forms submitting indication
	$('form input[type=submit]').on('click', function()
	{
		var $submit = $(this);
		if ($submit.hasClass('sending')) return false;
		$(this).parents('form').off('submit.sending').one('submit.sending', function(e)
		{
			if (e.isDefaultPrevented()) return;
			$submit.addClass('sending');
			var last = (new Date()).getTime();
			var timer = setInterval(function()
			{
				if ((new Date()).getTime() - last > 2000)
				{
					$submit.removeClass('sending');
					clearInterval(timer);
					return;
				}
				last = (new Date()).getTime();
			}, 1000);
		});
	});

	// Ctrl+Enter and Alt+Enter titles for default and alternate submit buttons
	$('form input[type=submit].default-submit-action').attr('title', 'Ctrl+Enter');
	$('form input[type=submit].alternate-submit-action').attr('title', 'Alt+Enter');

	// Enter, Ctrl+Enter and Alt+Enter handler
	$('form input[type=text], form input[type=password], form textarea').on('keydown', function (e)
	{
		var is_input = !$(this).is('textarea');
		if (is_input && phpbb_check_key(e)) return true;

		if ((e.which == 13 || e.which == 10) && (is_input || e.ctrlKey || e.altKey))
		{
			// Find proper submit button
			var $form = $(this).parents('form');
			var $submit = $form.find('input[type=submit].' + (e.altKey ? 'alternate' : 'default') + '-submit-action:eq(0)');
			if ($submit.length == 0)
			{
				if (e.altKey) return false;
				$submit = $form.find('input[type=submit]');
				if ($submit.length == 0) return false;
				if ($submit.length > 1)
				{
					$submit = $form.find('input[type=submit][name=submit]');
					if ($submit.length != 1) return false;
				}
			}

			// Submit form
			if (window.opera && e.ctrlKey)
			{
				// Prevent creation of new tab in Opera
				// Unfortunately this method does not work with the button with name="submit"
				if ($submit.attr('name') == 'submit') return false;
				$submit.triggerHandler('click');
				if ($submit.attr('name'))
				{
					var $input = $('<input type="hidden" />').attr('name', $submit.attr('name')).val($submit.val());
					$form.append($input).submit();
					$input.remove();
				}
				else
				{
					$form.submit();
				}
			}
			else
			{
				$submit.click();
			}
			return false;
		}

		return true;
	});
});
