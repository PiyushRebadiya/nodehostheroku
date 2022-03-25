const dotenv = require("dotenv")
const cors = require("cors")
const jwt = require("jsonwebtoken")

const userRoutes = require("./Route/user")
const app = express();
const cookieParser = require('cookie-parser')
dotenv.config()
mongoose.connect(
    process.env.DB_ACCESS,
    {useUnifiedTopology: true,useNewUrlParser:true},
    () => console.log("connect to mongoDB!!!")
)
app.use(express.json())
app.use(cookieParser());


app.use("/", userRoutes);

app.listen(process.env.PORT || 8000, () => console.log("Server ready 8000"))