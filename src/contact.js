export function loadContact() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  // clear classes and add contact class
  main.setAttribute("class", "contact");

  const mainTitle = document.createElement("h1");
  const mainContent = document.createElement("div");
  mainTitle.textContent = "Contact";

  const form = document.createElement("form");
  form.setAttribute("id", "contact-form");
  form.setAttribute("action", "mailto:willsoner3@gmail.com");
  form.setAttribute("method", "post");

  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("id", "name");
  name.setAttribute("placeholder", "Name");

  const email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("id", "email");
  email.setAttribute("placeholder", "Email");

  const message = document.createElement("textarea");

  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.textContent = "Submit";

  form.append(name, email, message, submit);
  mainContent.append(form);

  main.append(mainTitle, mainContent);
}
