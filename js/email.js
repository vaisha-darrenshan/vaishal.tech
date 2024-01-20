<><><script type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script><script type="text/javascript">
        emailjs.init('8-qCB0Dipjf_mnoKs')
    </script></><><div class="st-height-b0 st-height-lg-b30"></div><script type="text/javascript">
        const btn = document.getElementById('button');

        document.getElementById('form')
        .addEventListener('submit', function(event) {event.preventDefault()};

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'contact_me14';

        emailjs.sendForm(serviceID, templateID, this)
        .then(() =&gt; {btn.value = 'Send Email'};
        alert('Sent!');
        &rbrace;, (err) =&gt; {btn.value = 'Send Email'};
        alert(JSON.stringify(err));
        &rbrace;);
        &rbrace;);
    </script></></>
              