import{MongoClient} from "mongodb"
const connection = MongoClient.connect("mongodb+srv://ritikarajwar0:11223344@cluster0.u2mqpbq.mongodb.net/fileuploader?retryWrites=true&w=majority&appName=Cluster0")
export const dbName = "fileuploader"
export default connection