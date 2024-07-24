import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import session from "express-session";
import passport from "passport";
import user from "./models/user.js";
import { generate } from "generate-password";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import fs from 'fs'
import product from "./models/product.js";

// load variables from the env file
dotevn.config();

// create express app
export const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "12341324dasfasdfsdfdsewrqewrewrwerwdadsfdsa",
    resave: false,
    saveUninitialized: true,
  })
);

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log('this is profile',profile)
      const userdata = profile._json;
      // console.log("this is the userdata",userdata)
      try {
        // console.log("trying to find profile.email in userdb", userdata.email);
        let userexits = await user.findOne({ email: userdata.email });

        if (!userexits) {
          // console.log("creating new user");
          const newpassword = generate({
            length: 12, // Length of the password
            numbers: true, // Include numbers in the password
            symbols: true, // Include symbols in the password
            uppercase: true, // Include uppercase letters in the password
            lowercase: true, // Include lowercase letters in the password
          });
          // console.log("this is the newpasssowrd",newpassword)
          userexits = await user.create({
            username: profile.displayName,
            password: newpassword,
            email: profile.emails[0].value,
            picture: profile.photos[0].value,
          });
        }

        return done(null, userexits);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// initial google ouath login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "http://localhost:5173/login",
  })
);

app.get("/login/sucess", async (req, res) => {
  // console.log("yahan hun main");
  // console.log(req.user._id);
  const datatosend = {
    _id: req.user?._id,
    username: req.user?.username,
    email: req.user?.email,
    picture: req.user?.picture,
  };
  if (req.user) {
    res.status(200).json({ message: "user Login", user: datatosend });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173/");
  });
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(process.env.PORT, () => {
      console.log("Server is listening at port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err.message);
  });

app.use("/api", userRouter);


async function storeProductWithImage() {
  try {
    // Read the image file
    const imageData = fs.readFileSync('E:/summer 2024/webdev/furni-1.0.0/frontend/public/images/product-3.png');

    // Create a new product with image data
    const newproduct = new product({
      name: 'Ergonomic Chair',
      price: 43.00,
      image: {
        data: imageData,
        contentType: 'image/png', // Change as per your image type
      },
    });

    // Save the product to MongoDB
    await newproduct.save();

    console.log('Product saved successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

// storeProductWithImage();
