# Contact form delivery status

The contact form validates name, email, subject and message in the browser and prepares a `mailto:` handoff to `green.beltinitiative@gmail.com`.

No server-side email, CRM, or form-processing integration is configured in this project. The form therefore does not claim that a message has been sent. A future delivery integration should be added through a server-side route or approved form provider, with credentials stored in server-only environment variables.
