#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🌟 ThrivePulse Setup Script');
console.log('============================\n');

// Create client .env.local file
const clientEnvContent = `# ThrivePulse Frontend Environment Variables
REACT_APP_FIREBASE_API_KEY=AIzaSyCu-oEjeP9aQOhyo73wcz_R4eHNJWQPi1Y
REACT_APP_FIREBASE_AUTH_DOMAIN=thrivepulse-88544.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=thrivepulse-88544
REACT_APP_FIREBASE_STORAGE_BUCKET=thrivepulse-88544.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=57238518422
REACT_APP_FIREBASE_APP_ID=1:57238518422:web:ad4608801b5effd26a20b7
REACT_APP_FIREBASE_MEASUREMENT_ID=G-4R8F8FHZWD
REACT_APP_API_URL=http://localhost:3001`;

// Create api .env file
const apiEnvContent = `# ThrivePulse Backend Environment Variables
FIREBASE_PROJECT_ID=thrivepulse-88544
PORT=3001
NODE_ENV=development`;

try {
  // Ensure directories exist
  if (!fs.existsSync('client')) {
    fs.mkdirSync('client', { recursive: true });
  }
  if (!fs.existsSync('api')) {
    fs.mkdirSync('api', { recursive: true });
  }

  // Write environment files
  fs.writeFileSync(path.join('client', '.env.local'), clientEnvContent);
  console.log('✅ Created client/.env.local');

  fs.writeFileSync(path.join('api', '.env'), apiEnvContent);
  console.log('✅ Created api/.env');

  console.log('\n🎉 Setup Complete!');
  console.log('\n📋 Next Steps:');
  console.log('1. Run: npm run install-all');
  console.log('2. Run: npm run dev');
  console.log('3. Open: http://localhost:3000');
  console.log('\n💡 Demo Credentials:');
  console.log('   Email: shancy.coordinator@thrivepulse.com');
  console.log('   Password: password123');
  console.log('\n🔥 Firebase is already configured with the provided credentials!');
  console.log('   Your dashboard is ready to use immediately.');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
} 