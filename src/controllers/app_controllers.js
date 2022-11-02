// pretendiendo conexión a base de datos utilizando las variables user y tweets

const users = [
	{
		id: 1,
		username: "julio",
		email: "test@example.com",
		followers: [],
		publications: [],
		liked: [],
	},
];

const tweets = [
	{
		id: 1,
		postedBy: "julio",
		body: "este es mi publicacion/tweet",
		userEmail: "test@example.com",
		userMarkedLike: [],
	},
];

//Metodos de Usuario--------------------------------

//Read Unico
const getUser = (req, res) => {
	const id_buscada = +req.params.id;
	let user_buscado = undefined;

	for (let i = 0; i < users.length; i++) {
		if (users[i].id === id_buscada) {
			user_buscado = users[i];
		}
	}

	if (user_buscado) {
		res.status(200).json(user_buscado);
		console.log("GET USER - EXITOSO");
	} else {
		res.status(404).json();
	}
};

//Read Multiple
const getUsers = (req, res) => {
	res.status(200).json(users);
};

//Crear Usuario
const createUser = (req, res) => {
	const usuario = {
		...req.body,
	};

	console.log(req.body);
	if (!usuario.username) {
		return res
			.status(400)
			.json({ message: "El campo username no se encuentra" });
	}

	let finded = users.find((user) => user.username.toLowerCase() === usuario.username.toLowerCase());
	
	if (finded !== undefined) {
		return res.status(400).json({ message: "Nombre de usuario ya existe" });
	}

	usuario.id = users.length + 1;
	users.push(usuario);

	res.status(200).json({ message: "Usuario creado con Exito" });
};

//Eliminar Usuario
const deleteUser = (req, res) => {
	const id_buscada = +req.params.id;
	let user_buscado = users.indexOf((user) => user.id === id_buscada);

	if (user_buscado !== -1) {
		users = users.filter((user) => user.id !== id_buscada);
		res.status(200).json({ message: "User succesfully deleted" });
	} else {
		res.status(400).json({message: "Usuario no encontrado"});
	}
};

//chequear update
const updateUser = (req, res) => {
	const usuario = {
		...req.body,
	};

	const id_buscada = +req.params.id;
	let user_buscado = undefined;
	let finded = undefined;

	for (let i = 0; i < users.length; i++) {
		if (users[i].id === id_buscada) {
			user_buscado = users[i];
			finded = i;
		}
	}

	if (user_buscado) {
		user[finded] = user_buscado;
		console.log("UPDATE USER - EXITOSO");
	} else {
		res.status(404).json();
	}
};

//Metodos de Tweets--------------------------------
const getTweet = (req, res) => {
	const id_buscada = +req.params.id;
	let tweet_buscado = undefined;

	for (let i = 0; i < tweets.length; i++) {
		if (tweets[i].id === id_buscada) {
			tweet_buscado = tweets[i];
		}
	}

	if (tweet_buscado) {
		res.status(200).json(tweet_buscado);
		console.log("GET TWEET - EXITOSO");
	} else {
		res.status(404).json();
	}
};

const createTweet = (req, res) => {
	const tweet = {
		...req.body,
	};

	let finded = users.find((user) => tweet.postedBy.toLowerCase() === user.username.toLowerCase());

	if (finded === undefined) {
		return res.status(400).json({ message: "Usuario no encontrado" });
	}

	tweet.id = tweets.length + 1;
	tweets.push(tweet);

	res.status(200).json({ message: "Tweet Creado Exitosamente" });
};

const deleteTweet = (req, res) => {
	res.json("delete");
};

const updateTweet = (req, res) => {
	res.json("update");
};

//Metodos de Followers--------------------------------
const getFollower = (req, res) => {
	res.json("get Followers");
};

const createFollower = (req, res) => {
	res.json("create");
};

const deleteFollower = (req, res) => {
	res.json("delete");
};

//Metodos de Likes--------------------------------
const getLike = (req, res) => {
	res.json("get Likes");
};

const createLike = (req, res) => {
	res.json("create");
};

const deleteLike = (req, res) => {
	res.json("delete");
};

//Metodo de Timeline--------------------------------
const getTimeline = (req, res) => {
	res.json("Get Timelines");
};

export const userMethods = {
	getUsers,
	getUser,
	createUser,
	deleteUser,
	updateUser,
};

export const tweetMethods = {
	getTweet,
	createTweet,
	deleteTweet,
	updateTweet,
};

export const followerMethods = {
	getFollower,
	createFollower,
	deleteFollower,
};

export const likeMethods = {
	getLike,
	createLike,
	deleteLike,
};

export const timelineMethods = {
	getTimeline,
};
