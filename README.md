
# Weather Forecast App

This project is a simple weather forecasting web application built using React and TypeScript. It allows users to search for weather data of cities using the Weatherbit API.

## Features

- Search for weather data by city name
- Display weekly weather forecast in a table
- Show detailed weather information for a selected day
- Responsive design for mobile devices
- Caching of search results for improved performance

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand

## Project Structure

```
ENOS-HIRING-TASK/
├── node_modules/
├── public/
│   └── assets/
│       └── vite.svg
├── src/
│   ├── api/
│   │   └── weatherApi.ts
│   ├── components/
│   │   ├── CityCard/
│   │   ├── Icon/
│   │   ├── Loading/
│   │   ├── Navbar/
│   │   ├── SelectCity/
│   │   ├── WeatherList/
│   │   ├── WeatherListHeaderTitleItem/
│   │   └── WeatherListItem/
│   ├── config/
│   │   └── routes.ts
│   ├── hooks/
│   │   └── UseWeather.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Layout.tsx
│   ├── store/
│   │   ├── cityStore.ts
│   │   └── weatherStore.ts
│   ├── types/
│   │   └── WeatherTypes.ts
│   ├── utils/
│   │   └── constants.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/astopaal/enos-hiring-task.git
   ```

2. Install dependencies:
   ```
   cd enos-hiring-task
   npm install
   ```

3. Create a `.env` file in the root directory and add your Weatherbit API key:
   ```
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the port Vite assigns)

## API Usage

This project uses the Weatherbit API to fetch weather data. You'll need to sign up for a free account at [Weatherbit](https://www.weatherbit.io/) to get an API key.

## Deployment

To build the project for production, run:

```
npm run build
```

The built files will be in the `dist/` directory, which you can then deploy to your preferred hosting platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
