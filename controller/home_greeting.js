const Home_Greeting = require("../Model/home_greeting_data")
const Home_Image = require("../Model/home_greeting_image")

const home_greeting_create = async (req, res) => {
    const home_greeting_data_create = new Home_Greeting({
        header: req.body.header,
        image: req.body.image || []
    })
    try {
        const save_home_greeting_data = await home_greeting_data_create.save();
        if (save_home_greeting_data) {
            res.status(201).send(save_home_greeting_data);
        }

    } catch (error) {
        res.status(400).send(error);
    }



}
const home_greeting_image_create = async (req, res) => {
    let user_main_data = await Home_Greeting.findOne({ _id: req.params.id })
    const home_greeting_image_create = new Home_Image({
        img: req.body.img,
        header_id: user_main_data._id
    })
    try {

        let saveData = await home_greeting_image_create.save();
        if (saveData) {
            res.status(201).send(saveData);
        }

    } catch (error) {
        res.status(400).send(error);
    }



}
const home_greeting_show = async (req, res) => {

    try {
        const home_greeting_data = await Home_Greeting.find()
        res.json(home_greeting_data)
    } catch (error) {
        res.json({ message: error });
    }
}
const home_greeting_image_data_show = async (req, res) => {

    try {
        const home_greeting_data = await Home_Image.find()
        res.json(home_greeting_data)
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    home_greeting_create,
    home_greeting_show,
    home_greeting_image_create,
    home_greeting_image_data_show
}