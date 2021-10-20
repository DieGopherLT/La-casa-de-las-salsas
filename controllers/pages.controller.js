exports.homePage = (req, res) => {
    res.render('home');
}

exports.aboutPage = (req, res) => {
    res.render('about');
}

exports.menuPage = (req, res) => {
    res.render('menu');
}

exports.notFoundPage = (req, res) => {
    res.render('notFound');
}
