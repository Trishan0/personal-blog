export const isAdmin = (req, res, next) => {
    if (req.userInfo.role !== 'admin') {
        res.redirect('/');
    }

    next()
}