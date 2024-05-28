const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/posts.js');

// const multer = require('multer');
// const uploader = multer({ dest: 'public' });

router.get('/', postsControllers.index);
router.get('/create', postsControllers.create);
router.post('/', postsControllers.store);
router.get('/:slug', postsControllers.show);
router.get('/:slug/download', postsControllers.download);

module.exports = router;
