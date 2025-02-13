<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Créer Mon Profil</title>
    <link rel="stylesheet" href="styles.css">
    <script src="profile.js" defer></script>
</head>
<body>
    <header>
        <h1>Créer Mon Profil</h1>
        <button id="logoutButton" style="display:none;">Déconnecter</button>
    </header>
    <main>
        <section>
            <h2>Créer ou Mettre à Jour Votre Profil</h2>
            <form id="profileForm">
                <label for="fullName">Nom complet:</label>
                <input type="text" id="fullName" name="fullName" required><br><br>
                <label for="phoneNumber">Numéro de téléphone:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required><br><br>
                <label for="bio">Biographie:</label>
                <textarea id="bio" name="bio" rows="4" required></textarea><br><br>
                <label for="profilePicture">Photo de profil:</label>
                <input type="file" id="profilePicture" name="profilePicture" accept="image/*"><br><br>
                <input type="submit" value="Enregistrer">
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Mon Site Web. Tous droits réservés.</p>
        <p>Contactez-nous: <a href="mailto:harisoaonja06@gmail.com">harisoaonja06@gmail.com</a></p>
        <p>Suivez-nous: 
            <a href="https://www.facebook.com/minet" target="_blank">Facebook</a>
        </p>
    </footer>
</body>
</html>
