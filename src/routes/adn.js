import { Router } from 'express';
import mutationFunc from '../mutation/mutation.js';
const router = Router();

router.get('/',(req,res)=>{
  console.log(req);
  res.sendStatus(200);
})

router.post('/', (req, res) => {
  const {dna} = req.body;
  
  return res.sendStatus(mutationFunc(JSON.parse(dna)));
});

export default router;
