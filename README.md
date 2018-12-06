## Working

- style Tag
- You could inject code like <body onload=alert('XSS!')>, or <b onmouseover=alert('XSS!')>click me!</b>, or <img src="http://url.to.file.which/not.exist" onerror=alert('XSS!');>, or <img src="javascript:alert(1)">, or you could inject pretty much anything via an <iframe>.

- http://kathack.com/