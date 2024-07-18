import{MongoClient} from "mongodb"
const connection = MongoClient.connect("mongodb://localhost:27017")
export const dbName = "fileuploader"
export default connection
