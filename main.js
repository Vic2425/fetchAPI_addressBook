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
       img.setAttribute('src', `${user.picture.large}`);
       const btn = document.createElement('button');
       btn.innerHTML = 'More Info';
       btn.classList.add('showMore');
       const userName = document.createTextNode(`
       ${user.name.title}. ${user.name.first} ${user.name.last}
       `);

       userLi.append(img);
       userLi.append(userName);
       userLi.append(li)
       btn.addEventListener('click', () => {
          const visible = li.classList.contains('show');
          console.log(visible);
          if(!visible) {
            li.classList.add('show');
          } else {
            li.style.visibility = "hidden";
          };
          li.innerHTML = `
          Gender: ${user.gender} <br>
          E-mail: ${user.email} <br>
          From: ${user.location.country}
          `
       })
       userLi.append(btn);
    })
}
