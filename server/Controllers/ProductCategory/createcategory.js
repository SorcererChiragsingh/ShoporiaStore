const category = require("../../Models/category");
const slugify = require("slugify");  // slugify working defined below.
const createcategory = async (req, res) => {
  try {
    const checkname = await checkIfCategoryExists('name',req.body.category_name);
    if (checkname == true) {
      const checkurl = await checkIfCategoryExists('url',req.body.category_url);
      if (checkurl == true) {
        const {
          category_name,
          category_url,
          editor,
          meta_description,
          meta_title,
          meta_keywords,
          parent_category,
          status,
        } = req.body;
        const addcategory = new category({
          name: category_name,
          url: slugify(category_url),
          desc: editor,
          metatitle: meta_title,
          metadesc: meta_description,
          status,
          meta_keywords: meta_keywords,
          parentcategory: parent_category == '' ? [] : parent_category,
          banner: req.files.category_image[0].filename,
        });
        const rel = await addcategory.save();
        res.status(201).json({ status: "successfull", data: rel });
      } else {
        res.status(404).json({
          status: "faild",
          error:{
            url:{
              message: "category with this url already exist",
              path:"url"
            }
          }
        });
      }
    } else {
      res.status(404).json({
        status: "faild",
        error:{
          name:{
            message: "category with this name already exist",
            path:"name"
          }
        }
      });
    }
  } catch (error) {
    res.send({ status: "faild", error:error.errors });
  }
};

async function checkIfCategoryExists(keyvalue,name) {
  let category_response;
  if(keyvalue == 'name'){
     category_response = await category.findOne({ name:name });
  }else{
     category_response = await category.findOne({ url:name });
  }
  if (category_response == null) {
    return true;
  } else {
    return false;
  }
}

module.exports = createcategory;



// Working of slugify: 
// slugify("hello world") => "hello-world"
// slugify("hello world", "_") => "hello_world"

/*
- This imports the "slugify" package, which is a Node.js module.
"slugify" is used to convert a string into a URL-friendly slug (a readable, lowercase string with hyphens instead of spaces or special characters).
- eg:- const slugify = require("slugify");

const title = "Hello World! How are you?";
const slug = slugify(title, { lower: true });

console.log(slug);  // Output: hello-world-how-are-you

- Removes special characters
- Replaces spaces with hyphens (-)
- Converts to lowercase (if { lower: true } is set)
- Creates a clean URL-friendly string

*/