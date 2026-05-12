// This file connects our BACKEND (API routes) to Firebase
// with ADMIN privileges (can do anything, bypass security rules)

import * as admin from "firebase-admin";

function getFirebaseAdmin() {
  // Only initialize once
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace \n with actual newlines in the private key
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }
  return admin;
}

export const adminAuth = getFirebaseAdmin().auth();
export const adminDb = getFirebaseAdmin().firestore();
export const adminStorage = getFirebaseAdmin().storage();