# ⛅ Anime Weather Dashboard

A beautiful, anime-themed single-page weather application that displays real-time weather data with stunning glassmorphism effects. Get weather updates by searching any city or using your current location.

![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript) ![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?logo=css3)

## 🚀 Live Demo

[[View Live Application](https://upgraded-weather.vercel.app/)](#) <!-- Add your deployment URL here -->

## 📸 Screenshots

<!-- Add screenshots here -->
![Anime Weather Dashboard](./screenshots/weather-app.png)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [React Concepts](#react-concepts)
- [APIs Used](#apis-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [UI Design](#ui-design)
- [Browser Compatibility](#browser-compatibility)
- [Deployment](#deployment)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Anime Weather Dashboard is a modern, single-page weather application built with React and Vite. It combines real-time weather data from OpenWeatherMap API with a stunning anime-inspired glassmorphism UI design. The application provides an intuitive interface for checking weather conditions by city name or using your device's current location.

## ✨ Features

### Core Functionality
- **City Search**: Search weather information for any city worldwide
- **Current Location**: Get weather data using device geolocation
- **High-Accuracy Mode**: Toggle high-accuracy geolocation for mobile devices
- **Auto-Load**: Automatically loads the last searched city on app start
- **Real-Time Data**: Live weather updates from OpenWeatherMap API

### Weather Information Displayed
- 🌡️ Current temperature (Celsius)
- ☁️ Weather condition description
- 💧 Humidity percentage
- 💨 Wind speed (m/s)
- 🖼️ Dynamic weather icons

### User Experience
- ⏳ Loading indicators during API calls
- ❌ Graceful error handling with user-friendly messages
- 📱 Desktop vs mobile location accuracy notifications
- 💾 LocalStorage persistence for last searched city
- ⚡ Fast and responsive interface

## 🛠️ Tech Stack

### Frontend
- **React 18+**: Modern UI library with functional components
- **Vite 5+**: Next-generation frontend build tool
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with advanced features

### APIs & Browser Features
- **OpenWeatherMap API**: Real-time weather data
- **Geolocation API**: Browser-based location services
- **LocalStorage API**: Client-side data persistence

## ⚛️ React Concepts

This project demonstrates several important React concepts:

- **Functional Components**: Modern React component architecture
- **useState Hook**: State management for city input, weather data, loading, and errors
- **useEffect Hook**: Side effects for API calls and localStorage operations
- **Controlled Inputs**: Form input handling with React state
- **Conditional Rendering**: Dynamic UI based on application state

### State Management Structure

```javascript
const [city, setCity] = useState('');           // City input
const [weather, setWeather] = useState(null);   // Weather data
const [loading, setLoading] = useState(false);  // Loading state
const [error, setError] = useState('');         // Error messages
```

## 🌐 APIs Used

### OpenWeatherMap API

**Current Weather Data Endpoint**
```
https://api.openweathermap.org/data/2.5/weather
```

**Weather Icons Endpoint**
```
https://openweathermap.org/img/wn/{icon}@2x.png
```

**Parameters**
- Units: Metric (Celsius, m/s)
- API Authentication: API key required

### Geolocation API

- Browser-native API for location services
- High-accuracy option available
- Fallback error handling for denied permissions

## 🏁 Getting Started

### Prerequisites

Before running this project, ensure you have:

- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)
- Modern web browser with geolocation support

### Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate your API key from the dashboard
4. Copy the API key for environment setup

## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/praveen24lingam/anime-weather-dashboard.git
cd anime-weather-dashboard
```

### Install Dependencies

```bash
npm install
```

or using yarn:

```bash
yarn install
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

**Note**: If not using environment variables, you can directly add your API key in the source code (not recommended for production).

### Environment Variable Usage in Code

```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'your_api_key';
```

## 💻 Usage

### Running Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 UI Design

### Design Philosophy

The application features an **anime-inspired glassmorphism design** with the following characteristics:

### Visual Elements
- **Glassmorphism Effect**: Translucent cards with backdrop blur
- **Gradient Palette**: Vibrant anime-style color gradients
- **Smooth Animations**: CSS keyframe animations for smooth transitions
- **Typography**: Orbitron font from Google Fonts for futuristic look
- **Responsive Layout**: Adapts beautifully to all screen sizes

### CSS Features Used
```css
backdrop-filter: blur(10px);
background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
@keyframes slideIn { /* smooth animations */ }
```

### Color Scheme
- Primary gradient background
- Semi-transparent card overlays
- Vibrant accent colors
- High contrast for readability

## 📱 Browser Compatibility

### Desktop Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Mobile Browsers
- ✅ Chrome Mobile
- ✅ Safari iOS
- ✅ Samsung Internet
- ✅ Firefox Mobile

### Feature Support
- ✅ Touch and non-touch devices
- ✅ Geolocation API support
- ✅ LocalStorage support
- ✅ Modern CSS features (backdrop-filter)

**Note**: Geolocation accuracy may vary between desktop and mobile devices. The app displays appropriate warnings to users.

## 🚀 Deployment

This application is optimized for deployment on popular hosting platforms:

### Vercel Deployment

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Add environment variable: `VITE_OPENWEATHER_API_KEY`
4. Deploy automatically

### Netlify Deployment

1. Push your code to GitHub
2. Import repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable in Netlify dashboard

### Deployment Checklist
- ✅ No server-side code required
- ✅ Static site deployment ready
- ✅ Optimized production build
- ✅ Environment variables configured

## 🔒 Security

### Best Practices Implemented

- **API Key Protection**: Use environment variables for API keys
- **Client-Side Only**: No sensitive server-side operations
- **Input Validation**: Proper handling of user inputs
- **Error Boundaries**: Graceful error handling

### Security Recommendations

```javascript
// ✅ Good: Use environment variables
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// ❌ Bad: Hardcoded API key in source
const API_KEY = 'your_actual_api_key_here';
```

**Important**: Never commit `.env` files to version control. Add `.env` to your `.gitignore` file.

## 🧪 Development Tools

### Vite Features
- ⚡ Lightning-fast HMR (Hot Module Replacement)
- 📦 Optimized build output
- 🔌 Plugin ecosystem
- 🎯 ES module support

### Package Manager
- NPM for dependency management
- Modern ES module imports
- Automatic dependency resolution

## 🚀 Performance Optimization

- Minimized bundle size
- Lazy loading of weather icons
- Efficient state updates
- Optimized re-renders
- Production-ready builds

## 🧭 Project Structure

```
anime-weather-dashboard/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Praveen Lingam**
- GitHub: [@praveen24lingam](https://github.com/praveen24lingam)
- LinkedIn: [Praveen Lingam](https://www.linkedin.com/in/praveen-lingam24/)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://react.dev/) for the powerful UI library
- Google Fonts for the Orbitron typeface
- The anime community for design inspiration

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Contact via LinkedIn
- Check OpenWeatherMap API documentation

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!

Made with ❤️ and ☕ by Praveen Lingam
