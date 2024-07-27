import path from 'path';

import multer from 'multer';


const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 50 * 1024 * 1024, // 50 MB

    },
    storage: multer.diskStorage({
        destination:'uploads/',
        filename: (req, file, cb) => {
cb(null, file.originalname);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    }),
    fileFilter:(_req, file, cb) => {
        let ext = path.extname(file.originalname);

        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
            return cb(new Error('Only images are allowed'));
        }
        cb(null, true);
    }
});



export default upload;
