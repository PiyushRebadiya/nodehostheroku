const Banner = require("../Model/banner")

const banner_slider_fun = async(req, res) => {
    try {
        const banners = await Banner.find()
        res.json(banners)
    } catch (error) {
        res.json({ message: error });
    }
}

const banner_slider_create = async (req, res) => {
    let banner_view = await Banner.find({ photo: req.body.photo })
    if (banner_view && banner_view.length == 0) {
        const banners = new Banner({
            photo: req.body.photo
        })
        try {
            const saveBanners = await banners.save();
            if (saveBanners) {
                res.status(201).send(saveBanners);
            }

        } catch (error) {
            res.status(400).send(error);
        }

    }
}

module.exports = {
    banner_slider_fun,
    banner_slider_create
}