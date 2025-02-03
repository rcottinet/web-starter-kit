# AdonisJS 6 + Inertia.js + ShadCN/UI Starter Kit

Welcome to the **AdonisJS 6 + Inertia.js + ShadCN/UI Starter Kit**! This starter template is designed to streamline the development of modern web applications by combining the power of **AdonisJS** for backend logic, **Inertia.js** for full-stack SPA functionality, and **ShadCN/UI** for beautiful and customizable React components.

---

## 🌟 Features

- **AdonisJS 6**: Robust and scalable backend framework with TypeScript support.
- **Inertia.js**: Build modern single-page applications without the need for a front-end API.
- **ShadCN/UI**: Pre-designed and accessible React components powered by TailwindCSS.
- **TypeScript**: Full TypeScript support for both frontend and backend.
- **Vite**: Fast and modern asset bundler for the front-end.
- **Pre-configured ESLint and Prettier**: Maintain clean and consistent code style.

---

## 🚀 Quick Start

Follow these steps to get the starter kit up and running:

### 1. Create a new AdonisJS project

```
npm init adonisjs@latest -- -K="rcottinet/web-starter-kit#develop"
```

> Alternatively, you can clone the repository and install the dependencies manually:
> ```bash
> git clone https://github.com/rcottinet/web-starter-kit.git
> cd web-starter-kit
> ```
> 
> ```bash
> npm install
> ```
> 
> Copy the `.env.example` file to `.env` and adjust the environment variables as needed:
> ```bash
> cp .env.example .env
> ```

### 2. Database

The application has to connect to a database. Make sure to configure the database connection in the `.env` file.
To start a database server, you can use the following command:

```bash
docker-compose up -d
```

This will start a PostgreSQL database server on port 5432
You can then run the migrations using the following command:

```bash
node ace migration:run
```

### 3. Run the development server

Start the application using the following command:

```bash
npm run dev
```


This will start the AdonisJS server with Hot Module Replacement (HMR) enabled. Navigate to [http://localhost:3333](http://localhost:3333) to view your app.

---

## 🛠️ Available Commands

Here’s a list of useful commands for development and deployment:

### Scripts in `package.json`

- `npm start`: Starts the production server.
- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Builds the application for production.
- `npm test`: Runs the test suite.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run format`: Formats the codebase using Prettier.
- `npm run typecheck`: Checks for TypeScript type errors.

### AdonisJS Commands

- `node ace migration:run`: Runs database migrations.
- `node ace make:model [name]`: Creates a new database model.
- `node ace make:controller [name]`: Creates a new controller.

---

## 📚 References

- [AdonisJS Official Documentation](https://docs.adonisjs.com/)
- [Inertia.js Official Documentation](https://inertiajs.com/)
- [ShadCN/UI Documentation](https://ui.shadcn.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

## 🙌 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you’d like to improve this starter kit.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## ✨ Credits

- **AdonisJS**: [https://adonisjs.com/](https://adonisjs.com/)
- **Inertia.js**: [https://inertiajs.com/](https://inertiajs.com/)
- **ShadCN/UI**: [https://ui.shadcn.dev/](https://ui.shadcn.dev/)
