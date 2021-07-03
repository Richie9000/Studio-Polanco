const overlay = document.getElementById('myNav');
const hamb = document.getElementById('Hamb');
const closeNav = document.getElementsByClassName('closebtn')[0];

hamb.onclick = function () {
  overlay.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeNav.onclick = function () {
  overlay.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
};

// models section
const models = [
  {
    name: 'Alondra Benkler',
    data: '150k Instagram followers',
    biography: 'An elite socialite and fashion model, is the head of  Cosmetics and creator of the hugely popular line of lipsticks, Lip Kit.',
    photo: './img/model1.png',
  },
  {
    name: 'Valeria Noah',
    data: '200k Instagram followers',
    biography: 'Named International Model of the Year by the British Fashion Council in 2016, fashion model Gigi Hadid has made several appearances on international Vogue.',
    photo: './img/model2.jpg',
  },
  {
    name: 'Cassandra Oliveira',
    data: '300k Instagram followers',
    biography: 'Signed with Ford Models at 14, American model later graced the cover of GQ Turkey and was recommended by Ben Affleck for her role of the sassy mistress in Gone.',
    photo: './img/model3.jpg',
  },
  {
    name: 'Rocco Sifreddi',
    data: '400k Instagram followers',
    biography: 'Rocco is a Spanish model and actress who has had major success in the American entertainment industry. Also known for his work as a philanthropist.',
    photo: './img/model4.jpg',
  },
  {
    name: 'Carolina Herrera',
    data: '550k Instagram followers',
    biography: 'Starting out as a child model, Angie Harmon won a modeling contest organized by Seventeen magazine when she was 15.',
    photo: './img/model5.jpg',
  },
  {
    name: 'Shopie Dee',
    data: '700k Instagram followers',
    biography: 'The highest-earning models according to Forbes, Sophie was the first Victoria Secret model from Australia. Known for her attractive physique.',
    photo: './img/model6.jpg',
  },
];

const ulContainer = document.querySelector('.models-list');

function rev() {
  for (let i = 0; i < models.length; i += 1) {
    const liCard = document.createElement('li');
    liCard.className = 'container-img';
    ulContainer.appendChild(liCard);
    if (i > 1) {
      liCard.className = 'hidden-model';
    }
    const aLink = document.createElement('a');
    aLink.href = '#';
    liCard.appendChild(aLink);
    const imgLi = document.createElement('img');
    imgLi.className = 'img-models';
    imgLi.src = models[i].photo;
    aLink.appendChild(imgLi);
    const divInfo = document.createElement('div');
    divInfo.className = 'info-models';
    liCard.appendChild(divInfo);
    const pName = document.createElement('p');
    pName.innerHTML = models[i].name;
    pName.className = 'name-model';
    divInfo.appendChild(pName);
    const pData = document.createElement('p');
    pData.innerHTML = models[i].data;
    pData.className = 'data-model';
    divInfo.appendChild(pData);
    const pBio = document.createElement('p');
    pBio.innerHTML = models[i].biography;
    pBio.className = 'paragraph-model';
    divInfo.appendChild(pBio);
  }
}
rev();


