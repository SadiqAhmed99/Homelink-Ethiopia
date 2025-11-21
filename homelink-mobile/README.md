# HomeLink Addis - Mobile App

A cross-platform mobile application for the HomeLink Addis Workforce Supply Platform, built with React Native and Expo.

## Features

- **Multi-channel Worker Registration**
  - ID capture with OCR text extraction
  - Voice command registration (English & Amharic)
  - Manual form entry
  
- **Multi-language Support**
  - English, Amharic, Oromiffa (Oromo), and Tigrinya interfaces
  - Easy language switching with toggle button
  
- **Offline Support**
  - Local data persistence
  - Draft registration saving
  
- **Modern UI/UX**
  - Ethiopian-inspired color palette
  - Accessible design (WCAG 2.1 AA)
  - Touch-friendly components (48px+ touch targets)

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: Expo Router
- **Internationalization**: i18next
- **Storage**: AsyncStorage
- **Camera**: Expo Camera
- **Audio**: Expo AV

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Expo Go app on your mobile device (for testing)

### Installation

1. Clone the repository:
```bash
cd homelink-mobile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
   - Scan the QR code with Expo Go (Android)
   - Scan the QR code with Camera app (iOS)

### Development Commands

```bash
# Start development server
npm start

# Run on Android emulator
npm run android

# Run on iOS simulator (macOS only)
npm run ios

# Run on web
npm run web
```

## Project Structure

```
homelink-mobile/
├── app/                      # Expo Router screens
│   └── registration/         # Registration flow screens
├── components/               # Reusable components
│   ├── ui/                   # Design system components
│   ├── forms/                # Form components
│   └── registration/         # Registration-specific components
├── constants/                # App constants
│   ├── Colors.ts             # Color palette
│   ├── Typography.ts         # Font styles
│   └── Spacing.ts            # Spacing system
├── services/                 # API and external services
│   ├── api.ts                # API client
│   ├── ocr.ts                # OCR service (mock)
│   ├── voice.ts              # Voice service (mock)
│   └── storage.ts            # Local storage
├── locales/                  # i18n translations
│   ├── en.json               # English translations
│   ├── am.json               # Amharic translations
│   ├── om.json               # Oromiffa translations
│   ├── ti.json               # Tigrinya translations
│   └── i18n.ts               # i18n configuration
└── types/                    # TypeScript types
```

## Key Features Implementation

### OCR ID Scanning
The app uses a mock OCR service for testing. To integrate a real OCR service:
1. Replace `services/ocr.ts` with actual OCR implementation
2. Recommended services: Google Cloud Vision API, Tesseract OCR

### Voice Command Registration
The app uses a mock voice transcription service. To integrate a real service:
1. Replace `services/voice.ts` with actual speech-to-text implementation
2. Recommended services: Google Cloud Speech-to-Text, OpenAI Whisper

### API Integration
The app uses mock API endpoints. To connect to your backend:
1. Update `API_BASE_URL` in `services/api.ts`
2. Implement authentication token management
3. Add error handling and retry logic

## Design System

### Colors
- Primary Ochre: `#D4691E`
- Deep Teal: `#008B8B`
- Golden Wheat: `#C9A961`
- Success Green: `#27AE60`
- Warning Orange: `#E67E22`
- Error Red: `#E74C3C`

### Typography
- Headings: Playfair Display (system fallback)
- Body: Open Sans (system fallback)

### Spacing
- Base unit: 8px
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, xxl: 48px

## Accessibility

- WCAG 2.1 Level AA compliant
- Minimum touch target size: 48px
- Color contrast ratios meet standards
- Screen reader support
- Keyboard navigation support

## Testing

### On Physical Device
1. Install Expo Go from App Store or Play Store
2. Run `npm start`
3. Scan QR code with Expo Go (Android) or Camera (iOS)

### On Emulator/Simulator
```bash
# Android
npm run android

# iOS (macOS only)
npm run ios
```

## Building for Production

### Android
```bash
# Build APK
eas build --platform android

# Build AAB for Play Store
eas build --platform android --profile production
```

### iOS
```bash
# Build for App Store
eas build --platform ios --profile production
```

## Environment Variables

Create a `.env` file in the root directory:
```
API_BASE_URL=https://api.homelink-addis.com
OCR_API_KEY=your_ocr_api_key
VOICE_API_KEY=your_voice_api_key
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly on both iOS and Android
4. Submit a pull request

## License

Proprietary - HomeLink Addis

## Support

For technical support, contact: support@homelink-addis.com

## Roadmap

- [ ] Real OCR integration
- [ ] Real voice-to-text integration
- [ ] Backend API integration
- [ ] Push notifications
- [ ] Biometric authentication
- [ ] Offline mode improvements
- [ ] Performance optimization
- [ ] Analytics integration
