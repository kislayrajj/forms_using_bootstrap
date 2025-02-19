const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  try {
    const response = await fetch("data/user_data.json");
    const data = await response.json();

    const user = data.users.find((user) => user.email == email);

    if (user) {
      if (user.password === password) {
        // alert("login successful");
        window.location.href = "logged-in.html";
      } else {
        console.log("wrong password");
        alertMsg = document.querySelector(".alert");
        alertMsg.innerHTML =
          "Wrong Password. Please check your password.";
        alertMsg.style.color = "red";
        // alert("wrong password. Please try again.");
      }
    } else {
      alertMsg = document.querySelector(".alert");
      console.log("User not found. Please check your username");
      alertMsg.style.color = "red";
      alertMsg.innerHTML = "User not found. Please check your username";
      //   alert("User not found. Please check your username.");
    }
  } catch (error) {
    console.log("error logging in.");
    console.error("Fetch error:", error);
    alertMsg = document.querySelector(".alert");
    alertMsg.style.color = "red";
    alertMsg.innerHTML = "Error logging in";
  }
});
