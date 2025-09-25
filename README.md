# 🏥Doctor Appointment Booking System (MERN Stack)

### A full-stack Doctor Appointment Booking Platform built with MongoDB, Express.js, React, and Node.js (MERN). The system includes frontend (patient-facing website), backend APIs, admin panel, and doctor panel.


<img width="1848" height="886" alt="Screenshot (27)" src="https://github.com/user-attachments/assets/543db7e9-a749-43c5-abeb-2e248af672d1" />

## 🚀 Features
## 👨‍💻 Frontend (React + Tailwind CSS)

- Responsive UI with Tailwind CSS
- Components & Pages structure
- Patient-facing features:
- Browse all doctors
- Book appointments online
- View & update patient profile
- Cancel appointments
- Make secure online payments

## 🛠 Backend (Node.js + Express + MongoDB)

- REST APIs with Express.js
- MongoDB models:
- Doctors
- Patients/Users
- Appointments
- Authentication & Authorization (Admin, Doctor, Patient)
- Secure data storage

## 📋 Admin Panel

- Admin login
- Add new doctors
- Manage doctors list
- View & manage appointments
- Dashboard for statistics
- Doctor Panel
- Doctor login
- Manage & view appointments
- Update profile data
- Dashboard view

  
# ⚙️ Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT / bcrypt
- Payments: Online Payment Gateway (e.g., Stripe, Razorpay)

```
project-root/
│── backend/        # Node.js + Express server
│   ├── models/     # MongoDB schemas
│   ├── routes/     # Express routes
│   ├── controllers/ # API logic
│   └── .env        # Backend environment variables
│
│── frontend/       # React + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── .env        # Frontend environment variables
│
├── .gitignore
├── README.md
```
# 🔑 Environment Variables
```
Create a .env file in both frontend/ and backend/.

Backend .env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PAYMENT_KEY=your_payment_gateway_key


Frontend .env

REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_PAYMENT_KEY=your_payment_gateway_key

```


# 🛠 Installation & Setup
```

1️⃣ Clone the repo
git clone https://github.com/yourusername/doctor-appointment-mern.git
cd doctor-appointment-mern

2️⃣ Setup Backend
cd backend
npm install
npm start

3️⃣ Setup Frontend
cd frontend
npm install
npm npm run dev

```
