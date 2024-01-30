const Note = require('../models/note');

exports.homepage = async (req, res) => {
    const notesPerPage = 4;

    const locals = {
        title: 'Dashboard',
        description: 'Free NodeJS Notes App'
    };

    let page = req.query.page || 1;

    try {
        const allNotes = await Note.aggregate([
            {
                $sort: {
                    createdAt: -1,
                }
            },
            {
                $project: {
                    body: { $substr: ['$note', 0, 4] }
                }
            }
        ])
        .skip(notesPerPage * page - notesPerPage)
        .limit(notesPerPage)
        .exec();

        const count = await Note.count();

        res.render('dashboard/index', {
            locals,
            allNotes,
            layout: '../views/layouts/dashboard',
            currentPage: page,
            pages: Math.ceil(count / notesPerPage)
        });
    }
    catch (err) {
        console.log(err);
    }
}

exports.addNote = async(req, res) => {
    const newNote = {
        note: req.body.textInput
    };

    try {
        await Note.create(newNote);
        console.log(`saved a new note`);
    } catch (error) {
        console.log(`note creation error, ${error}`);
    }
};
