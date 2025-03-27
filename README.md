# Dance Website

Welcome to the **Dance Website** - a fully responsive web application that allows users to interact and submit contact information through a dynamic form. The data is securely stored in a MongoDB database using **Mongoose**.

## 🚀 **Features**
- Fully responsive design
- Contact form with backend data storage
- Seamless template rendering using Pug
- Easy-to-use and maintainable codebase

---

## 🧑‍💻 **Getting Started**
To set up and run the Dance Website on your local machine, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MongoDB Shell (mongosh)](https://www.mongodb.com/docs/mongodb-shell/install/)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/KirathBhat/dance-website.git
    cd dance-website
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start MongoDB server (ensure `mongod` is running):
    ```bash
    mongod
    ```

4. Run the application:
    ```bash
    node app.js
    ```

5. Open a new terminal instance to check the database using Mongo Shell:
    ```bash
    mongosh
    use contactDance
    db.contacts.find({})
    ```

---

## 📁 **Project Structure**
```bash
.
├── views/           # Pug templates
├── static/          # Static files (CSS, JS, Images)
├── node-modules/    # Node Modules and Dependencies
└── app.js           # Main application file
```

---

## 📬 **Contact**
Developed by **Kirath Bhat**. Connect with me on:
- GitHub: [@KirathBhat](https://github.com/KirathBhat)
- LinkedIN: [@KirathBhat](https://linkedin.com/in/kirath-bhat)

