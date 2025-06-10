# HELPDESK
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



Help709 Helpdesk
Description
A helpdesk application built with React and Node.js, designed to manage tickets, , feedback, notifications, metrics.
Project Structure
HelpDesk_OCP/
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json       # Fichier manifest simplifié (sans icône manquante)
│   ├── favicon.ico
│   └── logo192.png         # (Optionnel) Si tu ajoutes une icône
├── src/
│   ├── components/         # Composants réutilisables et layout
│   │   ├── auth/          # Composants d'authentification
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── client/        # Pages spécifiques aux Clients
│   │   │   ├── SubmitTicket.js
│   │   │   ├── TrackTickets.js
│   │   │   └── history.js
│   │   ├── helpdesk/      # Pages spécifiques aux Agents Helpdesk
│   │   │   ├── ManageTickets.js  
│   │   │   ├── HelpdeskDashboard.js
│   │   │   └── Notifications.js
│   │   ├── admin/         # Pages spécifiques aux Administrateurs
│   │   │   ├── SuperviseTickets.js
│   │   │   ├── ManageUsers.js
│   │   │   ├── Dashboard.js
│   │   └── Layout.js  # Composant de mise en page avec sidebar
│   │   └── ProtectedRoute.js # Protection des routes par rôle
│   ├── context/           # Gestion du contexte global
│   │   ├── AuthContext.js
│   ├── services/          # Services pour les API et Socket.IO
│   │   ├── api.js        # Requêtes HTTP
│   │   └── socket.js     # Configuration Socket.IO
│   ├── i18n/              # Gestion des traductions (facultatif)
│   │   ├── i18n.js       # Configuration i18next
│   │   └── translations/ # Fichiers de traduction (fr.json, en.json, etc.)

│   ├── assets/           # Fichiers statiques (images, polices)
│   │   ├── images/
│   │   └── style/
│   ├── App.js            # Composant principal avec routes
│   ├── index.js          # Point d'entrée de l'application
│   ├── index.css         # Styles globaux
│   └── App.css           # Styles pour App.js
├── package.json          # Dépendances et scripts
└── .gitignore            # Fichiers à ignorer par Git                                
backend/
├── config/
│   └── db.js              # Configuration de la base de données
├── models/                # Modèles pour la base de données
│   ├── User.js
│   ├── Ticket.js
│   ├── Comment.js
│   ├── Notification.js
│   ├── Metrics.js
├── controllers/           # Contrôleurs pour gérer les requêtes
│   ├── authController.js
│   ├── ticketController.js
│   ├── feedbackController.js
│   ├── metricsController.js
│   ├── notificationController.js
│   ├── userController.js
├── routes/                # Définition des routes API
│   ├── authRoutes.js
│   ├── ticketRoutes.js
│   ├── feedbackRoutes.js
│   ├── metricRoutes.js
│   ├── notificationRoutes.js
│   ├── userRoutes.js
├── services/              # Services pour la logique métier
│   └── emailService.js
├── server.js              # Point d'entrée du serveur
├── package.json           # Dépendances et scripts
└── .gitignore             # Fichiers à ignorer par Git


Prerequisites

Node.js (>= 14.x)
MySQL (>= 8.x)
A Gmail account for email notifications (or configure another email service)

Setup
Backend

Navigate to the backend directory:cd backend


Install dependencies:npm install


Create a .env file based on the provided example and update the values:DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Hiba123
DB_NAME=helpdesk_db
PORT=5000
JWT_SECRET=d7d0d68a5ee359deb0322018caa6d05702afc13f1cfa027f52bcbc8fadde87ea


Ensure your MySQL database is running and create the helpdesk_ocp database.
Run the database schema (provided in the initial setup) to create the tables.
Start the backend server:npm start



Frontend

Navigate to the frontend directory:cd frontend


Install dependencies:npm install


Start the frontend development server:npm start


The frontend should now be running on http://localhost:3000.

Usage

Register/Login: Access the app via /register or /login.
Roles:
Admin (role_id: 1): Can manage users, view metrics, and create knowledge base articles.
Technician (role_id: 2): Can view assigned tickets, resolve tickets, and earn points/badges via gamification.
Client (role_id: 3): Can create tickets, view their tickets, and provide feedback.


Features:
Create and manage tickets.
View and contribute to the knowledge base (admin only).
Provide feedback on resolved tickets.
Receive real-time notifications.
View metrics (admin/technician).
Interact with a chatbot (simulated for now).
Gamification for technicians (points and badges).



Testing

Use Postman to test backend API endpoints.
Test frontend features by navigating through the UI.
Ensure email notifications are working by configuring a valid EMAIL_USER and EMAIL_PASS in the backend .env.

Notes

The chatbot functionality is currently simulated. To integrate a real AI, you can use OpenAI or another API in chatbotController.js.
Email notifications require a valid Gmail account or another email service configuration.
The application uses Tailwind CSS for styling.

Troubleshooting

CORS Issues: Ensure the backend CORS configuration matches the frontend URL (http://localhost:3000).
Database Errors: Verify the database connection details in backend/.env and ensure the MySQL server is running.
Email Errors: Check the email service credentials in backend/.env and ensure the service allows less secure apps (for Gmail).

data base :

-- Table des utilisateurs (clients, techniciens, admin)
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
);

-- Table des rôles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);
-- Table des tickets
CREATE TABLE tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  priority ENUM('Low', 'Medium', 'High') DEFAULT 'Medium',
  created_by INT,
  assigned_to INT,
   category VARCHAR(100),
  status ENUM('En attente', 'En cours', 'Résolu') DEFAULT 'En attente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL
);

-- Table des techniciens
CREATE TABLE technicians (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  status ENUM('Disponible', 'Occupé') DEFAULT 'Disponible',
  ticket_id INT,
  FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE SET NULL
);

-- Table des messages
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sender_id INT,
  ticket_id INT,
  content TEXT,
  audio_path VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE
);

-- Table des pièces jointes
CREATE TABLE attachments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message_id INT,
  file_path VARCHAR(255) NOT NULL,
  file_type VARCHAR(50),
  FOREIGN KEY (message_id) REFERENCES messages(id) ON DELETE CASCADE
);

-- Table des feedbacks
CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ticket_id INT,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE
);

CREATE TABLE notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  ticket_id INT, -- Nouveau champ
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (ticket_id) REFERENCES tickets(id) ON DELETE CASCADE
);


