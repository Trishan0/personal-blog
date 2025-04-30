export const authMiddleware = (req, res, next) => {
    if (req.session && req.session.user) {
        // Make user info available in route
        req.userInfo = req.session.user;
        return next();
    }

    return res.status(401).json({
        success: false,
        message: "Access Denied"
    });
};
