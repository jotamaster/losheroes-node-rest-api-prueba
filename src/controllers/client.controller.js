// import Car from '../models/Car';
// import slugify from 'slugify';

import db from './../models'
const Client = db.client

const Op = db.Sequelize.Op;

export const addClient = async (req, res) => {

    let data = {
        name: req.body.name,
        rut: req.body.rut,
        email: req.body.email,
        address: req.body.address
    }
    if(await getClientByRut(req.body.rut)){
        res.status(409).send({ message: 'Rut is already used' })
        return
    }
    if(await getClientByEmail(req.body.email)){
        res.status(409).send({ message: 'Email is already used' })
        return
    }
    const client = await Client.create(data)
    res.status(200).send(client)
    console.log(client);
}




export const findAllClients = async (req, res) => {
    const clients = await Client.findAll();
    res.json(clients);
}

export const getOneClient = async (req, res) => {
    try {
        let id = req.params.id
        const client = await Client.findOne({ where: { id: id } })
        if (client == null) {
            res.status(404).send({ message: 'Client not found' })
            return
        }
        res.status(200).send(client)

        console.log(client);
    } catch (error) {
        res.status(404).send({ message: 'Client not found', error })
    }

}


export const updateClient = async (req, res) => {

        let id = req.params.id
        const existClient = await Client.findOne({ where: { id: id } })
        if (existClient == null) {
            res.status(404).send({ message: 'Client not found' })
            return
        }
        let userByRut = await getClientByRut(req.body.rut)
        console.log(userByRut.rut,'---',existClient.rut)

        if(userByRut && userByRut.rut != existClient.rut){
            res.status(409).send({ message: 'Rut is already used' })
            return
        }

        let userByEmail = await getClientByEmail(existClient.email)
        if(userByEmail && userByEmail.email != req.body.email){
            res.status(409).send({ message: 'Email is already used' })
            return
        }
        const client = await Client.update(req.body, { where: { id: id } })
        res.status(200).send(client)
}


export const deleteClient = async (req, res) => {

    let id = req.params.id
    await Client.destroy({ where: { id: id } })
    res.status(200).send(`Client deleted successfully`)
}

const getClientByRut = async (rut) =>{
    const client = await Client.findOne({ where: { rut: rut } })
    console.log(client)
    if(!client) return false
    return client
}

const getClientByEmail = async (email) =>{
    const client = await Client.findOne({ where: { email: email } })
    if(!client) return false
    return client
}


