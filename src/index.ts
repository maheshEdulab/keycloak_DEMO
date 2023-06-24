import * as express from 'express';
import { router, keycloak } from '../route/router'

const app = express();

app.use(express.json())

app.use(keycloak.middleware())

app.use(router)

app.listen(4000, () => {
    console.log(`server listening on http://localhost:4000`)
})   