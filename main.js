let arrayOfUsers ;

window.onload = function() {
    getUser();  
}

const getUser = () => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(users => arrayOfUsers = users.results)
}
  
function displayUser(user) {
    const userLi = document.getElementById('userList');

    arrayOfUsers.map(user => {
       const li = document.createElement('li');
       li.classList.add('infoList');
       const img = new Image();
       img.classList.add('img');
       img.setAttribute('src', `${user.picture.large}\n`);
       const btn = document.createElement('button');
       btn.innerHTML = 'More Info';
       btn.classList.add('showMore');
       li.appendChild(document.createTextNode(`${user.name.title}. ${user.name.first} ${user.name.last} `));
       userLi.append(img);
       userLi.append(li);
       btn.addEventListener('click', () => {
          li.appendChild(document.createTextNode(` Gender: ${user.gender}`))
          li.appendChild(document.createTextNode(` E-mail: ${user.email}`))
          li.appendChild(document.createTextNode(` From: ${user.location.country}`))
            // if(li.style.display == 'none') {
            //     li.style.display = 'block';
            //     btn.innerHTML = 'Hide Info';
            //   } else {
            //     li.style.display == 'none';
            //     btn.innerHTML = 'More Info';
            //    }
        })
       userLi.append(btn);
    })
}




// async function getUser() {
//     const response = await fetch('https://randomuser.me/api/?result=25');
//     const data = await response.json();
//     const users = data.results;
//     console.log(users);

//     users.forEach(user => displayUser(user));
//    //displayUser()
// }

