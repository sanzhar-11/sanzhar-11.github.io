// to render some users

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 25,
    isActive: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bobbrown@example.com",
    age: 35,
    isActive: false,
  },
];

const container = document.querySelector("ul");

users.forEach((person) => {
  const li = `<li>${person.name}</li>`;
  container.insertAdjacentHTML("beforeend", li);
});
