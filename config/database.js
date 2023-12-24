
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

async function connect() {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        createCollections(); // Call the function to create collections
    } catch (error) {
        console.error('Error in connection:', error);
    }
}

function createCollections() {
    const collections = mongoose.connection.collections;
    const collectionNames = Object.keys(collections);

    // Check if collections exist, and create if not
    if (!collectionNames.includes('registerusers')) {
        mongoose.connection.db.createCollection('registerusers');
        console.log('Created registerusers collection');
    }

    if (!collectionNames.includes('loginusers')) {
        mongoose.connection.db.createCollection('loginusers');
        console.log('Created loginusers collection');
    }

    if (!collectionNames.includes('forgotpasswordusers')) {
        mongoose.connection.db.createCollection('forgotpasswordusers');
        console.log('Created forgotpasswordusers collection');
    }
}

module.exports = { connect };
