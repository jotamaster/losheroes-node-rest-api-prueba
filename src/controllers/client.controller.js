// import Car from '../models/Car';
// import slugify from 'slugify';

import db from './../models'
const Client = db.client

const Op = db.Sequelize.Op;



export const findAllClients = async( req, res )=>{
    // const cars = await Car.find();
    // const clients = [{name:"pedro"}] 
    const clients = await Client.findAll();
    res.json(clients);
}

// export const storeCar = async (req, res) => {

//     let rawSlug = `${req.body.owner} ${req.body.brand} ${req.body.model} ${req.body.year}`;
//     const slug = slugify(rawSlug.toLowerCase());
//     const newCar = new Car ({
//         description: req.body.description,
//         owner: req.body.owner,
//         brand: req.body.brand,
//         year: req.body.year,
//         images: req.body.images,
//         slug,
//         model: req.body.model,
//         carClass: req.body.carClass,
//     });
//     const  carSaved = await newCar.save();
//     res.json(carSaved);
// }

// export const findOneCar = async (req, res) => {
//     const car = await  Car.findById(req.params.id);
//     res.json(car);
// }



// export const findOneCarBySlug = async (req, res) => {
//     const car = await  Car.findOne({slug: req.params.slug});
//     if(!car) res.status(404)
//     res.json(car);
// } 



// export const deleteCar = async (req, res) => {
//     const car = await Car.findByIdAndDelete(req.params.id)
//     res.json({
//         message : `${car.title}  were deleted successfuly`
//     });
// }