const joi=require("joi");

module.exports.listingSchema=joi.object({
    listing:joi.object({
    title:joi.string().required(),
    description:joi.string().required(),
    image:
    {url:joi.string().required(),
    filename:joi.string().required(),
    },
    price:joi.number().required(),
    location:joi.string().required(),
    country:joi.string().required(),
    }).required(),
 
})

module.exports.reviewSchema=joi.object({
    review:joi.object({
        rating:joi.number().required().min(1).max(5),
        comment:joi.string().required(),
    }).required(),
})