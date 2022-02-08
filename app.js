//get elements

const tab_menu = document.querySelectorAll('.huda_tab .tab_menu ul li a');
const tab_pane_all = document.querySelectorAll('.huda_tab .tab_pane');

   tab_menu.forEach(item => {

    item.addEventListener('click', function(e){
        e.preventDefault();

        tab_menu.forEach(item => {
            item.classList.remove('active');
        });

        item.classList.add('active');

        const tab_pane = document.querySelector(this.getAttribute('href'));
        tab_pane_all.forEach(item => {

            item.classList.remove('active');

        });
        tab_pane.classList.add('active');

    });  

});
