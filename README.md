# Phantom Notes

A modern React Native chat application built with Expo Router, featuring disappearing messages and a clean UI with seamless navigation experience.

## Features

- **Disappearing Messages**: Core feature with configurable timers (5min, 1hr, 24hr, 7days)
- **Real-time Messaging**: Live message updates with typing indicators and status tracking
- **Visual Countdown Timers**: Animated timers showing time remaining before message deletion
- **Message Status Indicators**: Sent, delivered, read status with visual feedback
- **Modern Chat Interface**: Clean and intuitive chat UI with message bubbles
- **Expo Router**: File-based routing for React Native with type-safe navigation
- **Tab Navigation**: Bottom tab navigation with custom icons
- **Theme Support**: Dark/light theme switching with context management
- **Custom Fonts**: Montserrat font family integration
- **Firebase Integration**: Ready for backend integration
- **TypeScript**: Full TypeScript support for better development experience
- **Safe Area Handling**: Proper safe area handling for all devices

## Project Structure

```
phantom-notes/
├── app/                    # Expo Router app directory
│   ├── _layout.tsx        # Root layout (Stack navigator)
│   ├── index.tsx          # Root redirect to tabs
│   └── (tabs)/            # Tab navigation group
│       ├── _layout.tsx    # Tabs layout with bottom navigation
│       ├── chats/         # Chats tab
│       │   ├── _layout.tsx # Chat navigation layout
│       │   ├── index.tsx  # Chats list screen
│       │   └── [id].tsx   # Individual chat screen
│       └── settings/      # Settings tab
│           └── index.tsx  # Settings screen
├── components/            # Reusable components
│   ├── ChatRow.tsx       # Chat list item component
│   ├── ChatHeader.tsx    # Chat header with user info
│   ├── DisappearingTimer.tsx # Timer component for disappearing messages
│   ├── MessageInput.tsx  # Message input with timer selection
│   ├── MessageItem.tsx   # Individual message component
│   ├── MessagesList.tsx  # Messages list with FlatList optimization
│   └── TypingIndicator.tsx # Typing indicator animation
├── constants/            # App constants and styling
│   ├── Colors.ts         # Color definitions
│   ├── Styles.ts         # Global styles
│   └── Theme.ts          # Theme configuration
├── contexts/             # React contexts
│   └── ThemeContext.tsx  # Theme management context
├── hooks/                # Custom hooks
│   ├── useMessages.ts    # Messages state management
│   ├── useDisappearingMessages.ts # Disappearing messages logic
│   └── useRealTimeMessages.ts # Real-time messaging features
├── types/                # TypeScript type definitions
│   └── message.ts        # Message and chat types
└── utils/                # Utility functions
    └── messageUtils.ts   # Message utility functions
└── assets/              # Static assets
    ├── fonts/           # Custom fonts (Montserrat)
    └── data/           # Mock data
        └── chats.json  # Sample chat data
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd phantom-notes
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

4. Run on device/simulator:

   ```bash
   # iOS
   yarn ios

   # Android
   yarn android

   # Web
   yarn web
   ```

## Dependencies

### Core Dependencies

- **Expo SDK 53**: Latest Expo SDK with React Native 0.79.5
- **Expo Router 5.1.5**: File-based routing solution
- **React 19.0.0**: Latest React version
- **React Native 0.79.5**: Latest stable React Native version

### Navigation & UI

- **@react-navigation/native**: Core navigation library
- **@react-navigation/bottom-tabs**: Bottom tab navigation
- **react-native-safe-area-context**: Safe area handling
- **react-native-screens**: Native screen components
- **react-native-swiper-flatlist**: Swipeable list components

### Styling & Icons

- **@expo/vector-icons**: Icon library
- **expo-font**: Custom font loading
- **expo-system-ui**: System UI integration

### Data & Storage

- **@react-native-async-storage/async-storage**: Local storage
- **firebase**: Backend integration
- **date-fns**: Date manipulation utilities

### Animation & Gestures

- **React Native Animated**: Built-in animations for timers and UI
- **Touch Gestures**: Native touch handling

### Development Tools

- **TypeScript**: Type safety
- **expo-constants**: App constants
- **expo-linking**: Deep linking support
- **expo-splash-screen**: Splash screen management

## Development

### Code Style

- Functional components with hooks
- TypeScript for type safety
- Modular component architecture
- Clean and readable code structure

### Navigation

This project uses Expo Router for navigation, which provides:

- File-based routing
- Type-safe navigation
- Deep linking support
- Web support out of the box

### Disappearing Messages System

The core feature of Phantom Notes is its disappearing messages functionality:

- **Configurable Timers**: Choose from 5 minutes, 1 hour, 24 hours, or 7 days
- **Visual Countdown**: Real-time countdown timers with color-coded urgency
- **Automatic Deletion**: Messages are permanently removed when timer expires
- **Client & Server Enforcement**: Both client-side and server-side deletion
- **No Recovery**: Once deleted, messages cannot be recovered

### Real-time Messaging

- **Live Updates**: Real-time message synchronization
- **Typing Indicators**: Animated typing indicators
- **Message Status**: Sent, delivered, and read receipts
- **Performance Optimized**: Efficient FlatList rendering for large message lists

### Theme System

The app includes a theme context for switching between light and dark modes, with proper color management and consistent styling.

### Custom Fonts

Montserrat font family is integrated for a modern, clean typography experience.

## Building for Production

### EAS Build

```bash
# Install EAS CLI
yarn global add eas-cli

# Configure EAS
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

### Local Build

```bash
# Prebuild the project
npx expo prebuild

# Build for iOS
npx expo run:ios

# Build for Android
npx expo run:android
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
