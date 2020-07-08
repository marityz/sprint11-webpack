//работа с попап картинка

class PopupImage extends Popup {
    constructor(modalWindow, closePopupButton) {
        super(modalWindow, closePopupButton);
    }

    open = (link) => {
        this.modalWindow.querySelector(".popup__img").setAttribute("src", link);
        this.modalWindow.classList.add("popup_is-opened");
    };


}
