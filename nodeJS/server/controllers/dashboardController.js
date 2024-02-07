const Note = require('../models/note');

exports.homepage = async (req, res) => {
    const notesPerPage = 8;

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
                    title: { $substr: ['$title', 0, 5] },
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
        title: req.body.title,
        note: req.body.textInput
    };

    try {
        await Note.create(newNote);
        console.log(`saved a new note`);
    } catch (error) {
        console.log(`note creation error, ${error}`);
    }
};

exports.viewNote = async(req, res) => {
    console.log('hhh');
    const note = await Note.findById({ _id: req.params.id });

    console.log('viewing note');

    if (note) {
        res.render("dashboard/view-note", {
        noteID: req.params.id,
        note,
        layout: "../views/layouts/dashboard",
        });
    } else {
        res.send("Something went wrong.");
    }
};
