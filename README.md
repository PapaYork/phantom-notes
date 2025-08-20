# 🌟 Star Wars Chat App

A modern, dark-themed chat messaging application built with React Native and Expo, featuring disappearing messages and Star Wars-inspired design elements.

## ✨ Features

### 🚀 Core Functionality

- **Real-time Chat Messaging** - Send and receive messages with friends
- **Disappearing Messages** - Messages that automatically vanish after a set time
- **Typing Indicators** - See when someone is typing
- **Message Status** - Track message delivery and read status
- **Online Status** - See who's currently online

### 🎨 Design & Theme

- **Dark Theme** - Sleek dark interface throughout the app
- **Star Wars Accents** - Golden yellow accent colors inspired by lightsabers
- **Modern UI** - Clean, intuitive interface with smooth animations
- **Responsive Design** - Optimized for both mobile and tablet devices

### 🔧 Technical Features

- **Expo Router** - File-based navigation system
- **TypeScript** - Full type safety and better development experience
- **Custom Components** - Reusable UI components with consistent styling
- **Animation Support** - Smooth transitions and micro-interactions

## 🏗️ Project Structure

```
pha/
├── app/                    # Expo Router app directory
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── _layout.tsx    # Tab layout configuration
│   │   ├── chats.tsx      # Chats list screen
│   │   ├── contacts.tsx   # Contacts management screen
│   │   └── settings.tsx   # App settings screen
│   ├── chat/              # Chat conversation screens
│   │   └── [id].tsx       # Dynamic chat conversation
│   └── _layout.tsx        # Root app layout
├── constants/              # App constants and styling
│   ├── Colors.ts          # Color scheme definitions
│   └── Styles.ts          # Component styles and typography
├── App.tsx                 # Main app entry point
└── package.json            # Dependencies and scripts
```

## 🎯 Screens

### 📱 Chats Tab

- List of all chat conversations
- Unread message indicators
- Online status for contacts
- Floating action button for new chats

### 👥 Contacts Tab

- Searchable contacts list
- Contact status and phone numbers
- Quick chat access buttons
- Online/offline indicators

### ⚙️ Settings Tab

- User profile management
- App preferences (dark mode, read receipts, etc.)
- Privacy and security settings
- Disappearing message configuration

### 💬 Chat Conversation

- Real-time messaging interface
- Disappearing message support
- Typing indicators
- Message status tracking
- Star Wars-themed content

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pha
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn start
   ```

4. **Run on device/simulator**

   ```bash
   # iOS
   yarn ios

   # Android
   yarn android

   # Web
   yarn web
   ```

## 🎨 Customization

### Colors

The app uses a comprehensive color system defined in `constants/Colors.ts`:

- **Primary Colors**: Deep blacks and dark grays
- **Accent Colors**: Star Wars-inspired golden yellows
- **Status Colors**: Success, warning, error, and info colors
- **Chat Colors**: Special colors for different message types

### Styles

Component styles are organized in `constants/Styles.ts`:

- **Typography**: Consistent text styles and sizes
- **Buttons**: Various button styles (primary, secondary, outline, ghost)
- **Cards**: Card and surface styling
- **Layout**: Common layout utilities
- **Animations**: Reusable animation configurations

## 🔧 Dependencies

### Core Dependencies

- `expo` - React Native development platform
- `expo-router` - File-based routing for Expo
- `react-native` - React Native framework
- `@expo/vector-icons` - Icon library

### Navigation & UI

- `react-native-safe-area-context` - Safe area handling
- `react-native-screens` - Native screen components
- `expo-linking` - Deep linking support

## 📱 Platform Support

- ✅ iOS
- ✅ Android
- ✅ Web (with some limitations)

## 🎭 Star Wars Theme

The app features:

- **Character Names**: Luke Skywalker, Princess Leia, Han Solo, etc.
- **Star Wars Quotes**: Iconic lines from the movies
- **Golden Accents**: Lightsaber-inspired yellow highlights
- **Dark Aesthetic**: Space-themed dark interface

## 🔮 Future Enhancements

- [ ] Voice messages
- [ ] Video calls
- [ ] File sharing
- [ ] Group chats
- [ ] End-to-end encryption
- [ ] Push notifications
- [ ] Message reactions
- [ ] Custom themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Star Wars franchise for inspiration
- Expo team for the amazing development platform
- React Native community for continuous improvements

---

**May the Force be with you!** ⚡
