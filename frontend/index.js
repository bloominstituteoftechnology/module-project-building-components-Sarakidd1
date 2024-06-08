
function moduleProject3() {

// TASK 1 - Write a buildNav component that returns a nav
function buildNav(navData) {
  const nav = document.createElement('nav');
  navData.forEach(item => {
    const anchor = document.createElement('a');
    anchor.href = item.href;
    anchor.textContent = item.textContent;
    anchor.title = item.title;
    nav.appendChild(anchor);
  });
  return nav;
}

const navData = [
  { href: "https://www.example.com", textContent: "Home", title: "Go to the home page" },
  { href: "https://www.example.com/about", textContent: "About", title: "Learn more about our company" },
  { href: "https://www.example.com/services", textContent: "Services", title: "View our available services" },
  { href: "https://www.example.com/blog", textContent: "Blog", title: "Read our latest blog posts" },
  { href: "https://www.example.com/contact", textContent: "Contact", title: "Get in touch with us" }
];

const navElement = buildNav(navData);
document.body.appendChild(navElement);

// TASK 2 - Create learner cards
function buildLearnerCard(learner, languages) {
  const card = document.createElement('div');
  card.classList.add('learner-card');
  card.innerHTML = `
    <p>${learner.name}</p>
    <p>Learner ID: ${learner.id}</p>
    <p>Date of Birth: ${learner.dob}</p>
    <p>Favorite Language: ${languages.find(lang => lang.id === learner.favoriteLanguage).name}</p>
  `;
  card.addEventListener('click', () => {
    const activeCard = document.querySelector('.learner-card.active');
    if (activeCard) activeCard.classList.remove('active');
    card.classList.add('active');
  });
  return card;
}

const learners = [
  { name: "Kenneth Fisher", id: 24, dob: "1990-01-01", favoriteLanguage: 1 },
  { name: "Alice Smith", id: 25, dob: "1988-05-15", favoriteLanguage: 2 },
  { name: "Bob Johnson", id: 26, dob: "1992-11-30", favoriteLanguage: 3 },
  { name: "Emily Davis", id: 27, dob: "1995-03-10", favoriteLanguage: 1 },
  { name: "Michael Wilson", id: 28, dob: "1993-07-20", favoriteLanguage: 2 }
];

const languages = [
  { id: 1, name: "Python" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Java" }
];

const section = document.createElement('section');
document.body.appendChild(section);

learners.forEach(learner => {
  const learnerCard = buildLearnerCard(learner, languages);
  section.appendChild(learnerCard);
});

// TASK 3 - Write a buildFooter component that returns a footer
function buildFooter(footerData) {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="company-info">
      <p class="company-name">${footerData.companyName}</p>
      <p class="address">${footerData.address}</p>
      <p class="contact-email">Email: <a href="mailto:${footerData.email}">${footerData.email}</a></p>
    </div>
    <div class="social-media">
      <a href="${footerData.twitter}">Twitter</a>
      <a href="${footerData.facebook}">Facebook</a>
      <a href="${footerData.instagram}">Instagram</a>
    </div>
    <div>© ${footerData.copyRight}</div>
  `;
  return footer;
}

const footerData = {
  companyName: "Bloom Institute of Technology",
  address: "123 Main Street, City, Country",
  email: "info@example.com",
  twitter: "https://twitter.com/example",
  facebook: "https://www.facebook.com/example",
  instagram: "https://www.instagram.com/example",
  copyRight: "BLOOM INSTITUTE OF TECHNOLOGY 2023"
};

const footerElement = buildFooter(footerData);
document.body.appendChild(footerElement);

// TASK 4 - Clicking on the section should deactivate the active card
section.addEventListener('click', (event) => {
  if (!event.target.closest('.learner-card')) {
    const activeCard = document.querySelector('.learner-card.active');
    if (activeCard) activeCard.classList.remove('active');
  }
});
}



  // ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
