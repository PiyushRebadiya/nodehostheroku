const Home_Data = require("../Model/home_data")
const Home_Image = require("../Model/home_page_image")

const home_page_data_create = async (req, res) => {
    const home_data_create = new Home_Data({
        header: req.body.header,
        image: req.body.image || []
    })
    try {
        const save_home_data = await home_data_create.save();
        if (save_home_data) {
            res.status(201).send(save_home_data);
        }

    } catch (error) {
        res.status(400).send(error);
    }



}
const home_image_create = async (req, res) => {
    let user_main_data = await Home_Data.findOne({ _id: req.params.id })
    const home_image_create = new Home_Image({
        img: req.body.img,
        header_id: user_main_data._id
    })
    try {

        let saveData = await home_image_create.save();
        if (saveData) {
            res.status(201).send(saveData);
        }

    } catch (error) {
        res.status(400).send(error);
    }



}
const home_page_data_show = async (req, res) => {

    try {
        const home_data = await Home_Data.find()
        res.json(home_data)
    } catch (error) {
        res.json({ message: error });
    }
}
const home_image_data_show = async (req, res) => {

    try {
        const home_data = await Home_Image.find()
        res.json(home_data)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    home_page_data_create,
    home_page_data_show,
    home_image_create,
    home_image_data_show
}