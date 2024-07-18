import{MongoClient} from "mongodb"
<<<<<<< HEAD
const connection = MongoClient.connect("mongodb+srv://ritikarajwar0:11223344@cluster0.u2mqpbq.mongodb.net/fileuploader?retryWrites=true&w=majority&appName=Cluster0")
=======
const connection = MongoClient.connect("mongodb://localhost:27017")
>>>>>>> 29681dacc4793f54f0def2350cfb6a46c698eb40
export const dbName = "fileuploader"
export default connection
