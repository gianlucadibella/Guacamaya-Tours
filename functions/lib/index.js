"use strict";
// import * as functions from 'firebase-functions';
Object.defineProperty(exports, "__esModule", { value: true });
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// Firebase Config
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
// Sendgrid Config
const sgMail = require("@sendgrid/mail");
const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);
// Emails the author when a new comment is added to a post
exports.newComment = functions.firestore.document('posts/{postId}/comments/{commentId}').onCreate(async (change, context) => {
    // Read the post document
    const postSnap = await db.collection('posts').doc(context.params.postId).get();
    // Raw Data
    const post = postSnap.data();
    const comment = change.data();
    // Email
    const msg = {
        to: post.authorEmail,
        from: 'hello@fireship.io',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: `New Comment on ${post.title}`,
            name: post.displayName,
            text: `${comment.user} said... ${comment.text}`
        },
    };
    // Send it
    return sgMail.send(msg);
});
exports.genericEmail = functions.https.onCall(async (data, context) => {
    if (!context.auth && !context.auth.token.email) {
        throw new functions.https.HttpsError('failed-precondition', 'Must be logged with an email address');
    }
    const msg = {
        to: context.auth.token.email,
        from: 'gianluca.dibella@correo.unimet.edu.ve',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            name: data.text,
        },
    };
    await sgMail.send(msg);
    // Handle errors here
    // Response must be JSON serializable
    return { success: true };
});
// Sends email to user after signup
exports.welcomeEmail = functions.auth.user().onCreate(user => {
    const msg = {
        to: user.email,
        from: 'gianluca.dibella@correo.unimet.edu.ve',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: 'Welcome to my awesome app!',
            name: user.displayName,
        },
    };
    return sgMail.send(msg);
});
//# sourceMappingURL=index.js.map