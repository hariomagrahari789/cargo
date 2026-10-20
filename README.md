# 🚛 Bhramanvahini — हर ट्रक का सही साथी

> **Next-Generation Smart Logistics & Empty-Return Optimization Platform**  
> Connecting Warehouse Shippers and Fleet/Truck Dealers across India to maximize vehicle capacity, minimize transit deadhead, and reduce carbon emissions.

---

## 🌟 Overview

**Bhramanvahini** is a specialized logistics technology platform designed to solve India's freight inefficiency challenges. In traditional logistics, nearly 40% of commercial vehicles return empty after delivery, leading to high fuel costs, reduced driver earnings, and avoidable carbon emissions. 

Bhramanvahini unifies shippers and fleet operators onto a single, intuitive real-time ecosystem offering dynamic load matching, route consolidation, interactive fleet tracking, and role-based operational dashboards.

---

## 🚀 Key Features

### 🏢 Warehouse Manager Hub (`/warehouse-dashboard`)
- **Real-Time KPI Metrics**: Track total shipments, on-time delivery rates, freight expenditure, and cargo volume.
- **Shipment Management**: Create, filter, dispatch, and track loads across different fulfillment phases.
- **AI Load & Route Optimization**: Match outgoing cargo with high-rated empty-return trucks along verified transit corridors.
- **Interactive Live Tracking**: Real-time status, transit milestones, driver contact, and GPS progress visualization.
- **Analytics & Carbon Reports**: Track cost savings, deadhead mileage reduction, and verified CO₂ offsets.

### 🚚 Truck Dealer & Fleet Operator Hub (`/truck-dealer-dashboard`)
- **Fleet Overview**: Monitor active trucks, available capacity, maintenance alerts, and driver assignments.
- **Instant Booking Requests**: Review, accept, or negotiate incoming load requests matched to return trips.
- **Active Trip Monitoring**: Live telemetry, route adherence, ETA forecasting, and cargo safety statuses.
- **Performance & Revenue Analytics**: Monitor vehicle utilization rates, revenue per kilometer, and earnings history.

### 🌐 High-Conversion Landing Experience
- **Interactive Workflow**: Step-by-step guidance for both Warehouse Managers and Fleet Operators.
- **Unified Platform Suite**: Consolidated overview of the optimization engine, sustainability tracking, and role benefits.
- **Quick 1-Click Demo Access**: Built-in credential-free demo launcher directly in the login modal for instant testing.
- **Responsive & Modern Design**: Engineered with a deep-space dark palette, radiant emerald and amber accents, and fluid layouts.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | [React 19](https://react.dev/) | Modern component architecture, functional hooks |
| **Bundler & Dev Server** | [Vite 7](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Routing** | [React Router v7](https://reactrouter.com/) | Declarative client-side routing & protected route guards |
| **Iconography** | [Lucide React](https://lucide.dev/) | Consistent, crisp SVG icons |
| **Styling** | Vanilla CSS3 | Custom design system, CSS variables, glassmorphism, responsive grids |

---

## 📁 Project Structure

```text
cargosathi/
├── public/                     # Static assets & favicon
├── src/
│   ├── assets/                 # Brand images & vector graphics
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Protected routes, badges, shared UI
│   │   ├── dealer/             # Fleet & Dealer dashboard widgets
│   │   │   ├── ActiveTrips.jsx
│   │   │   ├── BookingRequests.jsx
│   │   │   ├── DealersSideBar.jsx
│   │   │   ├── FleetKPISummary.jsx
│   │   │   ├── FleetManagement.jsx
│   │   │   └── PerformanceAnalytics.jsx
│   │   ├── warehouse/          # Warehouse dashboard widgets
│   │   │   ├── AnalyticsReports.jsx
│   │   │   ├── KPISummary.jsx
│   │   │   ├── LiveTracking.jsx
│   │   │   ├── OptimizationResults.jsx
│   │   │   ├── ShipmentManagement.jsx
│   │   │   └── WarehouseSideBar.jsx
│   │   ├── Authpopup.jsx       # Multi-role authentication & 1-click demo modal
│   │   ├── Features.jsx        # Core value propositions
│   │   ├── Footer.jsx          # Clean minimalist footer
│   │   ├── Header.jsx          # Global navigation with role-aware actions
│   │   ├── Hero.jsx            # Dynamic headline, stats, and primary CTAs
│   │   ├── HowItWorks.jsx      # Role-based workflow guide
│   │   ├── Problem.jsx         # Industry pain points breakdown
│   │   ├── Solution.jsx        # Architectural solution framework
│   │   └── UnifiedPlatform.jsx # Consolidated platform features
│   ├── context/                # React state context providers
│   ├── pages/                  # Top-level route pages
│   │   ├── TruckDealerDashboard.jsx
│   │   └── WarehouseDashboard.jsx
│   ├── styles/                 # Modular CSS stylesheets & theme variables
│   │   ├── theme.css           # Color tokens, typography, and elevations
│   │   ├── global.css          # Global resets, utility classes, and layout rules
│   │   ├── dashboard.css       # Unified dashboard styles
│   │   └── ...
│   ├── App.jsx                 # Route definitions & application entry
│   └── index.jsx               # React DOM root hydration
├── index.html                  # HTML5 entry with metadata & font imports
├── package.json                # Project dependencies and npm scripts
└── vite.config.js              # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- `npm` (version `9.x` or higher) or `yarn` / `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hariomagrahari789/cargo.git
   cd cargo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🔑 Quick Demo Access

You can explore both dashboards instantly without creating a new account:
1. Click **"Login"** or **"Get Started"** in the navigation header.
2. Under **"Quick Test Access"**, select:
   - **Warehouse Manager**: Opens the Warehouse Management Dashboard.
   - **Truck Dealer**: Opens the Fleet & Dealer Management Dashboard.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
