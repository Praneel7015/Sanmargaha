# 📄 Website Structure (Organized Spec)

## 1. 🌐 Global Layout

### Header (Top Navigation Bar)

* **Logo** (top left)
* **Navigation Menu:**

  * Home
  * About Us
  * Courses
  * Our Presence
  * Blogs
  * Testimonials
  * Contact

---

## 2. 📑 Pages & Sections

### 🏠 Home Page

**Purpose:** Landing page introducing the platform

**Sections:**

* Hero Section (headline + CTA)
* Brief Overview / Summary
* Highlighted Courses
* Call-to-Action (Enroll / Contact)

---

### ℹ️ About Us Page

**Subsections:**

* Intro
* Founders / Team
* Faculties

**Notes for Developer:**

* Each subsection can be anchor-linked or separate components
* Consider cards or profile layouts for team/faculty

---

### 📚 Courses Page

**Structure:** Courses are grouped by class levels

#### Course Categories:

* State Board
* CBSE
* ICSE
* IB
* IGCSE

#### Sub-categories (for each category):

* KG to 3rd
* 4th to 7th
* 8th to 10th
* 11th & 12th

#### Special Offering:

* Individual Coaching

**Developer Notes:**

* Use filterable UI (by class / board / type)
* Each course should include:

  * Title
  * Description
  * Duration
  * CTA (Enroll / Learn More)

---

### 🌍 Our Presence Page

**Locations / Branches:**

* Belagavi
* Dharwad
* EduHabitat in Bengaluru

**Developer Notes:**

* Map integration (optional)
* Each location card should include:

  * Address
  * Contact info
  * Image (optional)

---

### 📞 Contact Page

**Fields:**

* Name
* Phone Number
* Email ID

---

## 3. ⚙️ Additional Notes for Developer

### 📌 Navigation Behaviour

* Sticky header recommended
* Mobile responsive hamburger menu

### 📌 Suggested Components

* Reusable card components (courses, faculty, locations)
* Form validation for contact page
* Dynamic filtering for courses

