import { RequestHandler } from 'express'
import { Controller, HttpRequest } from '../controllers/types'

const makeExpressCallback: MakeExpressCallback = function (controller) {
    return async (req, res) => {
        const httpRequest: HttpRequest = {
            body: req.body
        }

        const httpResponse = await controller(httpRequest)

        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export default makeExpressCallback

type MakeExpressCallback = (controller: Controller) => RequestHandler