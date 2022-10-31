import { Router } from 'express';

import * as ClientController from '../controllers/client.controller';


const router = Router();


router.get('/', ClientController.findAllClients);

router.post("/", ClientController.addClient)

router.get("/:id", ClientController.getOneClient)

router.put("/:id", ClientController.updateClient)

router.delete("/:id", ClientController.deleteClient)


export default router;