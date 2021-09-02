export default function Modal() {

    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper = document.querySelector('.modal-wrapper')

    
    cancelButton.addEventListener('click', close )

    function open(){
        //Add class active para modal
        modalWrapper.classList.add('active')
    }

    function close(){
        modalWrapper.classList.remove('active')
    }


    return {
        open,
        close
    }
}