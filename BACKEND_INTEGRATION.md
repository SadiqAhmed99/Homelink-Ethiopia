# Backend Integration Guide

This guide will help you integrate the HomeLink Ethiopia platform with a real backend API.

## 🎯 Overview

Currently, the platform uses **mock data and services**. This guide shows you how to replace them with real backend APIs.

---

## 📋 Prerequisites

Before starting backend integration:

1. **Backend API** running (REST or GraphQL)
2. **Database** set up (PostgreSQL recommended)
3. **Authentication** system (JWT recommended)
4. **File storage** (AWS S3, MinIO, or similar)
5. **Environment variables** configured

---

## 🔧 Step 1: Set Up Environment Variables

### Web Portal (`.env.local`)
```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://api.homelink-addis.com
NEXT_PUBLIC_API_VERSION=v1

# Authentication
NEXT_PUBLIC_AUTH_DOMAIN=auth.homelink-addis.com
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# File Storage
NEXT_PUBLIC_S3_BUCKET=homelink-uploads
NEXT_PUBLIC_S3_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key

# External Services
GOOGLE_VISION_API_KEY=your-google-vision-key
GOOGLE_SPEECH_API_KEY=your-google-speech-key

# Payment Gateways
TELEBIRR_API_KEY=your-telebirr-key
TELEBIRR_SECRET=your-telebirr-secret
```

### Mobile App (`.env`)
```bash
# API Configuration
API_BASE_URL=https://api.homelink-addis.com
API_VERSION=v1

# External Services
GOOGLE_VISION_API_KEY=your-google-vision-key
GOOGLE_SPEECH_API_KEY=your-google-speech-key
```

---

## 🌐 Step 2: Replace Mock Data with API Calls

### Web Portal

#### Replace Mock Workers (`lib/mock-data/workers.ts`)

**Before (Mock)**:
```typescript
import { mockWorkers } from '@/lib/mock-data/workers';
const workers = mockWorkers;
```

**After (Real API)**:
```typescript
// lib/api/workers.ts
export async function fetchWorkers(filters?: WorkerFilters) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/workers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(filters),
  });
  
  if (!response.ok) throw new Error('Failed to fetch workers');
  return response.json();
}

export async function fetchWorkerById(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/workers/${id}`, {
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`,
    },
  });
  
  if (!response.ok) throw new Error('Failed to fetch worker');
  return response.json();
}
```

**Usage in Components**:
```typescript
'use client';
import { useEffect, useState } from 'react';
import { fetchWorkers } from '@/lib/api/workers';

export default function SearchPage() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadWorkers() {
      try {
        const data = await fetchWorkers(filters);
        setWorkers(data);
      } catch (error) {
        console.error('Error loading workers:', error);
      } finally {
        setLoading(false);
      }
    }
    loadWorkers();
  }, [filters]);
  
  // ... rest of component
}
```

---

## 📱 Step 3: Mobile App - Replace Mock Services

### OCR Service (`services/ocr.ts`)

**Before (Mock)**:
```typescript
export async function processIDImage(imageUri: string) {
  // Mock implementation
  return mockData;
}
```

**After (Real API)**:
```typescript
import { GOOGLE_VISION_API_KEY, API_BASE_URL } from '@env';

export async function processIDImage(imageUri: string) {
  // Upload image to your backend
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'id-image.jpg',
  } as any);
  
  const response = await fetch(`${API_BASE_URL}/api/v1/ocr/process-id`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${await getAuthToken()}`,
    },
    body: formData,
  });
  
  if (!response.ok) throw new Error('OCR processing failed');
  return response.json();
}
```

### Voice Service (`services/voice.ts`)

**After (Real API)**:
```typescript
export async function transcribeAudio(audioUri: string, language: 'en' | 'am') {
  const formData = new FormData();
  formData.append('audio', {
    uri: audioUri,
    type: 'audio/m4a',
    name: 'voice-recording.m4a',
  } as any);
  formData.append('language', language);
  
  const response = await fetch(`${API_BASE_URL}/api/v1/voice/transcribe`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${await getAuthToken()}`,
    },
    body: formData,
  });
  
  if (!response.ok) throw new Error('Transcription failed');
  return response.json();
}
```

---

## 🔐 Step 4: Implement Authentication

### Web Portal - NextAuth.js

**Install**:
```bash
npm install next-auth
```

**Create `app/api/auth/[...nextauth]/route.ts`**:
```typescript
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
        
        const user = await res.json();
        if (res.ok && user) return user;
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.accessToken = user.accessToken;
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
```

### Mobile App - AsyncStorage

**Create `services/auth.ts`**:
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  
  if (!response.ok) throw new Error('Login failed');
  
  const { token, user } = await response.json();
  await AsyncStorage.setItem('authToken', token);
  await AsyncStorage.setItem('userData', JSON.stringify(user));
  
  return { token, user };
}

export async function getAuthToken() {
  return await AsyncStorage.getItem('authToken');
}
```

---

## 💾 Step 5: Database Schema

### PostgreSQL Tables

```sql
-- Workers table
CREATE TABLE workers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 18),
  gender VARCHAR(10) NOT NULL,
  region VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL UNIQUE,
  photo_url TEXT,
  
  -- Verification
  id_verified BOOLEAN DEFAULT FALSE,
  age_verified BOOLEAN DEFAULT FALSE,
  emergency_contact_verified BOOLEAN DEFAULT FALSE,
  trust_score INTEGER DEFAULT 60 CHECK (trust_score >= 0 AND trust_score <= 100),
  
  -- Status
  status VARCHAR(50) DEFAULT 'Pending Review',
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Skills table
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  worker_id UUID REFERENCES workers(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  experience_level VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Emergency contacts table
CREATE TABLE emergency_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  worker_id UUID REFERENCES workers(id) ON DELETE CASCADE,
  full_name VARCHAR(255) NOT NULL,
  relationship VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  region VARCHAR(100) NOT NULL,
  id_image_url TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Verification images table
CREATE TABLE verification_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  worker_id UUID REFERENCES workers(id) ON DELETE CASCADE,
  image_type VARCHAR(50) NOT NULL, -- 'national_id', 'emergency_contact_id'
  image_url TEXT NOT NULL,
  uploaded_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🚀 Step 6: API Endpoints to Implement

### Required Backend Endpoints

#### Workers
- `POST /api/v1/workers` - Create worker
- `GET /api/v1/workers` - List workers (with filters)
- `GET /api/v1/workers/:id` - Get worker by ID
- `PUT /api/v1/workers/:id` - Update worker
- `DELETE /api/v1/workers/:id` - Delete worker

#### Authentication
- `POST /api/v1/auth/register` - Register user
- `POST /api/v1/auth/login` - Login
- `POST /api/v1/auth/logout` - Logout
- `POST /api/v1/auth/refresh` - Refresh token

#### Verification (Admin)
- `GET /api/v1/admin/verification/queue` - Get verification queue
- `PUT /api/v1/admin/verification/:workerId/approve` - Approve worker
- `PUT /api/v1/admin/verification/:workerId/reject` - Reject worker
- `POST /api/v1/admin/verification/:workerId/request-info` - Request more info

#### OCR & Voice
- `POST /api/v1/ocr/process-id` - Process ID image
- `POST /api/v1/voice/transcribe` - Transcribe audio

#### Payments
- `POST /api/v1/payments/initiate` - Initiate payment
- `GET /api/v1/payments/:id/status` - Check payment status

---

## 📦 Step 7: File Upload to S3

### Web Portal

```typescript
// lib/api/upload.ts
import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_S3_REGION,
});

export async function uploadImage(file: File, folder: string) {
  const key = `${folder}/${Date.now()}-${file.name}`;
  
  const params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET!,
    Key: key,
    Body: file,
    ContentType: file.type,
    ACL: 'private',
  };
  
  const result = await s3.upload(params).promise();
  return result.Location;
}
```

---

## ✅ Testing Checklist

After integration:

- [ ] Test worker registration flow end-to-end
- [ ] Verify authentication works (login/logout)
- [ ] Test file uploads (ID images)
- [ ] Verify OCR integration
- [ ] Test voice transcription
- [ ] Check payment integration
- [ ] Test admin verification workflow
- [ ] Verify all filters work with real data
- [ ] Test error handling
- [ ] Check loading states
- [ ] Verify mobile app works with real API

---

## 🐛 Common Issues

### CORS Errors
Add CORS headers to your backend:
```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://homelink-addis.com'],
  credentials: true,
}));
```

### Authentication Errors
Ensure JWT tokens are properly included in headers:
```typescript
headers: {
  'Authorization': `Bearer ${token}`,
}
```

### File Upload Errors
Check file size limits and MIME types on backend.

---

## 📚 Resources

- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [NextAuth.js](https://next-auth.js.org/)
- [AWS SDK for JavaScript](https://docs.aws.amazon.com/sdk-for-javascript/)
- [Google Cloud Vision API](https://cloud.google.com/vision/docs)
- [Google Cloud Speech-to-Text](https://cloud.google.com/speech-to-text/docs)

---

**Need Help?** Contact: dev@homelink-addis.com
