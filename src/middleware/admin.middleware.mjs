export const adminMiddleware = (req, res, next) => {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
        req.userInfo = req.session.user;
        return next();
    }
    return res.redirect('/');
};
