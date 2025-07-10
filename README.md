# Let me Ask

Application developed during a **Rocketseat** event for creating and managing Q&A rooms with real-time audio recording capabilities.

## 🚀 Technologies Used

### Core
- **React 19** - Library for building user interfaces
- **TypeScript** - JavaScript superset with static typing
- **Vite 7** - Build tool and dev server

### Routing & State Management
- **React Router DOM** - Client-side routing
- **TanStack Query (React Query)** - Server state management and caching

### Form Management & Validation
- **React Hook Form** - Performant form library with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolvers for React Hook Form

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui** - Accessible and customizable components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icons
- **Class Variance Authority** - Class variants utility

### Audio & Media
- **Web Audio API** - Browser native audio recording
- **MediaRecorder API** - Audio stream recording and processing
- **MediaStream API** - Microphone access and stream management

### Date & Time
- **Day.js** - Lightweight date library with relative time formatting

### Code Quality
- **Biome** - Modern linter and formatter
- **ESLint** - Additional linting rules

## 🎯 Features

### Core Features
- ✅ Room creation and management
- ✅ Question submission with validation
- ✅ Real-time question listing
- ✅ Responsive interface design
- ✅ Page navigation and routing

### Audio Features
- ✅ Real-time audio recording
- ✅ Automatic audio chunking (10-second intervals)
- ✅ Audio stream management
- ✅ Microphone access control
- ✅ Audio upload to backend

### Form & Validation
- ✅ Form validation with Zod schemas
- ✅ Real-time validation feedback
- ✅ Error handling and display
- ✅ Loading states management

### UI/UX Features
- ✅ Modern and accessible UI components
- ✅ Consistent icon system
- ✅ Relative time formatting
- ✅ Loading and error states
- ✅ Responsive design

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/               # Reusable UI components (Button, Card, Form, etc.)
│   ├── question-form.tsx # Question submission form
│   ├── question-item.tsx # Individual question display
│   ├── room-list.tsx     # Room listing component
│   └── create-room-form.tsx # Room creation form
├── http/
│   ├── types/            # TypeScript API response types
│   ├── use-rooms.ts      # Rooms data fetching hook
│   └── use-create-question.ts # Question creation mutation
├── lib/
│   ├── utils.ts          # Utility functions
│   └── dayjs.ts          # Date formatting configuration
├── pages/
│   ├── create-room.tsx   # Room creation page
│   ├── room.tsx          # Room details and Q&A interface
│   └── record-room-audio.tsx # Audio recording page
├── app.tsx               # Main app configuration and routing
└── main.tsx              # Application entry point
```


## ⚙️ Setup and Configuration

### Prerequisites
- Node.js (version 18+)
- npm, yarn or pnpm
- Modern browser with MediaRecorder API support

### Installation

1. Clone the repository and navigate to the project folder:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure the backend server:
   - Make sure the server is running on `http://localhost:3333`
   - Ensure the following endpoints are available:
     - `GET /rooms` - List rooms
     - `POST /rooms` - Create room
     - `POST /rooms/:id/questions` - Create question
     - `POST /rooms/:id/audio` - Upload audio

### Running the Project

```bash
# Development mode
npm run dev

# Production build
npm run build

# Build preview
npm run preview

# Linting
npm run lint
```

### Important Configurations

- **Backend URL**: Frontend is configured to consume APIs from `http://localhost:3333`
- **Audio Recording**: Supports WebM format with 64kbps bitrate
- **Microphone Access**: Requires HTTPS in production for security
- **Tailwind**: Custom configuration with CSS variables
- **TypeScript**: Strict configuration enabled
- **Vite**: Hot reload and fast refresh configured

## 🎤 Audio Recording

The application includes advanced audio recording capabilities:

- **Stream Management**: Proper microphone access and cleanup
- **Chunked Recording**: Automatic 10-second audio segments
- **Format Support**: WebM audio format for broad compatibility
- **Upload Integration**: Seamless backend integration for audio processing
- **Browser Compatibility**: Works with modern browsers supporting MediaRecorder API

## 🔐 Browser Permissions

The audio recording feature requires:
- **Microphone Permission**: User must grant microphone access
- **HTTPS Connection**: Required for production environments
- **Modern Browser**: Chrome 49+, Firefox 25+, Safari 14.1+



