// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);

// const db = client.db("better-auth-db");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     client,
//   }),

//   emailAndPassword: {
//     enabled: true,
//   },

//   socialProviders: {
//     google: {
//       clientId: process.env.BETTER_AUTH_DB_ID,
//       clientSecret: process.env.BETTER_AUTH_DB_SECT,
//     },
//   },
// });
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);

const db = client.db("better-auth-db");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_DB_ID,
      clientSecret: process.env.BETTER_AUTH_DB_SECT,
    },
  },
});