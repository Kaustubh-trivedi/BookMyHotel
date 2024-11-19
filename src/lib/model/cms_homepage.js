import mongoose from "mongoose";

const cms_homepageModel = new mongoose.Schema({
    banner_heading_first: String,
    banner_heading_second: String,
    banner_description: String,
    banner_image: String,
    category_heading: String,
    featured_hotels_heading: String,
    services_heading: String,
    our_all_hotels_heading: String,
    testimonials_heading: String,

});

export const cms_homepage = mongoose.models.cms_homepage || mongoose.model("cms_homepage", cms_homepageModel);