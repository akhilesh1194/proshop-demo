import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// Secure Routes
const secure = asyncHandler(async (req, res, next) => {

    // check if there is a jwt in the cookie
    // if there is, then we know the user is logged in
    // so we can move on to the next middleware
    // if there is no jwt, then the user is not logged in
    // so we send them back to the login page
    // and let them know they need to login
    // and then we can move on to the next middleware

    // read the jwt from the cookie
    let token = req.cookies.jwt;

    if (token) {
        try {
            // verify the jwt
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});


// Admin Middleware
const admin = asyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
});


export {
    secure,
    admin
}
