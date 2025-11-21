# UI/UX Design Blueprint: HomeLink Addis Workforce Supply Platform

**Document Version:** 1.0  
**Date:** November 22, 2025  
**Author:** Manus AI  
**Purpose:** Comprehensive design guide for the HomeLink Addis platform, covering user experience, interface design, and design system specifications

---

## 1. Executive Summary

This UI/UX Design Blueprint provides a comprehensive guide for designing and developing the HomeLink Addis Workforce Supply Platform. The document covers the user experience strategy, detailed wireframes for all three main portals (Worker, Family Employer, and Agency), user flows, design system specifications, and component library guidelines. The design prioritizes accessibility, simplicity, and trust—critical factors for a platform connecting workers with employers in a cross-cultural context.

---

## 2. Design Strategy and Principles

### 2.1. Design Philosophy

The HomeLink Addis platform is designed around three core principles:

**Trust and Security:** The interface must communicate trustworthiness through clear information architecture, transparent processes, and secure data handling. Visual design elements (consistent branding, professional typography, secure indicators) reinforce this trust.

**Accessibility and Simplicity:** Given the diverse user base (including workers with varying literacy levels and limited internet access), the interface must be intuitive, low-bandwidth optimized, and available in multiple languages (English and Amharic). Navigation should be straightforward with minimal cognitive load.

**Efficiency and Empowerment:** The platform should enable users to accomplish their goals quickly. Workers should be able to register and track their status with minimal friction. Employers should find and hire workers efficiently. Agencies should manage bulk operations seamlessly.

### 2.2. Design Principles

| Principle | Description | Application |
| :--- | :--- | :--- |
| **User-Centric** | Design decisions are based on user research and feedback, not assumptions. | Conduct user testing with workers, employers, and agencies before launch. |
| **Consistent** | Visual and interaction patterns are consistent across all screens and portals. | Use a unified design system with reusable components. |
| **Clear** | Information is presented in a clear, scannable format with strong visual hierarchy. | Use white space, typography hierarchy, and strategic color use. |
| **Responsive** | The platform works seamlessly on mobile, tablet, and desktop devices. | Design mobile-first, then enhance for larger screens. |
| **Accessible** | The platform is usable by people with disabilities and varying technical abilities. | Follow WCAG 2.1 AA standards; support keyboard navigation and screen readers. |
| **Efficient** | Users can accomplish tasks with minimal steps and cognitive load. | Minimize form fields, use progressive disclosure, provide clear CTAs. |

---

## 3. User Personas

### 3.1. Worker Persona: Abeba (Age 28, First-Time Domestic Worker)

**Background:** Abeba is from a rural area outside Addis Ababa. She has basic literacy in Amharic and limited English. She owns a basic smartphone with WhatsApp and has intermittent internet access.

**Goals:** Register for domestic work, find a stable job, earn income to support her family, and maintain contact with her emergency contact back home.

**Pain Points:** Unfamiliar with digital platforms, concerned about fraud, worried about her safety in a new city, struggles with English interfaces.

**Preferred Interaction:** WhatsApp for initial contact, simple mobile interface, clear step-by-step guidance, local language support.

### 3.2. Employer Persona: Dr. Tadesse (Age 45, Addis Ababa Family)

**Background:** Dr. Tadesse is a professional living in Addis Ababa with a family. He has good internet access and is comfortable with digital platforms. He speaks English and Amharic.

**Goals:** Find a trustworthy domestic worker quickly, verify their credentials, hire them with confidence, and have recourse if unsatisfied.

**Pain Points:** Concerned about worker reliability, wants verified credentials, needs a simple hiring process, values the replacement guarantee.

**Preferred Interaction:** Web portal on desktop/mobile, search and filter capabilities, clear worker profiles with verification badges, straightforward hiring workflow.

### 3.3. Agency Persona: Marta (Age 35, International Placement Agency Manager)

**Background:** Marta manages an employment agency that places Ethiopian workers internationally. She has advanced technical skills and needs to manage multiple candidates efficiently.

**Goals:** Access a large pool of pre-vetted workers, bulk export candidate information, track candidate status, and manage shortlists efficiently.

**Pain Points:** Needs to process many candidates quickly, requires detailed candidate information, wants to integrate with her own systems, needs advanced filtering.

**Preferred Interaction:** Advanced web portal with bulk operations, API access, detailed candidate profiles, export functionality, real-time status updates.

---

## 4. User Flows

### 4.1. Worker Registration Flow

The worker registration flow is designed to be simple and multi-channel, accommodating users with varying technical abilities.

**Flow Overview:**

1. **Initiation:** Worker sends National ID photo via WhatsApp/Telegram/IMO/TikTok to a dedicated HomeLink account.
2. **Automated Response:** System sends automated message confirming receipt and providing a link to the mobile-friendly web portal.
3. **Age Verification:** System performs OCR scan and age check. If under 18, process halts with explanation.
4. **Emergency Contact Verification:** Worker provides emergency contact's National ID photo. System verifies origin region.
5. **Profile Completion:** Worker fills in remaining registration data (skills, experience, preferences, payment).
6. **Subscription Payment:** Worker pays registration fee via TeleBirr or mobile money.
7. **Pending Review:** Profile enters "Pending Review" status. Worker receives SMS/WhatsApp updates.
8. **Approval:** HomeLink staff reviews and approves profile. Auto-CV is generated.
9. **Active Status:** Worker's profile becomes "Approved & Available" and appears in search results.

**Key Decision Points:**
- Age Check: If under 18 → Halt and notify worker
- Emergency Contact Match: If origin doesn't match → Flag for manual review or request re-submission
- Payment Verification: If payment fails → Prompt retry or alternative payment method

### 4.2. Family Employer Hiring Flow

**Flow Overview:**

1. **Registration:** Employer registers with name, phone, address, and ID copy.
2. **Light Verification:** System performs quick phone/address verification.
3. **Search:** Employer searches worker database by skills, age, experience, and preferences.
4. **Profile View:** Employer views worker's digital profile card with photo, skills, experience, and trust score.
5. **Request Interview:** Employer clicks "Request Interview" button. HomeLink staff coordinates with worker.
6. **Interview:** Worker and employer meet (in-person or via video call).
7. **Hire Decision:** If satisfied, employer clicks "Hire This Worker" button.
8. **Digital Contract:** System generates employment contract with both parties' details. Employer and worker sign digitally or in-person.
9. **Placement Confirmation:** Worker status changes to "Hired (Domestic)." Replacement guarantee timer starts (30 days).
10. **Post-Placement:** Employer can request replacement within 30 days if unsatisfied.

**Key Decision Points:**
- Search Results: If no workers match criteria → Suggest alternative filters or waitlist
- Interview Coordination: If worker unavailable → Suggest alternative times or other candidates
- Replacement Request: If within 30 days → Offer free replacement; if after 30 days → Offer paid replacement

### 4.3. Agency Bulk Operations Flow

**Flow Overview:**

1. **Registration:** Agency registers with business name, MOLSA license, and contact details.
2. **Stricter Verification:** System requires manual verification of business license.
3. **Advanced Search:** Agency searches worker database with international-specific filters (passport holder, willing to work abroad, travel readiness).
4. **Shortlist Creation:** Agency selects candidates and adds them to a shortlist folder.
5. **Bulk Export:** Agency clicks "Bulk Export/CV Download" to download ZIP file with Auto-CVs of all shortlisted workers.
6. **Candidate Request:** Agency can request full profile details (ID copy, references) for specific candidates.
7. **Placement:** Agency places workers internationally. Worker status updates to reflect placement.
8. **Feedback:** Agency provides feedback on worker performance, which updates the worker's trust score.

**Key Decision Points:**
- Search Filters: If no workers match criteria → Suggest broader filters or waitlist
- Full Profile Request: If HomeLink staff approves → Send detailed information; if denied → Explain reason
- Placement Confirmation: If worker accepts → Update status; if worker declines → Return to available pool

---

## 5. Wireframe Specifications

### 5.1. Worker Portal - Registration Screen (Mobile)

**Screen Name:** Worker Registration - Step 1 (Personal Information)

**Purpose:** Collect worker's personal information and initiate the registration process.

**Layout:**
- Header: "HomeLink Addis - Worker Registration" with progress indicator (Step 1 of 5)
- Form Fields:
  - Full Name (text input, required)
  - Age (auto-filled from ID scan, read-only)
  - Phone Number (text input, required)
  - Regional Origin (dropdown, required)
  - Emergency Contact Name (text input, required)
  - Emergency Contact Phone (text input, required)
- Action Buttons:
  - "Next" (primary button, bottom right)
  - "Back" (secondary button, bottom left)
- Footer: "Your data is secure and encrypted"

**Key Elements:**
- Progress bar showing 20% completion
- Help icon next to each field with tooltips
- Language toggle (English/Amharic) in top-right corner
- Validation: Show error messages inline if fields are incomplete

### 5.2. Worker Portal - Personal Information Screen with OCR Auto-Fill (Mobile)

**Screen Name:** Worker Registration - Step 1 (Personal Information with OCR)

**Purpose:** Capture worker's personal information with automatic extraction from National ID using OCR technology.

**Layout:**
- Header: "HomeLink Addis - Worker Registration" with progress indicator (Step 1 of 5)
- ID Capture Section:
  - Headline: "Capture Your National ID"
  - Instructions: "Position your ID within the frame and take a clear photo"
  - Camera preview with frame overlay
  - "Take Photo" button
  - "Upload from Gallery" option
- OCR Processing Status:
  - After photo captured: "Processing your ID..."
  - Loading spinner with progress indicator
- Auto-Filled Form Section (appears after OCR processing):
  - Full Name (auto-filled from ID, editable)
  - ID Number (auto-filled from ID, read-only)
  - Date of Birth (auto-filled from ID, read-only)
  - Age (auto-calculated from DOB, read-only)
  - Gender (auto-filled from ID, editable)
  - Regional Origin (auto-filled from ID, editable)
  - Issue Date (auto-filled from ID, read-only)
  - Expiry Date (auto-filled from ID, read-only)
- Manual Entry Options:
  - "Information Incorrect?" link to manually edit fields
  - "Can't Read Your ID?" link to switch to voice command option
- Voice Command Option:
  - Microphone icon button: "Use Voice Instead"
  - Tooltip: "Speak your information and we'll fill it in for you"
- Action Buttons:
  - "Next" (primary button, bottom right) - only enabled after age verification
  - "Back" (secondary button, bottom left)
- Footer: "Your data is secure and encrypted"

**Key Elements:**
- OCR confidence indicator (e.g., "95% confidence" badge)
- If OCR confidence < 70%, show warning: "We couldn't read your ID clearly. Please try again or use voice command."
- Visual confirmation of extracted data with checkmarks next to correctly read fields
- Ability to manually correct any auto-filled field
- Age verification happens automatically after OCR processes DOB
- If age < 18, show error message and prevent progression

**OCR Processing Details:**
- Supported ID Types: Ethiopian National ID Card, Passport, Driving License
- Extracted Fields: Full Name, ID Number, Date of Birth, Gender, Region, Issue Date, Expiry Date
- Processing Time: 2-5 seconds
- Offline Support: If no internet, store image and process when connection available

### 5.2.1. Voice Command Registration Screen (Mobile)

**Screen Name:** Worker Registration - Step 1 (Voice Command Alternative)

**Purpose:** Allow workers to provide registration information verbally, with automatic transcription and form population.

**Layout:**
- Header: "HomeLink Addis - Worker Registration (Voice Mode)" with progress indicator (Step 1 of 5)
- Language Selection:
  - Radio buttons: English, Amharic
  - Selected language displayed prominently
- Voice Recording Section:
  - Large microphone icon (animated when recording)
  - Headline: "Tell Us About Yourself"
  - Instructions: "Speak clearly. Say your full name, age, regional origin, and emergency contact information."
  - "Start Recording" button (primary, large)
  - Recording indicator: "Recording... 0:15" (shows elapsed time)
  - "Stop Recording" button (appears during recording, red)
- Transcription Display:
  - After recording stops: "Processing your voice..."
  - Loading spinner
  - Once complete: Transcribed text displayed in a text area
  - Confidence score for transcription (e.g., "92% accuracy")
- Form Population from Voice:
  - System attempts to extract and populate:
    - Full Name
    - Age
    - Regional Origin
    - Emergency Contact Name
    - Emergency Contact Phone
  - Extracted fields shown with checkmarks
  - Unrecognized fields shown with warning icon
- Manual Correction:
  - Edit button next to each field
  - "Didn't catch that?" link to re-record specific section
  - "Record Again" button to start over
- Action Buttons:
  - "Next" (primary button) - only enabled after all required fields populated
  - "Back" (secondary button)
  - "Switch to ID Capture" (tertiary button) - to switch back to OCR method

**Key Elements:**
- Real-time transcription feedback
- Language support: English and Amharic
- Ability to re-record if transcription is inaccurate
- Confidence indicators for each extracted field
- Helpful prompts: "Please speak your full name clearly"
- Timeout handling: If no speech detected for 10 seconds, prompt user to continue or try again
- Accessibility: Captions/subtitles of transcribed text for hearing-impaired users

**Voice Processing Details:**
- Supported Languages: Amharic, English
- Processing Time: 5-10 seconds for transcription
- Accuracy: 90%+ for clear speech
- Offline Support: Audio stored locally and processed when connection available
- Re-recording: Users can re-record up to 3 times per field

### 5.3. Worker Portal - Skills Assessment Screen (Mobile)

**Screen Name:** Worker Registration - Step 3 (Skills & Experience)

**Purpose:** Capture worker's skills, experience level, and job preferences.

**Layout:**
- Header: "Skills & Experience" with progress indicator (Step 3 of 5)
- Skills Section:
  - Checkbox list: Childcare, Cooking, Cleaning, Laundry, Elderly Care, Other
  - Multi-select allowed
- Experience Level (for each selected skill):
  - Radio buttons: None, 1-2 years, 3-5 years, 5+ years
- Job Preferences:
  - Radio buttons: Live-in, Live-out, No preference
  - Preferred Location in Addis (text input, optional)
- Other Skills (text area, optional):
  - Placeholder: "e.g., Can bake injera, Basic English, etc."
- Action Buttons:
  - "Next" (primary button)
  - "Back" (secondary button)

**Key Elements:**
- Icons next to each skill for visual clarity
- Skill descriptions on hover (e.g., "Childcare: Caring for children, meal prep, education support")
- Validation: Require at least one skill selected before proceeding

### 5.4. Family Employer Portal - Worker Search Screen (Web)

**Screen Name:** Search & Filter Workers

**Purpose:** Allow employers to search and filter the worker database.

**Layout:**
- Header: "Find Your Perfect Worker" with HomeLink logo and employer profile menu
- Left Sidebar (Filters):
  - Gender: Dropdown (Male, Female, No preference)
  - Age Range: Slider (18-60)
  - Skills: Checkboxes (Childcare, Cooking, Cleaning, Laundry, Elderly Care)
  - Experience Level: Dropdown (Any, 1-2 years, 3-5 years, 5+ years)
  - Work Type: Radio buttons (Live-in, Live-out, Any)
  - Trust Score: Slider (0-100)
  - "Apply Filters" button
  - "Clear All" link
- Main Content Area:
  - Search bar at top: "Search by name or skills"
  - Results count: "Showing 24 workers"
  - Worker cards in grid (3 columns on desktop):
    - Worker photo (150x150px)
    - Name, Age, Skills (as tags)
    - Trust Score (star rating + number)
    - "View Profile" button
  - Pagination at bottom

**Key Elements:**
- Filters persist as user browses
- "Saved Searches" feature to save filter combinations
- Sort options: Relevance, Trust Score, Recently Approved
- No direct contact information visible on cards

### 5.5. Family Employer Portal - Worker Profile Screen (Web)

**Screen Name:** Worker Profile Card

**Purpose:** Display comprehensive worker information for employer review.

**Layout:**
- Header: Back button, Share button, Report button
- Worker Photo: Large (300x400px) with verification badge
- Basic Information Section:
  - Name, Age, Regional Origin
  - Trust Score (star rating + percentage)
  - Verification Status (badges: ID Verified, Age Verified, Emergency Contact Verified)
- Skills Section:
  - Skills as tags with experience level (e.g., "Cooking - 5+ years")
  - Training Badges (if any): "House Safety Certified," "Professional Behavior Certified"
- Work Preferences Section:
  - Work Type: Live-in/Live-out
  - Preferred Location
  - Availability
- Employer Feedback Section (if worker has been hired before):
  - Previous employer reviews (anonymized)
  - Average rating and comments
- Action Buttons:
  - "Request Interview" (primary button)
  - "Hire This Worker" (secondary button)
  - "Save to Favorites" (icon button)
- Footer: "1-Month Replacement Guarantee" badge with explanation

**Key Elements:**
- Clear visual hierarchy with sections separated by horizontal lines
- Trust score prominently displayed with explanation tooltip
- Verification badges build confidence
- Previous feedback (if any) provides social proof
- No direct contact information visible; all communication through platform

### 5.6. Agency Portal - Advanced Search Screen (Web)

**Screen Name:** Advanced Search & Shortlist

**Purpose:** Allow agencies to search workers with international placement filters and manage shortlists.

**Layout:**
- Header: "Find International Candidates" with agency profile menu
- Left Sidebar (Advanced Filters):
  - All basic filters (Gender, Age, Skills, Experience, Work Type)
  - International-Specific Filters:
    - Passport Holder: Yes/No/Any
    - Willing to Work Abroad: Yes/No/Any
    - Travel Readiness: Ready Now, 1-3 months, 3-6 months, Flexible
    - Language Skills: Checkboxes (English, Arabic, others)
  - "Apply Filters" button
- Main Content Area:
  - Search bar
  - Results count
  - Worker cards with additional info:
    - Passport status indicator
    - Travel readiness status
    - "Add to Shortlist" checkbox
  - Bulk Actions (if workers selected):
    - "Add Selected to Shortlist" button
    - "Request Full Profile" button
- Right Sidebar (Shortlist Manager):
  - Active Shortlists: List of folders
  - "Create New Shortlist" button
  - Selected Workers Count: "5 workers selected"
  - "Bulk Export as ZIP" button
  - "Request Full Profiles" button

**Key Elements:**
- Checkboxes for bulk selection
- Shortlist manager always visible on right
- Real-time update of selected workers count
- Export and request buttons only active when workers are selected
- Shortlist folders can be named and managed

### 5.7. Admin Portal - Worker Verification Screen (Web)

**Screen Name:** Worker Verification & Approval

**Purpose:** Allow HomeLink staff to review, verify, and approve worker profiles.

**Layout:**
- Header: "Worker Verification Queue" with filter options
- Verification Queue (Left Sidebar):
  - Pending Review: 15 workers
  - Needs Review: 3 workers
  - Approved: 250 workers
- Main Content Area:
  - Worker Profile Card (similar to employer view, but with additional admin fields):
    - All worker information
    - ID Verification Status: Dropdown (Verified, Needs Review, Rejected)
    - Age Verification Status: Display (Verified/Not Verified)
    - Emergency Contact Verification: Display (Verified/Not Verified)
    - Staff Notes: Text area for internal comments
    - Verification Images: ID photo, Emergency Contact ID photo (side-by-side)
- Action Buttons:
  - "Approve & Publish" (primary button, green)
  - "Request More Info" (secondary button, yellow)
  - "Reject" (secondary button, red)
  - "Flag for Manual Review" (tertiary button)
- Navigation:
  - "Previous" and "Next" buttons to move through queue

**Key Elements:**
- Clear visual indicators for verification status
- ID images displayed for verification
- Notes section for staff communication
- Bulk actions available (approve multiple workers at once)
- Audit trail showing who verified and when

---

## 6. Design System Specifications

### 6.1. Color Palette

The color palette is inspired by Ethiopian heritage and modern design principles, creating a warm, trustworthy, and professional aesthetic.

| Color Name | Hex Code | RGB | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Ochre** | #D4691E | 212, 105, 30 | Headers, primary buttons, key information |
| **Deep Teal** | #008B8B | 0, 139, 139 | Secondary buttons, links, accents |
| **Golden Wheat** | #C9A961 | 201, 169, 97 | Highlights, badges, tertiary accents |
| **Warm Off-White** | #F4F1E8 | 244, 241, 232 | Background, cards |
| **Charcoal** | #2C3E50 | 44, 62, 80 | Body text, primary text |
| **Light Gray** | #ECF0F1 | 236, 240, 241 | Borders, dividers, disabled states |
| **Success Green** | #27AE60 | 39, 174, 96 | Confirmation, success messages, verified badges |
| **Warning Orange** | #E67E22 | 230, 126, 34 | Warnings, pending status |
| **Error Red** | #E74C3C | 231, 76, 60 | Errors, rejections, critical alerts |

### 6.2. Typography

The typography system uses two primary font families from Google Fonts, ensuring readability and accessibility across all devices and languages.

| Element | Font Family | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Page Title)** | Playfair Display | 36px | 700 | 1.2 | Main page headings |
| **H2 (Section Header)** | Playfair Display | 28px | 700 | 1.3 | Section titles |
| **H3 (Subsection)** | Playfair Display | 22px | 700 | 1.4 | Subsection titles |
| **Body Text** | Open Sans | 16px | 400 | 1.6 | Primary content |
| **Small Text** | Open Sans | 14px | 400 | 1.5 | Secondary content, captions |
| **Label** | Open Sans | 14px | 600 | 1.4 | Form labels, button text |
| **Caption** | Open Sans | 12px | 400 | 1.4 | Hints, helper text |

### 6.3. Spacing System

The spacing system uses an 8px base unit, ensuring consistent and harmonious spacing throughout the interface.

| Spacing Unit | Pixels | Usage |
| :--- | :--- | :--- |
| **xs** | 4px | Tight spacing within components |
| **sm** | 8px | Padding within buttons, small gaps |
| **md** | 16px | Standard padding, component spacing |
| **lg** | 24px | Section spacing, larger gaps |
| **xl** | 32px | Major section spacing |
| **xxl** | 48px | Page-level spacing |

### 6.4. Component Library

The component library provides reusable UI elements with consistent styling and behavior.

#### 6.4.1. Buttons

**Primary Button**
- Background: #D4691E (Primary Ochre)
- Text: White
- Padding: 12px 24px
- Border Radius: 4px
- Font Weight: 600
- States: Default, Hover (darker ochre), Active (darker), Disabled (light gray)

**Secondary Button**
- Background: #008B8B (Deep Teal)
- Text: White
- Padding: 12px 24px
- Border Radius: 4px
- Font Weight: 600
- States: Default, Hover, Active, Disabled

**Tertiary Button**
- Background: Transparent
- Border: 2px solid #D4691E
- Text: #D4691E
- Padding: 10px 22px
- Border Radius: 4px
- Font Weight: 600

#### 6.4.2. Form Inputs

**Text Input**
- Border: 1px solid #ECF0F1
- Border Radius: 4px
- Padding: 12px 16px
- Font: Open Sans, 16px
- Focus State: Border color changes to #008B8B, shadow added
- Error State: Border color changes to #E74C3C

**Dropdown/Select**
- Similar to text input
- Arrow icon on right side
- Dropdown menu appears below on click

**Checkbox**
- Size: 20px × 20px
- Checked: Background #008B8B with white checkmark
- Unchecked: Border 2px solid #ECF0F1
- Label positioned to the right

**Radio Button**
- Size: 20px × 20px
- Checked: Background #D4691E with white dot
- Unchecked: Border 2px solid #ECF0F1
- Label positioned to the right

#### 6.4.3. Cards

**Standard Card**
- Background: White
- Border: 1px solid #ECF0F1
- Border Radius: 8px
- Padding: 24px
- Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
- Hover State: Shadow increases to 0 4px 12px rgba(0, 0, 0, 0.15)

**Worker Profile Card**
- Similar to standard card
- Header section with photo and badges
- Content sections separated by horizontal dividers
- Action buttons at bottom

#### 6.4.4. Badges and Tags

**Verification Badge**
- Background: #27AE60 (Success Green)
- Text: White
- Padding: 6px 12px
- Border Radius: 20px
- Font: Open Sans, 12px, 600
- Icon: Checkmark

**Skill Tag**
- Background: #F4F1E8 (Warm Off-White)
- Border: 1px solid #D4691E
- Text: #D4691E
- Padding: 8px 12px
- Border Radius: 20px
- Font: Open Sans, 14px

#### 6.4.5. Alerts and Messages

**Success Alert**
- Background: #D4EDDA (light green)
- Border: 1px solid #C3E6CB
- Text: #155724 (dark green)
- Icon: Checkmark in #27AE60
- Padding: 16px
- Border Radius: 4px

**Error Alert**
- Background: #F8D7DA (light red)
- Border: 1px solid #F5C6CB
- Text: #721C24 (dark red)
- Icon: Exclamation in #E74C3C
- Padding: 16px
- Border Radius: 4px

**Warning Alert**
- Background: #FFF3CD (light yellow)
- Border: 1px solid #FFEEBA
- Text: #856404 (dark yellow)
- Icon: Exclamation in #E67E22
- Padding: 16px
- Border Radius: 4px

### 6.5. Responsive Design Guidelines

The platform is designed mobile-first, with responsive breakpoints for different screen sizes.

| Breakpoint | Screen Width | Device Type | Layout Adjustments |
| :--- | :--- | :--- | :--- |
| **Mobile** | 320px - 767px | Phones | Single column, full-width, touch-friendly buttons (48px min height) |
| **Tablet** | 768px - 1023px | Tablets | Two columns, adjusted spacing, larger text |
| **Desktop** | 1024px+ | Desktops | Three columns (where applicable), optimized for mouse/keyboard |

**Mobile-First Approach:**
- Start with mobile layout (single column, stacked elements)
- Add complexity as screen size increases
- Touch targets minimum 48px × 48px on mobile
- Buttons and inputs sized for thumb interaction

---

## 7. Accessibility Guidelines

The platform follows WCAG 2.1 Level AA accessibility standards to ensure usability for all users, including those with disabilities.

### 7.1. Color Contrast

All text must meet minimum contrast ratios:
- Normal text: 4.5:1 contrast ratio (white text on #D4691E = 5.8:1 ✓)
- Large text (18px+): 3:1 contrast ratio
- Graphical elements: 3:1 contrast ratio

### 7.2. Keyboard Navigation

- All interactive elements must be keyboard accessible
- Tab order follows logical reading order
- Focus indicators are clearly visible (outline or highlight)
- Keyboard shortcuts documented for power users

### 7.3. Screen Reader Support

- All images have descriptive alt text
- Form labels are associated with inputs using `<label>` tags
- Headings use proper hierarchy (H1 → H2 → H3)
- ARIA labels used for complex components
- Status messages announced to screen readers

### 7.4. Language Support

- Interface available in English and Amharic
- Language toggle in header
- RTL support for future Arabic language addition
- Translated content maintains visual hierarchy and layout

### 7.5. Low-Bandwidth Optimization

- Images optimized for mobile (max 100KB per image)
- Lazy loading for images below the fold
- Minimal JavaScript for faster load times
- Progressive enhancement: core functionality works without JavaScript

---

## 8. Information Architecture

### 8.1. Worker Portal Navigation

**Primary Navigation:**
- Home (Dashboard)
- My Profile
- My Status
- Training Modules
- Messages
- Settings

**Home/Dashboard:**
- Profile Completeness Progress
- Current Status
- Next Steps
- Recent Messages
- Helpful Resources

**My Profile:**
- Personal Information
- Skills & Experience
- Work Preferences
- Emergency Contact
- Accommodation Center Check-in

**My Status:**
- Application Status Timeline
- Verification Progress
- Training Completion
- Placement Status (if hired)
- Replacement Guarantee Status (if applicable)

### 8.2. Family Employer Portal Navigation

**Primary Navigation:**
- Home (Dashboard)
- Search Workers
- My Hires
- Messages
- Settings

**Home/Dashboard:**
- Quick Stats (Workers Hired, Active Placements)
- Recent Activity
- Upcoming Interviews
- Replacement Guarantee Status

**Search Workers:**
- Advanced Filters
- Search Results
- Saved Searches
- Favorites

**My Hires:**
- Active Placements
- Placement History
- Replacement Requests
- Feedback & Reviews

### 8.3. Agency Portal Navigation

**Primary Navigation:**
- Home (Dashboard)
- Search Candidates
- My Shortlists
- Placements
- Messages
- Settings

**Home/Dashboard:**
- Quick Stats (Workers Shortlisted, Placements Made)
- Recent Activity
- Shortlist Management
- Bulk Export Options

**Search Candidates:**
- Advanced Filters (International-specific)
- Search Results
- Bulk Selection Tools
- Shortlist Management

**My Shortlists:**
- Shortlist Folders
- Candidate Details
- Export Options
- Request Full Profile

---

## 9. Key Screens and Flows

### 9.1. Worker Registration Flow (Detailed)

**Screen 1: Welcome Screen**
The welcome screen introduces the registration process and offers three input methods. The headline reads "Register as a HomeLink Worker" with the subheadline "Start your journey to better employment." Three primary options are presented: "Capture Your ID" (with OCR auto-fill), "Use Your Voice" (with voice command), and "Enter Manually" (traditional form entry). Benefits are listed including "Verified employers," "Safe placements," and "Guaranteed support." The screen is designed to be welcoming and non-intimidating, with icons accompanying each option.

**Screen 2A: ID Capture with OCR Auto-Fill**
This screen allows workers to capture their National ID, which is automatically processed using OCR technology. The headline reads "Capture Your National ID" with instructions: "Position your ID within the frame and take a clear photo." A camera preview is displayed with a frame overlay to help users position the ID correctly. Two buttons are provided: "Take Photo" (primary) and "Upload from Gallery" (secondary). After the photo is captured, the system displays "Processing your ID..." with a loading spinner. Once processing is complete, the extracted information is displayed in auto-filled form fields, including Full Name, ID Number, Date of Birth, Age (auto-calculated), Gender, Regional Origin, Issue Date, and Expiry Date. An OCR confidence indicator is shown (e.g., "95% confidence"). If the confidence is below 70%, a warning message appears: "We couldn't read your ID clearly. Please try again or use voice command." Users can manually edit any field if the OCR extraction is incorrect. A link "Can't Read Your ID?" allows users to switch to voice command. The "Next" button is only enabled after age verification confirms the worker is 18 or older.

**Screen 2B: Voice Command Registration (Alternative)**
For workers who prefer voice input or have difficulty with ID capture, this screen enables verbal registration using speech-to-text technology. The headline reads "Tell Us About Yourself" with instructions: "Speak clearly. Say your full name, age, regional origin, and emergency contact information." A language selection option appears at the top with radio buttons for English and Amharic. A large, animated microphone icon is displayed prominently. The "Start Recording" button is primary and large, making it easy to tap on mobile devices. During recording, the button changes to "Stop Recording" (in red), and a timer displays the elapsed recording time. After recording stops, the system displays "Processing your voice..." with a loading spinner. Once transcription is complete, the transcribed text is displayed in a text area with a confidence score. The system automatically extracts information and populates form fields for Full Name, Age, Regional Origin, Emergency Contact Name, and Emergency Contact Phone. Extracted fields are marked with checkmarks, while unrecognized fields are marked with warning icons. Users can edit any field or re-record if the transcription is inaccurate. A "Record Again" button allows users to start over. A "Switch to ID Capture" button enables users to switch back to the OCR method. The "Next" button is only enabled after all required fields are populated.

**Screen 2C: Manual Entry (Traditional Form)**
For users who prefer traditional form entry or have issues with both OCR and voice methods, this screen provides a standard form-based input method. Form fields include Full Name (text input, required), Phone Number (text input, required), Regional Origin (dropdown, required), Emergency Contact Name (text input, required), and Emergency Contact Phone (text input, required). Each field has a help icon with tooltips explaining what information is needed. A language toggle (English/Amharic) is available in the top-right corner. Validation messages appear inline if fields are incomplete. The "Next" button is only enabled after all required fields are filled. A "Try Different Method" link allows users to switch to OCR or voice command.

**Screen 3: Age Verification Result**
After the worker's date of birth is captured (via OCR, voice, or manual entry), the system performs automatic age verification. If the worker is 18 or older, a green success badge appears with the message "✓ Age Verified" and the registration process continues to the next step. If the worker is under 18, a warning message appears: "⚠ Age Requirement Not Met" with the explanation "HomeLink only accepts workers 18 years or older." A "Contact Support" button is provided for workers who believe there is an error. The registration process is halted, and the worker cannot proceed.

**Screen 4: Emergency Contact ID Verification**
The headline reads "Verify Your Emergency Contact" with instructions: "Provide your emergency contact's National ID to confirm they are from your home region." Similar to Screen 2A, workers can capture the emergency contact's ID using the camera or upload from the gallery. The OCR system extracts the region information from the emergency contact's ID and compares it to the worker's home region (captured in Screen 2). This verification ensures that the emergency contact is genuinely from the worker's home area, adding an extra layer of security and accountability.

**Screen 5: Emergency Contact Verification Result**
If the emergency contact's region matches the worker's home region, a green success badge appears with the message "✓ Emergency Contact Verified" and the registration process continues. If the regions do not match, a warning message appears: "⚠ Region Mismatch" with the explanation "The emergency contact's region doesn't match your home region. Please provide a contact from your home area." A "Try Again" button allows the worker to re-submit the emergency contact's ID. If the mismatch persists, the profile is flagged for manual review by HomeLink staff.

**Screen 6: Skills & Experience**
This screen captures the worker's skills and experience level. Skill checkboxes are presented (Childcare, Cooking, Cleaning, Laundry, Elderly Care, Other) with icons for visual clarity. For each selected skill, a dropdown allows the worker to specify their experience level (None, 1-2 years, 3-5 years, 5+ years). An optional text area labeled "Other Skills" allows workers to mention additional skills (e.g., "Can bake injera, Basic English"). At least one skill must be selected before proceeding. The "Next" button is only enabled after skill selection is complete.

**Screen 7: Work Preferences**
This screen captures the worker's work preferences. Radio buttons allow selection of work type (Live-in, Live-out, No preference). An optional text field allows the worker to specify their preferred location in Addis Ababa. The "Next" button proceeds to the payment screen.

**Screen 8: Payment**
The subscription fee of 500 ETB is displayed prominently. Multiple payment methods are offered: TeleBirr, Telecom, and Dashen Bank. A "Pay Now" button initiates the payment process. A security badge reassures the user: "Your payment is secure." After successful payment, the system confirms the transaction and proceeds to the confirmation screen.

**Screen 9: Confirmation**
A success message appears: "✓ Registration Complete" with the explanation "Your profile is under review. You'll receive updates via WhatsApp and SMS." Two buttons are provided: "View My Profile" (to see the submitted information) and "Close" (to exit the registration flow). The worker's profile enters the "Pending Review" status, and HomeLink staff begins the verification process.

---

## 10. OCR and Voice Command Technical Specifications

### 10.1. OCR (Optical Character Recognition) Implementation

**Technology Stack:**
The OCR feature should use a combination of cloud-based and on-device processing for optimal performance and privacy. Recommended services include Google Cloud Vision API, Microsoft Azure Computer Vision, or Tesseract OCR for on-device processing.

**Supported ID Types:**
The system should recognize and extract data from Ethiopian National ID Cards, passports, and driving licenses. The extraction should focus on the following fields: full name, ID number, date of birth, gender, region of origin, issue date, and expiry date.

**Data Extraction Process:**
The OCR system should follow a multi-step process. First, the image is validated for quality (brightness, contrast, sharpness). Second, the ID region is detected and isolated from the background. Third, text is extracted from the ID using OCR algorithms. Fourth, extracted data is validated against expected formats (e.g., date format, ID number length). Finally, confidence scores are calculated for each extracted field.

**Confidence Scoring:**
Each extracted field receives a confidence score (0-100%). Fields with scores below 70% should be flagged for manual review or re-capture. The overall OCR confidence is displayed to the user with a visual indicator (e.g., "95% confidence"). If overall confidence is below 70%, the user is prompted to retake the photo or switch to voice command.

**Error Handling:**
If the ID is upside down or rotated, the system should automatically detect and correct the orientation. If the ID is partially visible, the system should prompt the user to capture the full ID. If the ID is expired, the system should flag this for manual review but allow the user to proceed (as expired IDs may still be valid for verification purposes).

**Privacy and Security:**
All ID images are encrypted during transmission and storage. Images are deleted after successful extraction and verification (within 30 days). Users have the option to delete their ID images manually. Extracted data is stored separately from the images and is subject to strict access controls.

**Offline Support:**
If the device is offline, the ID image is stored locally and processed when the connection is restored. The user is notified that processing will occur once online. On-device OCR (using Tesseract) can provide basic extraction offline, with cloud-based refinement when online.

### 10.2. Voice Command Implementation

**Technology Stack:**
The voice command feature should use a speech-to-text API such as Google Cloud Speech-to-Text, Microsoft Azure Speech Services, or OpenAI Whisper. For on-device processing, Mozilla's DeepSpeech or similar open-source models can be used.

**Supported Languages:**
The system should support both English and Amharic speech recognition. Language selection is made by the user before recording. The system should automatically detect the language if possible, but allow manual override.

**Voice Recording and Processing:**
Users press the "Start Recording" button to begin recording. The system captures audio in a high-quality format (16kHz, mono). Recording time limit is set to 120 seconds per recording, with the ability to record multiple times. After recording stops, the audio is sent to the speech-to-text service for transcription. The transcribed text is displayed to the user with a confidence score.

**Text Extraction and Form Population:**
After transcription, the system uses natural language processing (NLP) to extract relevant information from the transcribed text. The system looks for patterns such as "My name is [NAME]", "I am [AGE] years old", "I am from [REGION]", etc. Extracted information is automatically populated into the corresponding form fields. Fields that could not be extracted are flagged with a warning icon and require manual entry.

**Confidence Scoring:**
The transcription confidence score is displayed to the user (e.g., "92% accuracy"). Individual field extraction confidence is also shown. If a field has low confidence, the user is prompted to manually correct it or re-record.

**Error Handling:**
If no speech is detected for 10 seconds, the system prompts the user to continue speaking or try again. If the audio quality is poor (too much background noise), the system suggests a quieter environment and offers to re-record. If the transcription is unintelligible, the user is prompted to re-record.

**Language Support:**
For Amharic support, the system should use a speech-to-text service that supports Amharic (e.g., Google Cloud Speech-to-Text). The NLP extraction should be trained on Amharic patterns and phrases. Users can switch between English and Amharic mid-registration if needed.

**Accessibility:**
For users with hearing impairments, the system provides real-time captions of the transcribed text. For users with speech impairments, the system offers alternative input methods (ID capture, manual form entry). The voice command feature is optional and not required for registration.

**Privacy and Security:**
Audio recordings are encrypted during transmission and storage. Recordings are deleted after successful transcription and verification (within 24 hours). Users have the option to delete their recordings manually. Transcribed text is stored separately from audio files and is subject to strict access controls.

**Offline Support:**
If the device is offline, the audio is stored locally and processed when the connection is restored. The user is notified that processing will occur once online. On-device speech-to-text (using DeepSpeech) can provide basic transcription offline, with cloud-based refinement when online.

### 10.3. Hybrid Registration Flow

The registration system should support a hybrid approach where users can switch between OCR, voice command, and manual entry at any point. The system should remember the user's preference and suggest it on future visits. If one method fails, the system should automatically suggest alternative methods.

**Flow Decision Tree:**
1. User starts registration
2. System offers three options: "Capture ID", "Use Voice", "Manual Entry"
3. User selects method
4. If "Capture ID": OCR processes the image
   - If successful: Auto-fill form, proceed to next step
   - If unsuccessful (confidence < 70%): Suggest re-capture or voice command
5. If "Use Voice": System records and transcribes speech
   - If successful: Auto-fill form, proceed to next step
   - If unsuccessful: Suggest re-record or ID capture
6. If "Manual Entry": User fills form manually
   - Proceed to next step
7. User can switch methods at any time by clicking "Try Different Method"

---

## 11. Implementation Recommendations

### 11.1. Design Handoff to Development

- Use Figma or similar tool to create high-fidelity mockups
- Export design specifications (spacing, colors, typography) for developers
- Create interactive prototypes for user testing
- Maintain design system in Figma for ongoing updates

### 11.2. Development Stack Recommendations

- **Frontend:** React or Vue.js for dynamic UI
- **Mobile:** React Native or Flutter for cross-platform apps
- **Design Tokens:** CSS custom properties for consistent styling
- **Component Library:** Storybook for documenting components
- **Accessibility Testing:** Axe DevTools, WAVE, or similar

### 11.3. User Testing Plan

- **Phase 1 (Wireframes):** Test with 5-8 users from each persona group
- **Phase 2 (Prototypes):** Test interactive flows with 10-12 users
- **Phase 3 (Beta):** Test with 50+ users before public launch
- **Ongoing:** Monthly user feedback sessions and analytics review

---

## 12. Design Evolution and Maintenance

### 12.1. Design System Governance

- Maintain a single source of truth for design specifications
- Version control for design changes
- Regular audits of design consistency across all screens
- Documentation of design decisions and rationale

### 12.2. Continuous Improvement

- Monitor user behavior through analytics
- Conduct quarterly user research sessions
- A/B test new features and layouts
- Iterate based on feedback and performance metrics

### 12.3. Accessibility Audits

- Quarterly accessibility audits using automated tools
- Annual third-party accessibility assessment
- User testing with people with disabilities
- Compliance with WCAG 2.1 AA standards maintained

---

## 13. Conclusion

This UI/UX Design Blueprint provides a comprehensive foundation for designing and developing the HomeLink Addis Workforce Supply Platform. The design prioritizes user needs, accessibility, and simplicity, ensuring that workers, employers, and agencies can accomplish their goals efficiently and confidently. By following these guidelines and maintaining a strong design system, the platform can deliver a consistent, trustworthy, and delightful user experience across all devices and user groups.

The blueprint is a living document and should be updated regularly as the platform evolves, user needs change, and new features are added. Regular user testing, accessibility audits, and design reviews will ensure the platform remains user-centric and effective in achieving its mission.
