javascript:
(
	function()
	{
		var counter = 1;
		var terms = [];
		var isDone = false;

		for (;;)
		{
			var term_current = prompt("Enter search term #" + counter + ".\n" + "Do not add commas between each terms - the program does it automatically.\n" + "Once you're finished, simply don't enter anything in the next term & just click 'OK'.","");
			if ((term_current != "") && (term_current != null))
			{
				terms.push(term_current);
				counter++;
			}
			else
			{
				break;
			}
		}
		if ((terms != null) && (terms != ""))
		{
			var terms_all = "";
			for (var i = 0; i < terms.length; i++)
			{
				terms_all = terms_all.concat(terms[i]);
						
				if (i != terms.length - 1)
				{
					terms_all = terms_all.concat(", ");
				}
			}
			window.open("https://www.google.co.uk/search?q="+escape(terms_all));
		}
	}
)()
