jquery-exists is a tiny plugin to fix the following infuriatingly ugly line of code...

thing = $('#thing').length ? $('#thing') : false;

Who wants to search for the object twice?

No one. Anywhere. Ever.

I long considered just overwriting the standard jquery selection function, but that feels like taking too much liberty, and wil likely break a lot of projects.

SO, now we've got $('#thing').exists(), which returns a jquery collection if matching items are found, and returns false if not.

This might very well exist somewhere else, but I recently wrapped it into a project, and felt I should share.

Questions, comments, and harsh criticisms welcome!


---

Released under the MIT License