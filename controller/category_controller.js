const Category = require('../Model/catogory_model')


const all_category = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.json({ message: error });
    }
}

const create_category = async (req, res) => {

    let str = req.body.category;
    let category_res = str.trim();
    
    let find_category = await Category.find({ category: req.body.category })

    if(req.body.category != "" && req.body.category != undefined && category_res.length > 0){

        if(find_category.length === 0){
            const categorys = new Category({
                category : req.body.category
            })

            try{
                await categorys.save();

                res.json({
                    "data": [{
                     category : categorys.category
                    }]
                  });
            }catch(error){
                res.send(err)
            }
        }else{
            return res.send({ message: "Already this category is added" })
        }

    }else{
        return res.send({ message: "Please Enter Your Category" })
    }

}

const update_category = async (req, res) => {
    try {
        const category = {
            category: req.body.category
        }
        const categoryUpdate = await Category.findByIdAndUpdate(
            {
                _id: req.params.id
            },
            category
        )
        res.json(categoryUpdate)
    } catch (error) {
        res.json({ message: error })
    }
}

const delete_category = async (req, res) => {
    try {
        const delete_category = await Category.findByIdAndDelete(req.params.id);
        res.json(delete_category)
    } catch (error) {
        res.send({ message: error })
    }
}


module.exports = {
    create_category,
    all_category,
    update_category,
    delete_category
}