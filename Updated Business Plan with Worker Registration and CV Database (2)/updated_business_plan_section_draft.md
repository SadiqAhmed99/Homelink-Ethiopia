## 2. Worker Registration & Management Portal (Enhanced)

The core system for building our workforce pool is enhanced with a focus on accessibility, security, and compliance.

### A. Multi-Channel Registration & ID Intake

To maximize reach and accessibility for workers in rural areas, the registration process is expanded beyond walk-in and web portals to include popular messaging platforms.

| Channel | Worker Action | HomeLink System Action | Verification Level |
| :--- | :--- | :--- | :--- |
| **WhatsApp, Telegram, IMO, TikTok** | Worker sends **National ID photo** and basic info (Name, Age, Origin) to a dedicated number/account. | **Automated OCR/AI Scan:** Extracts ID number, Name, and Date of Birth (DOB). **Age Verification:** Compares DOB against the current date to ensure the worker is **18 years or older**. If under 18, the process is immediately halted, and an automated message is sent. | **Level 1: Digital ID & Age Verified** |
| **Walk-in Kiosks** | Worker registers via tablet with staff assistance. | **Staff-Assisted OCR/AI Scan:** Ensures high-quality ID capture and data entry. | **Level 2: Digital ID, Age, and Physical Presence Verified** |
| **Mobile-Friendly Web Portal** | Worker uploads ID photo and enters data remotely. | **Standard OCR/AI Scan** with additional checks for image authenticity. | **Level 1: Digital ID & Age Verified** |

### B. Enhanced Verification and Compliance

The system implements strict checks to ensure worker safety and compliance with labor laws.

#### 1. Age Verification (Mandatory)
*   **Requirement:** All workers must be **18 years or older** at the time of registration.
*   **Process:** The system automatically calculates the worker's age from the National ID's Date of Birth (DOB) extracted via OCR. Any profile failing this check is flagged and prevented from proceeding to the "Approved & Available" status.

#### 2. Emergency Contact Verification (Mandatory)
*   **Requirement:** The worker must provide the **National ID of their emergency contact**.
*   **Process:**
    *   The worker submits the emergency contact's National ID photo.
    *   The system performs an **OCR scan** on the emergency contact's ID.
    *   **Verification of Origin:** The system verifies that the emergency contact's ID is from the **worker's original ruler area** (Kebele/Woreda) to confirm a genuine link to the worker's home community before they travel to Addis Ababa. This step is crucial for establishing a reliable point of contact in the worker's place of origin.

### C. Automated CV and CV Database Creation

The platform automatically generates a professional CV for every approved worker and maintains a centralized, shareable database.

#### 1. Auto-CV Generation
*   Upon successful verification and completion of the Skill & Experience Self-Assessment, the system automatically compiles all data into a standardized, professional CV format.
*   **CV Content:** Includes Personal Bio-Data, Verified Skills, Experience Level, Training Badges (from Orientation Modules), and the worker's **Trust Score**.
*   **Output:** A clean, one-page PDF or digital profile card is generated.

#### 2. Centralized CV Database and Resource Sharing
*   The database serves as the single source of truth for all worker profiles.
*   **Resource Sharing:** The system is designed to share this resource with all authorized parties:
    *   **Family Employers:** Access to the worker's digital profile card (Auto-CV) via the Employer Portal.
    *   **Local & Foreign Agencies:** Access to the Auto-CV and the ability to **Bulk Export/CV Download** for shortlisted candidates via the Agency Portal.
    *   **HomeLink Staff:** Full access for management and operational purposes.
*   **Security:** Sharing is controlled by the platform, ensuring no direct contact information is revealed to employers/agencies until a formal hiring process is initiated, maintaining the platform's role as the intermediary.
