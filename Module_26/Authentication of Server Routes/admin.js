const admin = require('firebase-admin');

// firebase service account pk
const type = "service_account";
const project_id = "courso-sis";
const private_key_id = "d0bfe9354d76ec56203dbf86bd91a54e5b85dc58";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCxhnsCQZNhJp+\njkVMjAqsRYIV1gIZLcOZsizz1uinVaWGs6C73Gaksu2eBUSC5SDNnJeylQKgxBHP\nj86DAzTtMasKQO8Sg2xUlKkhfRfRuSFnLzPUO2n9ZYhAcM14S9pvGuzHK+8csNEZ\nj1hfHS80vtl2AfeJ23vyYm+zXSs0SwCobq7g+EdQN4thVusHDOsllir/4mLNARJt\nCzBvLhReE0LysN+sCCiqYwdI/3jmyQrT3D4Is5I0N7ZTyRoJqm6ejmUwJ0vuz8hU\nv/bLDXdFWO6tPnkI6UuNVJxxXQsq9L69k20tgstW8F09sGDbx/3Ctjmp6kfhRikf\n0zsc9EWvAgMBAAECggEAMHtRDoC8keUU87WEKGafbXwrwjWv9gZ/Lq28JMH0zVoz\nRpFFzB0za4GiRfg3soFIJgX5eJlAuzWy3UCFffT5YqU/VuEM4UXXXEJYyx4xJKH5\nX47PTt+vJUT1olyxuGThLVC9aWJVNYYJtlwI+jvweSecR5R7wlPgyVeZSENDstMc\n77oJb9ywVWiV+sMIKi1nSzJPEamTIju6BJYqH7bX6beCkm4FeGb0Fg2xXUiqC9LY\nKyJqUwJNej/zlXpMaNeT/+gydSs3UjlbH4hG1qd/bzRN4pWtpCZgkkmqY9C1M1zN\na4Ul748iOQ5pnpp9ZUYYXgXKZJBNeBlEpdRqViF0GQKBgQDz/EkP5gT6laXBEj7g\n3379SbNAOa/I0NpQCE535DS74v4Z3gQVo4qBOPSU0/CNBcCYzuzTAdmtrDTM85Xj\n5/Uaqeis+AJHpPCxgcKxJxZhGvfrbQRkUB6hYiSTvboFgvVoM4Wh6JRJdsNGTH22\nWU+HDqXU+rj5FkGP4NAwDyLG+wKBgQDMXXJrhkVa+fx3GWRrLlszsvccHQxgZQeq\n5Wq+wlrqNoNmOL5uALNRBYeguHmY5weJCo9Slgo8NxNoV1XZAdYE2vRuFG60Ex+l\nDThFnDUipWqNegPvwHcalTy8FLZTAYalhGE6APLPhY4Dw9vuSpyIJvM2prUc4gsx\nk5ykyi9N3QKBgQDqJV1AgrCYgvDVftsVF6dZEFeT9Uh7YeOBFtenOzxYa5kL3gLx\neUc8iBpAkbyyuaiBfWPNhGMQxsjNP57DXyHb+t8uz7vwYZwT3cGoHSje+/Cc4Lxs\nQG+E1RjhKBzTmUBGRdui6/8TGYSBfHrQeplVtXr0D8FgWjmFCG0DEiN/7QKBgQC2\nCbMnFjZnQHBjgmnRkzxIA+1bzIA+yR+YWbzI6QTkxeQrxPXTtKoFzMAwKMKfsYMj\nzhU2glHhq0mNUuY0ZA9IyeSavXaSzsoMUodCck9eaixMk1g4Up+FPVQZUPXLYHuY\nqh+U9E1VDukeb3NTgoCGQvO4RazkanGAGrWYkESsvQKBgCznE90gFWGhUe1QEUIK\nj8Pt0bPbYu0zExoYk6Zf31EvUBa26VP/XSZqkvUH2mpyAfkJ6AulG7poM3cCLtMT\nN2Bwc4FxxCYuPvE8aO6l0VqqolYYDLlZNGBWrGR/ZQhCr4R/Q/hmczRO/ciPU+ra\nksysjadOlelhd7ZrbJZNgkUJ\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-8lgbg@courso-sis.iam.gserviceaccount.com";
const client_id = "114058229433896758970";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8lgbg%40courso-sis.iam.gserviceaccount.com";


// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
      type,
      project_id,
      private_key_id,
      private_key:
        private_key.replace(/\\n/g,'\n'),
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url
  }),
});

module.exports = admin;