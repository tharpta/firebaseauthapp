document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var  items = document.querySelector('.collapsible')
    M.Collapsible.init(items);


});