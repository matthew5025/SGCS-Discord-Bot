// const firebase = require('firebase/app');
const admin = require('firebase-admin');
const { Config } = require('../utils/config');
require('firebase/firestore');

admin.initializeApp({
	credential: admin.credential.cert(Config.firebaseAdmin),
	databaseURL: Config.firebaseDBUrl
});

const db = admin.firestore();

module.exports = {
	Firebase: {
		getConnections: async function (userID) {
			const docRef = await db.collection('users').doc(userID).get();
			return docRef.data();
		},
		addConnection: function (userID, { type, publicURL }) {
			let data;
			if (type === 'linkedin') {
				data = {
					linkedin: publicURL
				};
			} else {
				data = {
					github: publicURL
				};
			}

			db.collection('users').doc(userID).set({ data }, { merge: true });
		}
	}
};
