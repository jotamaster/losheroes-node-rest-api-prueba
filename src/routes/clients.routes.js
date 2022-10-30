import { Router } from 'express';

import * as ClientController from '../controllers/client.controller';


const router = Router();


router.get('/', ClientController.findAllClients);

// router.get('/:id', ClientController.findOneCar);

// router.get('/slug/:slug', ClientController.findOneCarBySlug);

// router.post('/', ClientController.storeCar );

// router.post('/filters', ClientController.findAllCarsByFilters );

// router.delete('/:id', ClientController.deleteCar);


export default router;