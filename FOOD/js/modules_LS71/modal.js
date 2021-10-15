function modal() {
    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');


    function openModal() {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        wasOpend = true;
    }

    modalTrigger.forEach(item => {
        item.style.backgroundColor = 'cyan';

        item.addEventListener('click', openModal);
    });


    function closeModal() {
        modalWindow.classList.remove('show');
        modalWindow.classList.add('hide');
        document.body.style.overflow = '';
    }


    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
           closeModal();
        }
    });


    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });


    const modalTimerId = setTimeout(openModal, 50000);
    let wasOpend = false;


    function showModalByScroll() {
        if ((window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight) && wasOpend === false) {
                    openModal();
                    window.removeEventListener('scroll', showModalByScroll);
        }
    }
    
    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;