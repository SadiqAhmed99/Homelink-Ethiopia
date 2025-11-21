Of course. Based on your request, I have integrated the new, enhanced features into the existing business plan structure.

The new features—**multi-platform registration (WhatsApp, TikTok, Telegram, IMO), mandatory age verification (18+), emergency contact ID verification from the worker's original region, and the automated CV/CV database**—have been incorporated into a significantly expanded **Section 2: Worker Registration & Management Portal**.

Here is the complete, updated business plan for the **HomeLink Addis Workforce Supply Platform**.

---

### **🎯 Comprehensive Project Prompt: HomeLink Addis Workforce Supply Platform (Updated)**

**Project Name:** HomeLink Addis - Domestic & International Workforce Supply Portal

**Core Business Model:** We are a **workforce supply company** operating in Addis Ababa. We recruit, register, house, and manage a pool of domestic workers. We supply these vetted workers to two primary customer groups:
1. **Addis Family Employers:** Directly for domestic work in their homes.
2. **Local & Foreign Employment Agencies:** As a reliable source of pre-vetted candidates for the international market.

**Guarantee:** For our **Family Employer** clients, we offer a **1-Month Free Replacement Guarantee** if the provided worker is unsatisfactory and terminated within the first 30 days of placement.

---

### **📌 1. Defined Scope & Operational Boundaries**

*   **Geographic Focus:** Launch and operate exclusively in **Addis Ababa**.
*   **Worker Type:** Focus on **domestic workers** (e.g., maids, nannies, cooks, cleaners).
*   **Infrastructure:** Start with **one centralized Accommodation & Registration Center**.
*   **Revenue Model:** Worker **Subscription Fees** for registration and access to the talent pool.
*   **Current Goal:** To be the premier **supplier of workforce**, not a full-service international migration platform at this stage.

---

### **👤 2. Worker Registration & Management Portal (Enhanced)**

The core system for building our workforce pool is enhanced with a focus on accessibility, security, and compliance.

#### A. Multi-Channel Registration & ID Intake

To maximize reach and accessibility for workers in rural areas, the registration process is expanded beyond walk-in and web portals to include popular messaging platforms.

| Channel | Worker Action | HomeLink System Action | Verification Level |
| :--- | :--- | :--- | :--- |
| **WhatsApp, TikTok, Telegram, IMO** | Worker sends **National ID photo** and basic info (Name, Age, Origin) to a dedicated number/account. | **Automated OCR/AI Scan:** Extracts ID number, Name, and Date of Birth (DOB). **Age Verification:** Compares DOB against the current date to ensure the worker is **18 years or older**. If under 18, the process is immediately halted, and an automated message is sent. | **Level 1: Digital ID & Age Verified** |
| **Walk-in Kiosks** | Worker registers via tablet with staff assistance. | **Staff-Assisted OCR/AI Scan:** Ensures high-quality ID capture and data entry. | **Level 2: Digital ID, Age, and Physical Presence Verified** |
| **Mobile-Friendly Web Portal** | Worker uploads ID photo and enters data remotely. | **Standard OCR/AI Scan** with additional checks for image authenticity. | **Level 1: Digital ID & Age Verified** |

#### B. Enhanced Verification and Compliance

The system implements strict checks to ensure worker safety and compliance with labor laws.

##### 1. Age Verification (Mandatory)
*   **Requirement:** All workers must be **18 years or older** at the time of registration.
*   **Process:** The system automatically calculates the worker's age from the National ID's Date of Birth (DOB) extracted via OCR. Any profile failing this check is flagged and prevented from proceeding to the "Approved & Available" status.

##### 2. Emergency Contact Verification (Mandatory)
*   **Requirement:** The worker must provide the **National ID of their emergency contact**.
*   **Process:**
    *   The worker submits the emergency contact's National ID photo.
    *   The system performs an **OCR scan** on the emergency contact's ID.
    *   **Verification of Origin:** The system verifies that the emergency contact's ID is from the **worker's original ruler area** (Kebele/Woreda) to confirm a genuine link to the worker's home community before they travel to Addis Ababa. This step is crucial for establishing a reliable point of contact in the worker's place of origin.

#### C. Registration Data Capture (Step-by-Step Wizard)
*   **Personal Bio-Data:** Full Name, Age, Photo, Phone Number, Regional Origin, Emergency Contact.
*   **National ID Capture:** Use the device camera to scan and upload **Kebele ID**. The system should use **OCR (Optical Character Recognition)** to auto-fill name, ID number, and DOB to minimize typing errors.
*   **Skill & Experience Self-Assessment:**
    *   Dropdown/icon selection for skills: *Childcare, Cooking, Cleaning, Laundry, Elderly Care.*
    *   Dropdown for experience level: *None, 1-2 years, 3-5 years, 5+ years.*
    *   Text field for "Other Skills" (e.g., "Can bake injera," "Basic English").
*   **Job Preferences:**
    *   Willing to work: *Live-in / Live-out*
    *   Preferred location in Addis Ababa.
*   **Medical & Background Declaration:** A mandatory "Yes/No" form for the worker to declare any known health conditions or criminal history.
*   **Subscription Fee Payment Integration:**
    *   Integrate with **TeleBirr** and other local mobile money APIs.
    *   Worker must pay the subscription fee to complete registration and activate their profile in the searchable database.
*   **Consent Agreement:** Digital signature or "I Agree" checkbox for data collection and sharing with potential employers/partner agencies.

#### D. Automated CV and CV Database Creation

The platform automatically generates a professional CV for every approved worker and maintains a centralized, shareable database.

##### 1. Auto-CV Generation
*   Upon successful verification and completion of the Skill & Experience Self-Assessment, the system automatically compiles all data into a standardized, professional CV format.
*   **CV Content:** Includes Personal Bio-Data, Verified Skills, Experience Level, Training Badges (from Orientation Modules), and the worker's **Trust Score** (if implemented).
*   **Output:** A clean, one-page PDF or digital profile card is generated.

##### 2. Centralized CV Database and Resource Sharing
*   The database serves as the single source of truth for all worker profiles.
*   **Resource Sharing:** The system is designed to share this resource with all authorized parties:
    *   **Family Employers:** Access to the worker's digital profile card (Auto-CV) via the Employer Portal.
    *   **Local & Foreign Agencies:** Access to the Auto-CV and the ability to **Bulk Export/CV Download** for shortlisted candidates via the Agency Portal.
    *   **HomeLink Staff:** Full access for management and operational purposes.
*   **Security:** Sharing is controlled by the platform, ensuring no direct contact information is revealed to employers/agencies until a formal hiring process is initiated, maintaining the platform's role as the intermediary.

#### E. Worker Status Dashboard
*   **Profile Completeness:** A visual indicator (e.g., 80% complete).
*   **Application Status:** *Pending Review, Approved & Available, Hired (Domestic), Shortlisted (Agency), Inactive.*
*   **Digital Profile Card:** A simple, printable one-page summary of the worker for quick reference.

---

### **🏠 3. Accommodation Center Module**

*   **Bed Management:** A simple system to track capacity, available beds, and assigned workers.
*   **Check-in/Check-out Log:** Log when a worker moves in or out of the center.
*   **Basic Note-Taking:** Ability for staff to add notes about a worker's stay (e.g., "Attended orientation on Oct 26").

---

### **👨‍👩‍👧‍👦 4. Addis Family Employer Portal**

A clean, simple web portal for families in Addis to find and hire domestic workers.

#### A. Registration & Vetting:
*   Employers register with: Name, Phone, Address in Addis, and a copy of their ID.
*   **Light verification** via phone number or a quick address check.

#### B. Search & Filtering:
*   Search the database of **"Approved & Available"** workers.
*   **Filters:** Gender, Age Range, Skills (Childcare, Cooking), Experience Level, Live-in/Live-out.

#### C. Worker Profile View:
*   View the worker's **Digital Profile Card** (Photo, Age, Skills, Experience, short bio).
*   **No direct contact information is shown.** All communication is funneled through the platform.

#### D. Hiring Workflow:
*   **"Request Interview" Button:** Employer requests an interview. The system notifies HomeLink staff to coordinate.
*   **"Hire This Worker" Button:** Employer formally hires the worker.
*   **Digital Contract:** The system generates a simple standard employment contract with details of both parties, to be signed digitally or in person.
*   **1-Month Replacement Guarantee Badge:** Clearly displayed on the contract and platform, building trust.

#### E. Employer Dashboard:
*   View hired workers and contract status.
*   Access to the **Replacement Request** function.

---

### **🏢 5. Local & Foreign Employment Agency Portal**

A separate portal for B2B clients who need workers for the international market.

#### A. Agency Registration & Vetting:
*   Agencies register with business name, license number (MOLSA), contact person, and phone.
*   **Stricter verification** requiring manual upload of a business license.

#### B. Advanced Search & Bulk Operations:
*   All filters from the Family Portal, plus additional filters useful for international placement (e.g., "Passport Holder," "Willing to work abroad").
*   **"Shortlist" Functionality:** Agencies can shortlist multiple candidates into a folder.
*   **Bulk Export/CV Download:** Ability to download a ZIP file containing the one-page profile cards of all shortlisted workers.

#### C. Agency Dashboard:
*   Manage their shortlists.
*   See the status of shortlisted workers (e.g., "Available," "Under Review by Another Agency," "Hired").
*   **"Request Full Profile"** button to formally request more detailed information (like full ID copy) for a specific worker, which HomeLink staff can then approve and send.

---

### **⚙️ 6. Admin & Operations Backend (HomeLink Staff Dashboard)**

The central command center for HomeLink employees.

*   **Worker Pipeline Management:** A Kanban-style board to manage worker status:
    *   *New Registration -> Under Review -> Approved -> Hired -> Inactive*
*   **Worker Profile Management:** Staff can review, edit, verify, and approve worker profiles before they go live.
*   **Client Management:** View and manage all Family Employers and Agencies.
*   **Replacement Guarantee Module:**
    *   Log replacement requests from employers.
    *   Track the reason for replacement.
    *   Assign a new worker from the available pool.
*   **Accommodation Center Management:** View check-ins/outs and bed status.
*   **Subscription Management:** Track who has paid.
*   **Reporting:** Basic reports on workers registered, workers placed (domestic/agency), revenue from subscriptions.

---

### **🔀 7. Core System Data Flow & Integration**

1.  **Worker Registers & Pays:** Worker data is captured, subscription fee is paid → Profile status becomes *"Pending Review."*
2.  **HomeLink Staff Verifies:** Staff vet the profile and documents, including the new **Age and Emergency Contact ID checks** → Manually change status to *"Approved & Available."* The worker now appears in search results, and their **Auto-CV** is generated.
3.  **Client Searches:** Family Employers and Agencies search the pool of *"Approved & Available"* workers and access their **Auto-CVs**.
4.  **Hiring Trigger:**
    *   **If a Family Employer hires:** Worker status changes to *"Hired (Domestic)."* The 1-month replacement countdown begins.
    *   **If an Agency shortlists:** Worker status remains *"Available"* but can be marked as *"Under Review by Agency"* to indicate interest.
5.  **Replacement Logic:** If a replacement is triggered within 30 days, the original worker's status is reset (e.g., to *"Available"* or *"Needs Review"*), and a new worker is assigned from the pool.

---

This document is the fully updated business plan, incorporating all your new feature requirements into the existing structure.
