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

const adminMiddleware = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
        req.userInfo = req.session.user;
        return next();
    }

    return res.status(403).json({
        success: false,
        message: "Access Forbidden: Admin privileges required"
    });
};

const setUserGlobals = (req, res, next) => {
    const user = req.session?.user;

    res.locals.userRole = user?.role || null;
    res.locals.userFullName = user ? `${user.firstname} ${user.lastname}` : "GUEST";
    res.locals.userFirstName = user?.firstname || "Guest";

    next();
};

export {
    authMiddleware,
    adminMiddleware,
    setUserGlobals
}