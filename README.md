# 🤝 KeenKeeper

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**KeenKeeper** is a personal relationship management dashboard designed to help you nurture and maintain meaningful connections. It acts as a digital shelf for your friendships, allowing you to track your last contact, log interactions, and view analytics to ensure you never lose touch with the people who matter most.



## ✨ 3 Key Features

1. **Interactive Friendship Dashboard:** Browse all your connections at a glance with visual status indicators (On Track, Almost Due, Overdue). Includes a detailed profile view for each friend with quick-action check-in buttons to instantly log calls, texts, or video chats.
2. **Dynamic Activity Timeline:** A comprehensive history of all your logged interactions. It features live search functionality, custom category filtering (Call, Text, Video, Meetup), and precise time-based sorting (Newest/Oldest).
3. **Friendship Analytics:** A dedicated statistics page featuring responsive, interactive pie charts that visualize your communication habits and interaction types, powered by Recharts.

---

## 🛠️ Technologies Used

* **Framework:** Next.js (App Router) & React.js
* **Styling & UI:** Tailwind CSS, DaisyUI (optional)
* **Charts & Data Visualization:** Recharts
* **State Management:** React Context API (Timeline logging)
* **Icons & Notifications:** Lucide React, React Hot Toast
* **Data Structure:** Simulated backend using structured JSON

---

## 📱 Responsive Design
KeenKeeper is built with a mobile-first approach, ensuring a seamless user experience across all devices:
- **Mobile:** Single-column stacked layouts with accessible touch targets.
- **Tablet:** Two-column optimized views.
- **Desktop:** Expansive 4-column grids and side-by-side data presentation.

---

## 💻 Getting Started (Local Setup)

To run KeenKeeper locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/fahid2002/keenkeeper.git](https://github.com/fahid2002/keenkeeper.git)

2. Navigate to the project directory:
cd keenkeeper

3. Install dependencies:
npm install

4. Start the development server:
npm run dev

5. Open the app:
Open http://localhost:3000 with your browser to see the result.

#### 📂 Project Structure Highlights
src/app/ - Contains all Next.js page routes.
src/components/ - Reusable UI components (Navbar, FriendCards, Footer).
src/context/ - Global state management for timeline logging.
src/data/ - Contains friends.json, serving as the mock database for the application.

Developed by Fahid Hasan