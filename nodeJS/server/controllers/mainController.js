exports.homepage = async (req, res) => {
    const locals = {
        title: 'NodeJS notes',
        description: 'Free NodeJS Notes App'
    }

    res.render('index', locals);
}
