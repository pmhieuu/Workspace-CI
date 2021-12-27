class SignIn {
  image;
  container;
  logo;
  title;
  description;
  form;
  emailLabel;
  emailInput;
  passwordLabel;
  passwordInput;
  inputHelp;
  checkBoxLabel;
  checkBoxInput;
  checkBox;
  forgotPassword;
  signInBtnContainer;
  signInBtn;
  signInGgContainer;
  signInGg;
  signUp;
  constructor() {
    this.image = document.createElement("div");
    this.image.id = "image";

    this.container = document.createElement("div");
    this.container.id = "container";

    this.logo = document.createElement("img");
    this.logo.setAttribute("src", "./Materials/Artboard 3@4x 1.png");

    this.title = document.createElement("p");
    this.title.innerText = "WELCOME BACK!";
    this.title.classList.add("title");

    this.description = document.createElement("p");
    this.description.innerText =
      "Sign into your existing DANRY account to earn rewards, check existing orders and more.";
    this.description.classList = "description";

    this.form = document.createElement("form");
    this.form.id = "form";

    this.emailLabel = document.createElement("p");
    this.emailLabel.innerText = "Email";
    this.emailLabel.classList.add("label");

    this.emailInput = document.createElement("input");
    this.emailInput.classList.add("emailInput", "input");
    this.emailInput.setAttribute("placeholder", "Example@gmail.com");
    this.emailInput.type = "text";

    this.passwordLabel = document.createElement("p");
    this.passwordLabel.innerText = "Password";
    this.passwordLabel.classList.add("label");

    this.passwordInput = document.createElement("input");
    this.passwordInput.classList.add("passwordInput", "input");
    this.passwordInput.setAttribute("placeholder", "6+ characters");
    this.passwordInput.type = "password";

    this.inputHelp = document.createElement("div");
    this.inputHelp.classList.add("inputHelp");

    this.checkBoxLabel = document.createElement("label");
    this.checkBoxLabel.classList.add("checkBoxLabel");
    this.checkBoxLabel.setAttribute("for", "checkBoxId");

    this.checkBoxInput = document.createElement("input");
    this.checkBoxInput.classList.add("checkBoxInput");
    this.checkBoxInput.setAttribute("type", "checkbox");
    this.checkBoxInput.setAttribute("name", "");
    this.checkBoxInput.setAttribute("id", "checkBoxId");

    this.checkBox = document.createElement("div");
    this.checkBox.classList.add("checkBox");
    this.checkBox.innerText = "Keep me signed in";

    this.forgotPassword = document.createElement("a");
    this.forgotPassword.setAttribute("href", "");
    this.forgotPassword.innerText = "Forgot your password?";

    this.signInBtnContainer = document.createElement("div");
    this.signInBtn = document.createElement("button");
    this.signInBtn.classList.add("signInBtn");
    this.signInBtn.innerText = "SIGN IN";

    this.signInGgContainer = document.createElement("div");
    this.signInGg = document.createElement("button");
    this.signInGg.classList.add("signInGg");
    this.signInGg.innerText = "SIGN UP USING GOOGLE";

    this.signUp = document.createElement("p");
    this.signUp.classList.add("signUp");
    this.signUp.innerHTML = "Don't have account? <a href =''>Sign Up here</a>";

    this.signInBtnContainer.append(this.signInBtn);
    this.signInGgContainer.append(this.signInGg);
    this.checkBoxLabel.append(this.checkBoxInput, this.checkBox);
    this.inputHelp.append(this.checkBoxLabel, this.forgotPassword);
    this.form.append(
      this.emailLabel,
      this.emailInput,
      this.passwordLabel,
      this.passwordInput,
      this.inputHelp,
      this.signInBtnContainer,
      this.signInGgContainer,
      this.signUp
    );
    this.container.append(this.logo, this.title, this.description, this.form);
  }
  render() {
    document.getElementById("signIn").append(this.image, this.container);
  }
}

export default SignIn;
