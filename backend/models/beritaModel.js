import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize

const Berita = db.define('beritas', {
    title_berita:{
        type: DataTypes.STRING
    },
    desc_berita:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Berita;