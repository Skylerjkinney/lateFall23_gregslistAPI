import { housesService } from "../services/HousesService.js";
import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";
import { HousesController } from "./HousesController.js";


export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .post('', this.createJob)

    }
    async createJob(request, response, next) {
        try {
            const jobData = request.body
            const job = await jobsService.createJob(jobData)
            response.send(job)
        } catch (error) {
            next(error)
        }
    }
}