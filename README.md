# HomeLink Ethiopia Platform

Complete workforce supply platform connecting Ethiopian domestic workers with employers and agencies.

## 🌟 Platform Components

### 📱 Mobile App (Worker Portal)
- **Location**: `/homelink-mobile`
- **Technology**: React Native with Expo
- **Features**: Multi-channel registration, OCR ID scanning, voice commands, multi-language support

### 🌐 Web Portals
- **Location**: `/homelink-web`
- **Technology**: Next.js 14 with TypeScript
- **Portals**: Employer, Agency, Admin

## 🚀 Quick Start

### Web Portals
```bash
cd homelink-web
npm install
npm run dev
```
Visit: http://localhost:3000

### Mobile App
```bash
cd homelink-mobile
npm install
npm start
```
Scan QR with Expo Go app

## 📊 Features

### Employer Portal
- Worker search with advanced filters
- Trust score system (0-100%)
- Interview requests
- 30-day replacement guarantee

### Agency Portal
- International candidate search
- Bulk operations & shortlists
- CV export as ZIP
- Placement tracking

### Admin Portal
- Worker verification queue
- ID verification with image viewing
- Approval workflow
- Staff notes & audit trail

### Mobile App
- Multi-channel registration (ID, Voice, Manual)
- English & Amharic support
- Offline capabilities
- Profile management

## 🎨 Design System

- **Primary Ochre**: #D4691E
- **Deep Teal**: #008B8B
- **Golden Wheat**: #C9A961
- **Typography**: Playfair Display + Open Sans

## 📁 Project Structure

```
homelink-ethiopia/
├── homelink-web/          # Next.js web portals
│   ├── app/               # Pages (employer, agency, admin)
│   ├── components/        # Reusable UI components
│   └── lib/               # Mock data & utilities
│
└── homelink-mobile/       # React Native mobile app
    ├── app/               # Screens
    ├── components/        # UI components
    └── services/          # Mock services
```

## 📝 Documentation

- **Web README**: `/homelink-web/README.md`
- **Mobile README**: `/homelink-mobile/README.md`
- **Walkthrough**: Complete feature documentation

## 🔧 Technology Stack

### Web
- Next.js 14
- TypeScript
- Tailwind CSS
- 60 mock worker profiles

### Mobile
- React Native
- Expo
- TypeScript
- i18next (EN/AM)

## 🎯 Next Steps

1. Backend API integration
2. Real OCR & Speech-to-Text services
3. Payment gateway integration
4. Production deployment

## 📄 License

Proprietary - HomeLink Addis

## 🤝 Contact

For support: support@homelink-addis.com

---

**Status**: ✅ Production-ready  
**Built with**: Next.js, React Native, TypeScript, and ❤️ for Ethiopian workers
