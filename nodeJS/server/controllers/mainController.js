exports.homepage = async (req, res) => {
    const locals = {
        title: 'NodeJS notes',
        description: 'Free NodeJS Notes App'
    }
    console.log(req.method);

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

exports.about = async (req, res) => {
    const locals = {
        title: 'About - NodeJS notes',
        description: 'Free NodeJS Notes App'
    }

    res.render('about', locals);
}
