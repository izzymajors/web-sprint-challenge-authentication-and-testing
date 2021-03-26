const db = require("../../data/dbConfig");


function find() {
    return db("users as u")
    .select("u.id","u.username")
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return findById(id);
}

function findById(id) {
    return db("users as u")
    .select("u.id", "u.username")
    .where("u.id", id)
    .first();
}


module.exports = {
    add,
    find,
}