document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const logoutButton = document.getElementById("logoutButton");
    const loginSection = document.getElementById("loginSection");
    const loginForm = document.getElementById("loginForm");
    const registerSection = document.getElementById("registerSection");
    const registerForm = document.getElementById("registerForm");
    const successMessage = document.getElementById("successMessage");
    const loginLink = document.getElementById("loginLink");
    const forgotPassword = document.getElementById("forgotPassword");
    const publicationFormSection = document.getElementById("publicationFormSection");
    const publicationsSection = document.getElementById("publications");
    const navMenu = document.getElementById("navMenu");

    loginButton.addEventListener("click", function() {
        loginSection.style.display = "block";
        registerSection.style.display = "none";
        successMessage.style.display = "none";
        publicationFormSection.style.display = "none";
        publicationsSection.style.display = "none";
    });

    registerButton.addEventListener("click", function() {
        registerSection.style.display = "block";
        loginSection.style.display = "none";
        successMessage.style.display = "none";
        publicationFormSection.style.display = "none";
        publicationsSection.style.display = "none";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Misoroka ny fisehoana mahazatra amin'ny fidirana
        loginSection.style.display = "none";
        loginButton.style.display = "none";
        registerButton.style.display = "none";
        logoutButton.style.display = "block";
        publicationFormSection.style.display = "block";
        publicationsSection.style.display = "block";

        // Mise à jour ny navigation
        navMenu.querySelector('a[href="profile.html"]').style.display = "inline";
        navMenu.querySelector('a[href="recherche.html"]').style.display = "inline";
        navMenu.querySelector('a[href="publications.html"]').style.display = "inline";
        navMenu.querySelector('a[href="messages.html"]').style.display = "inline";
        navMenu.querySelector('a[href="notifications.html"]').style.display = "inline";
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Misoroka ny fisehoana mahazatra amin'ny fisoratana anarana
        registerSection.style.display = "none";
        successMessage.style.display = "block";
        publicationFormSection.style.display = "none";
        publicationsSection.style.display = "none";
    });

    loginLink.addEventListener("click", function() {
        successMessage.style.display = "none";
        loginSection.style.display = "block";
    });

    logoutButton.addEventListener("click", function() {
        const confirmLogout = confirm("Êtes-vous sûr de vouloir vous déconnecter?");
        if (confirmLogout) {
            loginButton.style.display = "block";
            registerButton.style.display = "block";
            logoutButton.style.display = "none";
            publicationFormSection.style.display = "none";
            publicationsSection.style.display = "none";

            // Fanavaozana ny navigation
            navMenu.querySelector('a[href="profile.html"]').style.display = "none";
            navMenu.querySelector('a[href="recherche.html"]').style.display = "none";
            navMenu.querySelector('a[href="publications.html"]').style.display = "none";
            navMenu.querySelector('a[href="messages.html"]').style.display = "none";
            navMenu.querySelector('a[href="notifications.html"]').style.display = "none";
        }
    });

    forgotPassword.addEventListener("click", function() {
        alert("Veuillez contacter l'administrateur pour réinitialiser votre mot de passe.");
    });

    publicationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Fisorohana ny fisehoan'ny pejy
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const imageInput = document.getElementById("image");
        const videoInput = document.getElementById("video");

        const publication = document.createElement("div");
        publication.classList.add("publication");

        const publicationTitle = document.createElement("h3");
        publicationTitle.textContent = title;

        const publicationDescription = document.createElement("p");
        publicationDescription.textContent = description;

        publication.appendChild(publicationTitle);
        publication.appendChild(publicationDescription);

        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const image = document.createElement("img");
                image.src = e.target.result;
                image.alt = title;
                publication.appendChild(image);
            };
            reader.readAsDataURL(imageInput.files[0]);
        }

        if (videoInput.files && videoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                publication.appendChild(video);
            };
            reader.readAsDataURL(videoInput.files[0]);
        }

        const likesContainer = document.createElement("div");
        likesContainer.classList.add("likes");

        const likeButton = document.createElement("button");
        likeButton.textContent = "J'aime";
        let likeCount = 0;
        const likeCounter = document.createElement("span");
        likeCounter.textContent = ` (${likeCount})`;

        likeButton.addEventListener("click", function() {
            likeCount++;
            likeCounter.textContent = ` (${likeCount})`;
        });

        const adoreButton = document.createElement("button");
        adoreButton.textContent = "J'adore";
        let adoreCount = 0;
        const adoreCounter = document.createElement("span");
        adoreCounter.textContent = ` (${adoreCount})`;

        adoreButton.addEventListener("click", function() {
            adoreCount++;
            adoreCounter.textContent = ` (${adoreCount})`;
        });

        likesContainer.appendChild(likeButton);
        likesContainer.appendChild(likeCounter);
        likesContainer.appendChild(adoreButton);
        likesContainer.appendChild(adoreCounter);

        publication.appendChild(likesContainer);

        const commentForm = document.createElement("form");
        commentForm.classList.add("commentForm");
        const commentLabel = document.createElement("label");
        commentLabel.setAttribute("for", "comment");
        commentLabel.textContent = "Commentaire:";
        const commentInput = document.createElement("textarea");
        commentInput.setAttribute("name", "comment");
        commentInput.setAttribute("rows", "2");
        commentInput.setAttribute("required", true);
        const commentSubmit = document.createElement("input");
        commentSubmit.setAttribute("type", "submit");
        commentSubmit.setAttribute("value", "Envoyer");

        commentForm.appendChild(commentLabel);
        commentForm.appendChild(commentInput);
        commentForm.appendChild(commentSubmit);

        const commentsContainer = document.createElement("div");
        commentsContainer.classList.add("comments");

        commentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const comment = commentInput.value;
            const commentElement = document.createElement("p");
            commentElement.textContent = comment;
            commentsContainer.appendChild(commentElement);
            commentInput.value = "";
        });

        publication.appendChild(commentForm);
        publication.appendChild(commentsContainer);

        publicationsSection.appendChild(publication);

        // Mamerina ny formulaire
        publicationForm.reset();
    });
});
