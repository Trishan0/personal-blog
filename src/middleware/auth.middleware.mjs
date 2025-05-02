const authMiddleware = (req, res, next) => {
    if (req.session && req.session.user) {
        req.userInfo = req.session.user;
        return next();
    }

    return res.redirect('/login');
};

const adminMiddleware = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
        req.userInfo = req.session.user;
        return next();
    }
    return res.redirect('/');
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