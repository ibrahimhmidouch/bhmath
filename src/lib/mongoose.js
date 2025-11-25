import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URL;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { 
    conn: null, 
    promise: null,
    models: new Map()
  };
}

export async function initMongoose() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Utility function to get or create a model
export function getModel(modelName, schema) {
  if (!cached.models) {
    cached.models = new Map();
  }

  if (cached.models.has(modelName)) {
    return cached.models.get(modelName);
  }

  const model = mongoose.model(modelName, schema);
  cached.models.set(modelName, model);
  return model;
}

// Default export for backward compatibility with existing scripts
export default initMongoose;
