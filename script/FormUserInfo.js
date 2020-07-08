class FormUserInfo extends formPopup {
    constructor(...args) {
        super(...args);
    }

    setUserInfoForm = (name, job) => {
        this.name = this.form.elements.name;
        this.info = this.form.elements.info;
        this.name.value = name;
        this.info.value = job;
    };


}