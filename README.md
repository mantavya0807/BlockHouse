# Crypto Price Tracker

This repository contains a **Next.js** application that displays live cryptocurrency prices, alongside a **Docusaurus** documentation site explaining how it all works.

---

## 📂 Project Structure

```
my-repo/
  ├─ web-app/      # Next.js project
  │   ├─ pages/
  │   ├─ components/
  │   ├─ hooks/
  │   ├─ styles/
  │   ├─ package.json
  │   └─ ...
  └─ docs/         # Docusaurus documentation
      ├─ docs/
      │   ├─ intro.md
      │   ├─ setup.md
      │   ├─ api-integration.md
      │   ├─ state-management.md
      │   └─ challenges-solutions.md
      ├─ docusaurus.config.js
      ├─ package.json
      └─ ...
```

This structure ensures that the **Next.js web app** and **Docusaurus documentation** are well-organized and easy to maintain.

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/crypto-price-tracker.git
```

---

## 🖥️ Running the Web Application (Next.js)

1. **Navigate to the web-app folder**:
   ```bash
   cd web-app
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   - The app runs at [http://localhost:3000](http://localhost:3000).

4. **For a Production Build**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📖 Running the Documentation (Docusaurus)

1. **Navigate to the docs folder**:
   ```bash
   cd ../docs
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the Docs Server**:
   ```bash
   npm start
   ```
   - The docs will be available at [http://localhost:3000](http://localhost:3000).

4. **For a Production Build**:
   ```bash
   npm run build
   npx serve build
   ```

---

## 🛠️ Features

✅ **Live Cryptocurrency Prices** – Fetches real-time data for 5 cryptocurrencies using the CoinGecko API.  
✅ **Search Bar** – Quickly find a specific cryptocurrency by name or symbol.  
✅ **Sorting & Exporting** – Click on table headers to sort, and export data as CSV.  
✅ **Manual Refresh** – Refresh prices instantly with a button.  
✅ **Auto Updates** – React Query fetches updated data every 60 seconds.  
✅ **Responsive UI** – Built with Tailwind CSS for a clean, modern look.  
✅ **Documentation** – Clear, version-controlled documentation with Docusaurus.  

---

## 📝 Documentation

All documentation is available in the **Docusaurus-powered site**. You can find:

📌 [Project Setup Guide](./docs/docs/setup.md)  
📌 [API Integration Details](./docs/docs/api-integration.md)  
📌 [State Management Explanation](./docs/docs/state-management.md)  
📌 [Challenges & Solutions](./docs/docs/challenges-solutions.md)  

---

## 🌟 Technologies Used

- **Next.js** – React framework for server-side rendering and static generation.
- **React Query** – Data fetching and caching for seamless API calls.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **CoinGecko API** – Provides real-time cryptocurrency price data.
- **Docusaurus** – Used for documentation generation.
- **Axios** – Simple and efficient API request handling.

---

## 🔧 Troubleshooting

If you run into issues:

- **Port Conflicts**: Change the port in `package.json` scripts or set an environment variable.
- **Missing Dependencies**: Run `npm install` in both `web-app` and `docs` folders.
- **Tailwind Not Applying**: Ensure `tailwind.config.js` includes `content` paths to your components.

---

## 🤝 Contributing

We welcome contributions! If you'd like to improve the project:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push the branch (`git push origin feature-branch`)
5. Submit a pull request 🚀

---

## 📜 License

This project is licensed under the **MIT License**.

---

Happy coding, and enjoy the Crypto Price Tracker! 🚀
