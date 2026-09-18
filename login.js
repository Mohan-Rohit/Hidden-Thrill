/* =========================
   ALREADY LOGGED IN
   ========================= */

const existingUser =
    localStorage.getItem("currentUser");

const existingUsers =
    JSON.parse(
        localStorage.getItem("users") || "[]"
    );

if (
    existingUser &&
    existingUsers.some(
        user =>
            user.username.toLowerCase() ===
            existingUser.toLowerCase()
    )
) {
    window.location.replace("index(1).html");
}


/* =========================
   ELEMENTS
   ========================= */

const loginForm =
    document.getElementById("loginForm");

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const loginMessage =
    document.getElementById("loginMessage");

const togglePassword =
    document.getElementById("togglePassword");

const forgotPasswordBtn =
    document.getElementById("forgotPasswordBtn");

const forgotModal =
    document.getElementById("forgotModal");

const closeForgot =
    document.getElementById("closeForgot");

const forgotForm =
    document.getElementById("forgotForm");

const forgotMessage =
    document.getElementById("forgotMessage");

const forgotUsername =
    document.getElementById("forgotUsername");

const newPassword =
    document.getElementById("newPassword");

const confirmNewPassword =
    document.getElementById("confirmNewPassword");

const toggleNewPassword =
    document.getElementById("toggleNewPassword");

const toggleConfirmPassword =
    document.getElementById(
        "toggleConfirmPassword"
    );


/* =========================
   PASSWORD VISIBILITY
   ========================= */

function toggleInputVisibility(
    input,
    button
) {

    if (
        input.type === "password"
    ) {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁";

    }

}


togglePassword.addEventListener(
    "click",
    () => {

        toggleInputVisibility(
            passwordInput,
            togglePassword
        );

    }
);


toggleNewPassword.addEventListener(
    "click",
    () => {

        toggleInputVisibility(
            newPassword,
            toggleNewPassword
        );

    }
);


toggleConfirmPassword.addEventListener(
    "click",
    () => {

        toggleInputVisibility(
            confirmNewPassword,
            toggleConfirmPassword
        );

    }
);


/* =========================
   LOGIN
   ========================= */

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const username =
            usernameInput.value.trim();

        const password =
            passwordInput.value;


        const users =
            JSON.parse(
                localStorage.getItem("users") ||
                "[]"
            );


        const user =
            users.find(
                item =>
                    item.username.toLowerCase() ===
                    username.toLowerCase() &&
                    item.password === password
            );


        if (!user) {

            loginMessage.textContent =
                "Invalid username or password.";

            loginMessage.className =
                "auth-message error";

            return;

        }


        localStorage.setItem(
            "currentUser",
            user.username
        );


        loginMessage.textContent =
            "Login successful!";

        loginMessage.className =
            "auth-message success";


        setTimeout(() => {

            window.location.href =
                "index(1).html";

        }, 500);

    }
);


/* =========================
   FORGOT PASSWORD
   ========================= */

forgotPasswordBtn.addEventListener(
    "click",
    () => {

        forgotUsername.value =
            usernameInput.value.trim();

        forgotMessage.textContent =
            "";

        forgotMessage.className =
            "auth-message";

        forgotModal.classList.remove(
            "hidden"
        );

    }
);


/* CLOSE FORGOT PASSWORD */

closeForgot.addEventListener(
    "click",
    () => {

        forgotModal.classList.add(
            "hidden"
        );

    }
);


/* CLICK OUTSIDE MODAL */

forgotModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            forgotModal
        ) {

            forgotModal.classList.add(
                "hidden"
            );

        }

    }
);


/* =========================
   RESET PASSWORD
   ========================= */

forgotForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const username =
            forgotUsername.value.trim();

        const password =
            newPassword.value;

        const confirmPassword =
            confirmNewPassword.value;


        if (
            password.length < 6
        ) {

            forgotMessage.textContent =
                "Password must contain at least 6 characters.";

            forgotMessage.className =
                "auth-message error";

            return;

        }


        if (
            password !==
            confirmPassword
        ) {

            forgotMessage.textContent =
                "Passwords do not match.";

            forgotMessage.className =
                "auth-message error";

            return;

        }


        const users =
            JSON.parse(
                localStorage.getItem("users") ||
                "[]"
            );


        const index =
            users.findIndex(
                user =>
                    user.username.toLowerCase() ===
                    username.toLowerCase()
            );


        if (index === -1) {

            forgotMessage.textContent =
                "Username not found.";

            forgotMessage.className =
                "auth-message error";

            return;

        }


        users[index].password =
            password;


        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


        forgotMessage.textContent =
            "Password reset successfully.";

        forgotMessage.className =
            "auth-message success";


        setTimeout(() => {

            forgotModal.classList.add(
                "hidden"
            );

            newPassword.value =
                "";

            confirmNewPassword.value =
                "";

            passwordInput.value =
                "";

        }, 1000);

    }
);