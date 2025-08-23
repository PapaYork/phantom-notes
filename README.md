# Phantom Notes

A React Native app built with Expo Router for seamless navigation and modern mobile development.

## Project Structure

```
app/
├── _layout.tsx          # Root layout (Stack navigator)
├── index.tsx            # Root redirect to tabs
└── (tabs)/              # Tab navigation group
    ├── _layout.tsx      # Tabs layout
    ├── chats/           # Chats tab
    │   └── index.tsx    # Chats screen
    ├── feed/            # Feed tab
    │   └── index.tsx    # Feed screen
    └── settings/        # Settings tab
        └── index.tsx    # Settings screen
```

## Features

- **Expo Router**: File-based routing for React Native
- **Tab Navigation**: Bottom tab navigation with icons
- **Clean Architecture**: Modular component structure
- **TypeScript**: Full TypeScript support
- **Safe Area**: Proper safe area handling for all devices

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

3. Run on device/simulator:
   ```bash
   npm run ios
   npm run android
   ```

## Dependencies

- Expo SDK 53
- React Native 0.79.5
- Expo Router 5.1.5
- React Native Safe Area Context
- React Native Screens

## Development

This project uses Expo Router for navigation, which provides:

- File-based routing
- Type-safe navigation
- Deep linking support
- Web support out of the box

The app structure follows Expo Router conventions with:

- `(tabs)` for tab navigation
- `_layout.tsx` files for navigation configuration
- `index.tsx` files for default screens
