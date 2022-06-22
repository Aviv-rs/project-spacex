import { asyncStorageService } from "./asyncStorageService"

export const landingService = {
    query
}

const KEY = 'landing_db'
const SPACEX_API_URL = 'https://api.spacexdata.com/v4/launches'

async function query(filterBy = {}, pageSize) {
    let landings = await asyncStorageService.query(KEY)
    if (!landings) {

    }
    if (filterBy.status) landings = landings.filter(landing => landing.status === filterBy.status)
    return landings
}