// index.js

import { storage } from './firebaseConfig.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

async function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    const storageRef = ref(storage, 'uploads/' + file.name);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File uploaded successfully:', downloadURL);
      alert('File uploaded successfully: ' + downloadURL);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file: ' + error.message);
    }
  } else {
    alert('No file selected');
  }
}

window.uploadFile = uploadFile;
