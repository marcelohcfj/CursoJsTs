export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListerner('submit', e => {
            alert('FORM NÃO ENVIADO');
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('Email invalido');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alert('Senha precisa conter entre 3 e 50 caracteres');
            error = true;
        }

        if(!error) el.submit();
    }
}