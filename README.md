# 🌟 ThrivePulse - Team Health Dashboard

**A comprehensive team wellness and productivity platform combining mental health tracking, task management, and real-time analytics.**

## 🚀 Features

### 🎯 Core Functionality
- **Real-time Mood Tracking** with interactive slider and history visualization
- **Task Management** with workload tracking and completion analytics  
- **Team Metrics Dashboard** with wellness vs productivity insights
- **AI Therapist Bot** with intelligent conversation and session scheduling
- **Anonymous Messaging** for safe team feedback
- **Motivational System** with wellness reminders and positive reinforcement

### 📊 Unique Features
- **Team Pulse Radar Chart** - Multi-dimensional team health assessment
- **Wellness vs Productivity Correlation** - Track the relationship between mood and output
- **Burnout Detection** - Automatic alerts for at-risk team members
- **Real-time Activity Monitor** - Live updates of team member activities
- **Gamified Wellness Rewards** - Recognition for positive wellness behaviors

### 🔐 Security & Privacy
- **Firebase Authentication** with secure token-based API access
- **Anonymous Messaging** with zero-trace feedback system
- **Role-based Access Control** for different user types
- **Real-time Data Sync** across all connected clients

## 🛠 Tech Stack

### Frontend
- **React 18** with functional components and hooks
- **Tailwind CSS** for modern, responsive UI design
- **Chart.js + react-chartjs-2** for interactive data visualizations
- **Lucide React** for beautiful, consistent icons
- **React Router** for client-side navigation

### Backend
- **Node.js + Express** for robust API server
- **Firebase Admin SDK** for backend authentication and database
- **Cloud Firestore** for real-time data storage
- **CORS & Helmet** for security
- **Rate Limiting** for API protection

### Deployment
- **Vercel** for seamless full-stack deployment
- **Serverless Functions** for automatic scaling
- **Firebase Hosting** compatible for alternative deployment

## 📋 Prerequisites

- Node.js 16+ and npm
- Firebase project with Firestore and Authentication enabled
- Git for version control

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd thrivepulse
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all project dependencies
npm run install-all
```

### 3. Firebase Setup
1. Create a Firebase project at https://console.firebase.google.com
2. Enable **Authentication** with Email/Password provider
3. Enable **Cloud Firestore** database
4. Download service account key from Project Settings > Service Accounts
5. Copy your Firebase config from Project Settings > General

### 4. Environment Configuration

Create `client/.env.local`:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef
REACT_APP_API_URL=http://localhost:3001
```

Create `api/.env`:
```env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
```

### 5. Start Development Servers
```bash
# Start both frontend and backend
npm run dev

# Or start individually:
npm run client  # Frontend on localhost:3000
npm run server  # Backend on localhost:3001
```

## 🎯 Usage Guide

### For Team Members
1. **Sign up** with email and password
2. **Complete daily mood check-ins** using the intuitive slider
3. **Manage tasks** and track workload
4. **Chat with AI therapist** for immediate support
5. **Send anonymous feedback** to leadership
6. **View personal wellness trends** and insights

### For Team Leaders  
1. **Monitor team wellness metrics** in real-time
2. **Track productivity correlations** with team mood
3. **Receive burnout alerts** for at-risk members
4. **Review anonymous feedback** and take action
5. **Schedule team wellness sessions**
6. **Generate detailed wellness reports**

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/verify` - Verify Firebase token
- `GET /api/users/profile` - Get user profile
- `POST /api/users/profile` - Update user profile

### Mood Tracking
- `POST /api/mood/checkin` - Record mood check-in
- `GET /api/mood/history` - Get user mood history

### Task Management
- `GET /api/tasks` - Get user tasks
- `POST /api/tasks` - Create new task
- `PATCH /api/tasks/:id` - Update task status

### Team Analytics
- `GET /api/metrics/team` - Get team wellness metrics
- `POST /api/messages/anonymous` - Send anonymous message

### Therapist Sessions
- `POST /api/therapist/session` - Schedule session
- `GET /api/therapist/sessions` - Get user sessions

## 📊 Data Models

### User Profile
```javascript
{
  name: "John Doe",
  email: "john@company.com", 
  role: "employee", // employee, manager, admin
  department: "engineering",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Mood Check-in
```javascript
{
  userId: "user123",
  mood: 8, // 1-10 scale
  notes: "Feeling great today!",
  anonymous: false,
  timestamp: timestamp,
  date: "2024-01-15"
}
```

### Task
```javascript
{
  title: "Complete project proposal",
  description: "Draft and review proposal",
  assignee: "user123",
  status: "pending", // pending, in_progress, completed
  priority: "high", // low, medium, high
  category: "work",
  createdAt: timestamp,
  dueDate: timestamp,
  completedAt: timestamp
}
```

## 🚢 Deployment

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Manual Deployment
```bash
# Build the client
cd client && npm run build

# Deploy to Vercel
npx vercel --prod
```

### Environment Variables for Production
Add these in your Vercel dashboard:
- All Firebase configuration variables
- `NODE_ENV=production`
- `REACT_APP_API_URL=https://your-app.vercel.app`

## 🔒 Security Considerations

- All API endpoints require Firebase authentication
- Anonymous messages are truly anonymous (no user tracking)
- Sensitive data is encrypted in transit and at rest
- Rate limiting prevents API abuse
- CORS configured for production domains only

## 🎨 Customization

### Theming
- Modify `client/tailwind.config.js` for color schemes
- Update `client/src/App.css` for custom animations
- Customize charts in component files

### Adding Features
- Extend API endpoints in `api/index.js`
- Add new dashboard components in `client/src/components/dashboard/`
- Modify database schema as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation
- Review Firebase setup guides

## 🌟 Acknowledgments

- Firebase for backend infrastructure
- Chart.js for data visualization
- Tailwind CSS for styling framework
- Lucide for icon library
- Vercel for deployment platform

---

**Built with ❤️ for team wellness and productivity** 