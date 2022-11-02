import app from "../src/app"

console.log("hola chamo")

const main = () => {

    app.listen(app.get("port"))
    console.log(`Server on port ${app.get("port")}`)
}

main()