import { Router } from "express";
import * as Keycloak from 'keycloak-connect'
import * as session from 'express-session'
import keycloakhendeler from '../middleware/handeler'
import { kcConfig } from "../utils/config";

const memoryStore = new session.MemoryStore()
export const keycloak = new Keycloak({ store: memoryStore }, kcConfig);
export const router = Router();

router.get('/admin-login', keycloakhendeler.admin)

router.post('/users', keycloak.protect('admin'), keycloakhendeler.create_hendeler);

router.get('/users', keycloak.protect('admin'), keycloakhendeler.read_hendeler)

router.put('/user/:id', keycloak.protect('admin'), keycloakhendeler.update_hendeler)

router.delete('/user/:id', keycloak.protect('admin'), keycloakhendeler.delete_hendeler)

router.get('/user-excel', keycloak.protect('admin'), keycloakhendeler.user_xlsx)

