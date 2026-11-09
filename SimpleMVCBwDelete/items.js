const express = require('express');
const router = express.Router();
const db = require('userDB');

router.post('items/:id/delete', async (req, res, next) => {
	const itemId = req.params.id;

	try {
		const result = await db.query('DELETE FROM items WHERE id = ?', [itemID]);
		res.redirect('/items');
	} catch (err) {
	  next(err);
	}
   });

module.exports = router;
