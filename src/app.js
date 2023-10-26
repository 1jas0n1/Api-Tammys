import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// Routes
import indexRoutes from "./routes/index.routes.js";
import productRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import coloresroutes from "./routes/colores.routes.js";
import promocionesroutes from "./routes/promociones.routes.js";
import materialesroutes from "./routes/materiales.routes.js";
import bodegasroutes from "./routes/bodegas.routes.js"
import categoriasroutes from "./routes/categorias.routes.js";
import configuracionroutes from "./routes/configuracion.routes.js"
import diseñosroutes from"./routes/diseños.routes.js";
import estilosroutes from "./routes/estilos.routes.js";
import marcasroutes from "./routes/marcas.routes.js";
import proveedoresroutes from "./routes/proveedores.routes.js"
import tallasroutes from "./routes/tallas.routes.js"
import artículosroutes from "./routes/articulos.routes.js"


const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set('view engine','ejs');
app.set("json spaces", 4);
app.use(express.static('public'))
app.use(express.static('public/js/bootstrap'))

// Middlewares
app.use(cors());
app.use(morgan("dev"))
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
app.use("/api", indexRoutes);

app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/color",coloresroutes);
app.use("/api/marcas",marcasroutes);
app.use("/api/materiales",materialesroutes);
app.use("/api/bodegas",bodegasroutes);
app.use("/api/categorias",categoriasroutes);
app.use("/api/configuracion",configuracionroutes);
app.use("/api/disenos",diseñosroutes);
app.use("/api/estilos",estilosroutes);
app.use("/api/marcas",marcasroutes);
app.use("/api/promociones",promocionesroutes);
app.use("/api/proveedores",proveedoresroutes);
app.use("/api/tallas",tallasroutes);
app.use("/api/articulos",artículosroutes);





export default app;
