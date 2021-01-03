const guidelist = document.querySelector('.guides');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const displayName = document.querySelector('.display-name');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin')


const setupUI = (user) => {
    if (user) {
        if(user.admin){
            adminItems.forEach(item => item.style.display = 'block'); 
        }
        // account info  Note: ? in the html is a ternary operator
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
            <div>Logged in as ${user.email}</div>
            <div>${doc.data().bio}</div>
            <div class="pink-text">${user.admin ? 'Admin' :''} </div>
            `;
            accountDetails.innerHTML = html;
        })
        
        //console.log(user.email);
        //displays username on navbar
        displayName.style.display = 'block';
        displayName.innerHTML = `<a href="#" class="grey-text" id="displays-name" > Hello, ${user.email}</a>`;
        //toggle logged in UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        adminItems.forEach(item => item.style.display = 'none'); 
        //hide account info
        accountDetails.innerHTML = '';
        //toggle logged out UI elements 
        displayName.style.display = 'none';
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
}



// setup guides
const setupGuides = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
                <li>
                <div class="collapsible-header grey lighten-4">${guide.title}</div>
                <div class="collapsible-body white">${guide.content}</div>
                </li>
            `;
            html += li
        });
        guidelist.innerHTML = html;
    } else {
        guidelist.innerHTML = `<h5>Please Login to see guides</h5>`
    }
}

//nav
const setupNav = (data) => {

}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var  items = document.querySelector('.collapsible')
    M.Collapsible.init(items);


});