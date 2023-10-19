import { Ibody } from '../type/type';
import keycloakController from '../controller/kecloak-controller'
import { Request, Response } from "express";
import * as xlsx from 'xlsx'

class Keycloakhendler {

    admin = async (req: Request, res: Response) => {
        try {

            const { username, password } = req.body as { username: string, password: string }
            console.log(username, password)
            const access_token = await keycloakController.admin_login(username, password);


            res.json({ access_token });
        } catch (error) {

            res.status(500).json({ error, err: 'Login failed' });
        }
    }

    create_hendeler = async (req: Request, res: Response) => {
        try {
            const { firstName, lastName, email, password } = req.body as { firstName: string, lastName: string, email: string, password: string }
            const user = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "enabled": "true",
                "credentials": [{
                    "type": "password",
                    "value": password,
                    "temporary": "false"
                }]
            }
            const response = await keycloakController.create_User(user, req.headers['authorization'])
            console.log(response)
            if (response.status === 201) {
                res.json({ Messge: "user created succesfully" })
            } else {
                res.json({ Messege: "Error while creating users" })
            }
        }
        catch {

            res.status(500).json({ Messege: "Error while creating a user " })
        }
    }

    read_hendeler = async (req: Request, res: Response) => {
        try {
            console.log(req.headers.authorization)
            var respo = res.json(await keycloakController.read_User(req.headers['authorization']))

        } catch {
            res.json({ Messege: "NO token recived", respo })
        }
    }

    update_hendeler = async (req: Request, res: Response) => {
        try {
            const status = await keycloakController.update_User(req.params.id, req.body, req.headers['authorization'])
            if (status === 204) {
                res.json({ Messege: "User updated successfully" })
            } else {
                res.status(500).json({ Messege: "Error in updating user" })
            }

        } catch (err) {
            res.json({ Messege: "There is no user found by this id" })
        }
    }

    delete_hendeler = async (req: Request, res: Response) => {
        try {
            const status = await keycloakController.delete_User(req.params.id, req.headers['authorization'])
            if (status === 204) {
                res.json({ Messege: "User deleted  successfully" })
            } else {
                res.status(500).json({ Messege: "Error in deleting user" })
            }

        } catch (err) {
            res.json({ Messege: "There is no user found by this id" })
        }
    }

    user_xlsx = async (req: Request, res: Response) => {
        try {

            const wb = xlsx.readFile('src/userdata.xlsx')
            // console.log(wb.SheetNames)
            // const ws = wb.Sheets['data']
            const ws = wb.Sheets['Sheet1']
            const data: Ibody[] = xlsx.utils.sheet_to_json(ws)
            // console.log(data)
            await data.map(async (body) => {
                const user = {
                    "firstName": body.firstName,
                    "lastName": body.lastName,
                    "email": body.email,
                    "enabled": "true",
                    "credentials": [{
                        "type": "password",
                        "value": body.password,
                        "temporary": "false"
                    }]
                }

                // return user
                await keycloakController.create_User(user, req.headers['authorization'])
            })
            // const newarr=await Promise.all(promise)
            // console.log(newarr[1])
            // await keycloakController.create_User(newarr, req.headers['authorization'])

            res.json({ Messege: "User created succesfully" })
        }
        catch {

            res.status(500).json({ Messege: "Error while creating a user " })
        }
    }
}

export default new Keycloakhendler();

