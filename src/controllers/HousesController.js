import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .post('', this.createHouse)
            .get('', this.getHouses)
            .get('/:houseId', this.getOneHouse)
    }
    async createHouse(request, response, next) {
        try {
            const houseData = request.body
            const house = await housesService.createHouse(houseData)
            response.send(house)
        } catch (error) {
            next(error)
        }
    }
    async getHouses(request, response, next) {
        try {
            const houses = await housesService.getHouses()
            response.send(houses)
        } catch (error) {
            next(error)
        }
    }
    async getOneHouse(request, response, next) {
        try {
            const houseId = request.params.houseId
            const foundHouse = await housesService.getOneHouse(houseId)
            response.send(foundHouse)
        } catch (error) {
            next(error)
        }
    }
}