exports.get404page = (req, resp, next) => {
    resp.status(404).render('page404', {docTitle: '404 not found', path: '/'})
}