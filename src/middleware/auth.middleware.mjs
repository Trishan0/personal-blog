const authMiddleware = (req, res, next) => {
    if (req.session && req.session.user) {
        req.userInfo = req.session.user;
        return next();
    }

    return res.status(401).json({
        success: false,
        message: "Access Denied"
    });
};

const setUserLocals = (req, res, next) => {
    res.locals.userRole = req.session?.user?.role || null;
    next()
}

export {
    authMiddleware,
    setUserLocals
}