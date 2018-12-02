
import Firestore from '@google-cloud/firestore'

export const db = new Firestore({
  projectId: 'ptp-backend-224022',
  keyFilename: '/home/Patrick/Dev/google/ptp-backend-224022-firestore.json'
});


// export const db = new Firestore({
//   projectId: 'ptp-backend-224022'
// });