# Serve Humanity Welfare Website

Welcome to the **Serve Humanity** website. The project has been fully migrated into a **100% clean, premium, and fully responsive static stack** using:
* **HTML5** (semantic and SEO-friendly structures)
* **Vanilla CSS3** (rich variables, responsive grid configurations, custom glassmorphic panels, and transitions)
* **Vanilla JavaScript** (dynamic rendering and navigation)
* **Bootstrap 5** (robust grids, standard navigation items, and interactive modals)

---

## 📁 Directory Structure
The workspace is organized into a highly structured and modern static layout:

```text
serve-humanity/
├── css/
│   └── style.css          # Premium global stylesheets, animations, and typography
├── js/
│   └── main.js           # Page rendering script and the Dual-Mode Data Loader
├── data/
│   ├── cases.json        # Welfare campaigns and target cases
│   ├── domains.json      # Primary active domains of help
│   ├── drives.json       # Seasonal campaigns and drives
│   ├── team.json         # Executive team members
│   ├── stats.json        # Impact metrics log
│   ├── projects.json     # Details of completed projects
│   └── educate.json      # Educate Humanity requirements & leads
├── images/               # All visual media assets & icons
├── uploads/              # Word documents and verification files
├── index.html            # Home page (with active modal case on load)
├── about.html            # Organization origins and directors
├── team.html             # Dynamic team leads contact portal
├── cases.html            # Active campaigns page with fund progress bars
├── projects.html         # Completed welfare activity reports
├── stats.html            # Dynamic performance tracking dashboard
├── educate.html          # Educate Humanity portals and child support checklist
├── join.html             # Volunteer entry point
└── contact.html          # Secure WhatsApp contact form
```

---

## ⚡ Double-Click to Launch (No Servers Needed!)
Due to our **Dual-Mode Data Loader** inside `js/main.js`, you do not need Node.js, npm, Python, or *any* local development server to run this website!

1. Open the folder `serve-humanity` in your file explorer.
2. Double-click `index.html` (or any other `.html` file).
3. The page will immediately open in your default browser and load **all dynamic data, images, and premium animations perfectly** (automatically bypassing local browser CORS restrictions!).

---

## 🛠️ Editing Dynamic Data
All data remains isolated in structural `.json` files in the `/data` directory:
- To add or modify a campaign case, edit `data/cases.json`.
- To update the team contacts, edit `data/team.json`.
- To adjust the performance numbers, edit `data/stats.json`.

Changes will be automatically updated on the site!
