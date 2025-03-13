const express = require('express')
const createcategory = require('../Controllers/ProductCategory/createcategory.js');
const upload = require('../middlewares/image-uploader.js');
const categorylist = require('../Controllers/ProductCategory/categorylist.js');
const categorylistlevelone = require('../Controllers/ProductCategory/categorylist_level_one.js');
const categorysingle = require('../Controllers/ProductCategory/categorysingle.js');
const deletecategory = require('../Controllers/ProductCategory/deletecategory.js');
const frontendcategorylist = require('../Controllers/ProductCategory/frontend_category_list.js');
const subcategorylist = require('../Controllers/ProductCategory/subcategorylist.js');
const updatecategory = require('../Controllers/ProductCategory/updatecategory.js');
const frontendattributelistbycategory = require('../Controllers/ProductCategory/frontend/frontend_filterlist_bycategory.js');
const frontendattributelistbyproduct = require('../Controllers/ProductCategory/frontend/frontend_filterlist_byproduct.js');
const routercate = express.Router()


routercate.post('/',upload.fields([{ name: 'category_image', maxCount: 1 },]),createcategory);
routercate.get('/',categorylist);
routercate.get('/levelone',categorylistlevelone);
routercate.get('/:id',categorysingle);
routercate.delete('/:id',deletecategory);
routercate.get('/frontedcategorylist',frontendcategorylist);
routercate.post('/subcategory',upload.none(),subcategorylist);
routercate.patch('/:id',upload.fields([{ name: 'category_image', maxCount: 1 },]),updatecategory);
routercate.get('/attribute-by-category/:id',frontendattributelistbycategory);
routercate.get('/attributelist/:id',frontendattributelistbyproduct);


module.exports = routercate
