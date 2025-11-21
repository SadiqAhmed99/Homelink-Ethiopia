# Developer Specification Document (DSD) - HomeLink Addis Workforce Supply Platform

**Document Version:** 1.0
**Date:** November 21, 2025
**Author:** Manus AI

---

## 1. Introduction

### 1.1. Purpose and Scope

This Developer Specification Document (DSD) details the technical requirements for the **HomeLink Addis Workforce Supply Platform**, focusing on the core components necessary for development. The scope covers the entire system, with a particular emphasis on the newly introduced features: multi-channel worker registration, mandatory age and emergency contact verification, and the automated CV generation and database.

### 1.2. Target Audience

This document is intended for the development team, system architects, quality assurance (QA) engineers, and project managers involved in the implementation of the HomeLink Addis platform.

### 1.3. References

*   Updated Business Plan: HomeLink Addis Workforce Supply Platform (November 2025)

---

## 2. System Architecture

### 2.1. High-Level Architecture

The system will employ a **Microservices Architecture** to ensure scalability, maintainability, and the ability to integrate diverse technologies (e.g., messaging APIs, OCR services).

| Component | Technology/Role | Description |
| :--- | :--- | :--- |
| **Frontend** | Web (React/Vue.js), Mobile (React Native/Flutter) | User interfaces for Workers, Family Employers, Agencies, and Admin Staff. |
| **Backend API Gateway** | Nginx/API Gateway Service | Single entry point for all client requests, handling authentication and routing. |
| **Core Services** | Python (Django/FastAPI) or Node.js (Express) | Handles business logic, including Worker Management, Client Management, and Placement Logic. |
| **Messaging Service** | Python/Node.js with dedicated SDKs | Handles all inbound/outbound communication with WhatsApp, Telegram, IMO, and TikTok. |
| **Verification Service** | Python/Go | Dedicated service for OCR, Age Calculation, and Geo-Verification logic. |
| **Database** | PostgreSQL (Primary), Redis (Caching) | Persistent storage for all application data, including worker profiles and CV data. |
| **File Storage** | AWS S3 or equivalent (MinIO) | Secure storage for uploaded National ID images and generated Auto-CV PDFs. |

### 2.2. Data Flow for Multi-Channel Registration (Critical Path)

1.  **Worker Initiation:** Worker sends National ID image and basic text data (Name, Origin) via a messaging platform (e.g., WhatsApp).
2.  **Messaging Service Intake:** The service receives the message, stores the image in File Storage, and sends the image path to the **Verification Service**.
3.  **Verification Service Processing:**
    *   **OCR/AI:** Extracts ID Number, Name, and Date of Birth (DOB) from the image.
    *   **Age Check:** Calculates age from DOB. If age < 18, the process is terminated, and the Messaging Service sends an automated rejection.
    *   **Emergency Contact Check:** If the worker provides the emergency contact ID, the service performs a second OCR scan and validates the ID's origin against the worker's declared "ruler area" (Kebele/Woreda) via a lookup table.
4.  **Core Service Update:** If all checks pass, the Core Service creates a new Worker Profile in the Database with status **"Pending Review"** and a verification level of **"Level 1: Digital ID & Age Verified."**
5.  **Worker Follow-up:** The Messaging Service sends a link to the Mobile-Friendly Web Portal for the worker to complete the remaining registration steps (Skills, Job Preferences, Payment).

---

## 3. Data Model (Simplified Entities)

### 3.1. Worker Entity (`Worker`)

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `worker_id` | UUID | Primary Key | Unique identifier for the worker. |
| `first_name` | String | Not Null | Extracted from ID/Input. |
| `last_name` | String | Not Null | Extracted from ID/Input. |
| `national_id_number` | String | Unique, Not Null | Extracted via OCR. |
| `date_of_birth` | Date | Not Null | Extracted via OCR. Used for age check. |
| `age_verified` | Boolean | Default: False | Set to True only if age >= 18. |
| `origin_region` | String | Not Null | Worker's home region (Kebele/Woreda). |
| `profile_status` | Enum | Pending, Approved, Hired, Inactive | Current status in the pipeline. |
| `trust_score` | Integer | Default: 0 | Dynamic score based on performance/behavior. |
| `cv_file_path` | String | Nullable | Path to the generated Auto-CV PDF in File Storage. |

### 3.2. Emergency Contact Entity (`EmergencyContact`)

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `contact_id` | UUID | Primary Key | Unique identifier. |
| `worker_id` | UUID | Foreign Key (Worker) | Links to the worker. |
| `contact_national_id` | String | Not Null | National ID of the emergency contact. |
| `id_origin_region` | String | Not Null | Region extracted from the contact's ID. |
| `origin_match` | Boolean | Not Null | True if `id_origin_region` matches `Worker.origin_region`. |
| `verification_date` | DateTime | Not Null | Timestamp of successful verification. |

---

## 4. Functional Requirements (FR)

### 4.1. Multi-Channel Registration (FR-MCR)

| ID | Requirement | Priority | Service Owner |
| :--- | :--- | :--- | :--- |
| **FR-MCR-001** | The system MUST integrate with WhatsApp, Telegram, IMO, and TikTok APIs to receive inbound messages. | High | Messaging Service |
| **FR-MCR-002** | The system MUST be able to parse text data (Name, Origin) and extract attached image files (National ID). | High | Messaging Service |
| **FR-MCR-003** | The system MUST use an OCR/AI library (e.g., Tesseract, Google Vision API) to extract text from the National ID image. | High | Verification Service |
| **FR-MCR-004** | The system MUST send an automated, platform-specific message (e.g., WhatsApp reply) to the worker upon successful initial data capture. | Medium | Messaging Service |

### 4.2. Verification and Compliance (FR-VEC)

| ID | Requirement | Priority | Service Owner |
| :--- | :--- | :--- | :--- |
| **FR-VEC-001** | The system MUST calculate the worker's age based on the extracted DOB and the current date. | Critical | Verification Service |
| **FR-VEC-002** | The system MUST halt the registration process and notify the worker if the calculated age is less than 18 years. | Critical | Verification Service |
| **FR-VEC-003** | The system MUST accept and OCR the National ID of the worker's emergency contact. | High | Verification Service |
| **FR-VEC-004** | The system MUST verify that the emergency contact's ID origin (Kebele/Woreda) matches the worker's declared origin region. | High | Verification Service |
| **FR-VEC-005** | The Admin Portal MUST provide a dashboard for staff to manually review and override verification flags if necessary. | Medium | Core Service |

### 4.3. Auto-CV and Database (FR-CV)

| ID | Requirement | Priority | Service Owner |
| :--- | :--- | :--- | :--- |
| **FR-CV-001** | The system MUST automatically generate a professional, standardized CV (PDF format) upon a worker reaching **"Approved & Available"** status. | High | Core Service |
| **FR-CV-002** | The Auto-CV MUST include all verified data: Personal Info, Skills, Experience, Training Badges, and Trust Score. | High | Core Service |
| **FR-CV-003** | The system MUST store the generated CV file in the File Storage service and update the `Worker.cv_file_path` field. | High | Core Service |
| **FR-CV-004** | The Agency Portal MUST provide a **"Bulk Export/CV Download"** function to download a ZIP file containing the Auto-CVs of all shortlisted workers. | High | Core Service |
| **FR-CV-005** | The system MUST ensure that no direct contact information (phone number, address) is visible on the Auto-CV shared with Family Employers or Agencies. | Critical | Core Service |

---

## 5. Technical Stack and Dependencies

| Category | Recommended Technology | Rationale |
| :--- | :--- | :--- |
| **Programming Language** | Python 3.11+ | Excellent for backend services, data processing, and AI/ML integration (OCR). |
| **Web Framework** | FastAPI (for APIs) / Django (for Admin Portal) | FastAPI offers high performance for microservices; Django provides a robust, built-in Admin interface. |
| **Database** | PostgreSQL | Robust, ACID-compliant, and excellent support for complex queries and JSON data types. |
| **OCR/AI** | Tesseract (Open Source) or Google Cloud Vision API (Commercial) | Tesseract for cost-effective local deployment; Google Vision for higher accuracy on varied ID formats. |
| **Messaging APIs** | Official SDKs for WhatsApp Business API, Telegram Bot API, IMO API, TikTok API | Direct integration is required for reliable, two-way communication. |
| **File Storage** | MinIO (Self-hosted S3-compatible) or AWS S3 | Scalable and secure storage for ID images and CV PDFs. |
| **Deployment** | Docker & Kubernetes (K8s) | Enables microservices deployment, scaling, and management. |
| **PDF Generation** | WeasyPrint or ReportLab (Python Libraries) | Required for generating the professional, standardized Auto-CV PDF files. |
