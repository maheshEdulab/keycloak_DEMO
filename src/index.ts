import * as express from 'express';
import { router, keycloak } from '../route/router'

const app = express();

app.use(express.json())
app.use(router)
app.use(keycloak.middleware())



app.get('/about', (req, res) => {
    res.json({ Messege: "HEllo World" })
})

app.listen(4000, () => {
    console.log(`server listening on http://localhost:4000`)
})   