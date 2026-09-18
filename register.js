const $ = id => document.getElementById(id);


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
        user => user.username === existingUser
    )
) {
    location.href = "index(1).html";
}


/* =========================
   PASSWORD VISIBILITY
   ========================= */

document
    .querySelectorAll(".eye")
    .forEach(button => {

        button.onclick = () => {

            const input =
                $(button.dataset.target);

            if (
                input.type === "password"
            ) {

                input.type = "text";

                button.textContent = "🙈";

            } else {

                input.type = "password";

                button.textContent = "👁";

            }

        };

    });


/* =========================
   REGISTER
   ========================= */

$("registerForm").onsubmit = event => {

    event.preventDefault();


    const username =
        $("username")
            .value
            .trim();


    const password =
        $("password")
            .value;


    const confirmPassword =
        $("confirmPassword")
            .value;


    const users =
        JSON.parse(
            localStorage.getItem("users") ||
            "[]"
        );


    /* Username validation */

    if (
        !/^[A-Za-z0-9]{4,20}$/
            .test(username)
    ) {

        showMessage(
            "Username must be 4–20 letters/numbers only."
        );

        return;

    }


    /* Password validation */

    if (password.length < 4) {

        showMessage(
            "Password must contain at least 4 characters."
        );

        return;

    }


    /* Confirm password */

    if (
        password !== confirmPassword
    ) {

        showMessage(
            "Passwords do not match."
        );

        return;

    }


    /* Duplicate username */

    if (
        users.some(
            user =>
                user.username.toLowerCase() ===
                username.toLowerCase()
        )
    ) {

        showMessage(
            "Username already exists."
        );

        return;

    }


    /* Create user */

    users.push({

        username: username,

        password: password,

        gamesPlayed: 0,

        history: []

    });


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    localStorage.removeItem(
        "currentUser"
    );


    showMessage(
        "Registration successful. Please login."
    );


    setTimeout(() => {

        location.href = "login.html";

    }, 600);

};


/* =========================
   MESSAGE
   ========================= */

function showMessage(text) {

    $("message").textContent =
        text;

    $("message").style.color =
        "#b43b20";

}