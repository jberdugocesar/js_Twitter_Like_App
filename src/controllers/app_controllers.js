// pretendiendo conexión a base de datos utilizando las variables user y tweets
let idUser = 1
let idTweet = 1
let users = [
	{
		id: 1,
		username: "julio",
		email: "test@example.com",
		followings: [],
		followers: [],
		publications: [1],
		liked: [],
	},
];

let tweets = [
	{
		id: 1,
		postedBy: "julio",
		userEmail: "test@example.com",
		body: "este es mi publicacion/tweet",
		likes:0,
		usersMarkedLike: [],
		
	},
];



//Metodos de Usuario--------------------------------

//Read Unico
const getUser = (req, res) => {
	const id_buscada = +req.params.id;
	let user_buscado = undefined;

	user_buscado = users.find((user) => user.id === id_buscada)

	if (user_buscado) {
		res.status(200).json(user_buscado);
		console.log("GET USER - EXITOSO");
	} else {
		res.status(404).json({message:"Usuario no ha podido ser encontrado"});
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

	idUser+=1
	usuario.id = idUser;
	users.push(usuario);

	res.status(200).json({ message: "Usuario creado con Exito" });
};

//Eliminar Usuario
const deleteUser = (req, res) => {
	const id_buscada = +req.params.id;
	let user_buscado = users.findIndex((user)=> user.id === id_buscada)
	console.log(user_buscado)

	if (user_buscado !== -1) {
		users = users.filter((user) => user.id !== id_buscada);
		res.status(200).json({ message: "User Eliminado satisfactoriamente" });
	} else {
		res.status(404).json({message: "No se pudo eliminar, usuario no encontrado"});
	}
};

//Actualizar Usuario
const updateUser = (req, res) => {
	const usuario = {
		...req.body,
	};

	const id_buscada = +req.params.id;

	 let indexFinded = users.findIndex((user)=> user.id === id_buscada)

	if (indexFinded !==-1) {
		usuario.id = id_buscada
		users[indexFinded] = usuario;
		res.status(200).json({message: "Usuario actualizado exitosamente"});
	} else {
		res.status(404).json({message: "No se pudo actualizar, usuario no encontrado"});
	}
};




//Metodos de Tweets--------------------------------

//READ TWEET UNICO
const getTweet = (req, res) => {
	const id_buscada = +req.params.id;
	let tweet_buscado = undefined;

	tweet_buscado = tweets.find((tweet) => tweet.id === id_buscada)

	if (tweet_buscado !== undefined) {
		res.status(200).json(tweet_buscado);
		console.log("GET TWEET - EXITOSO");
	} else {
		res.status(404).json({message: "No se pudo encontrar la publicación"});
	}
};

//READ TWEET MULTIPLE
const getTweets = (req, res) => {
	res.status(200).json(tweets);
};

//READ DE TWEET DE USUARIO ESPECIFICO

const getUserTweets = (req, res) =>{
	const id_buscada = +req.params.id;
	let user_buscado = undefined;

	user_buscado = users.find((user) => user.id === id_buscada)

	if (user_buscado !== undefined) {
		let usertweets = tweets.filter((tweet) => user_buscado.publications.find((usertweetid) => usertweetid === tweet.id))
		res.status(200).json(usertweets);
		console.log("GET USER TWEET - EXITOSO");
	} else {
		res.status(404).json({message: "Publicacion no encontrada - usuario no existe"})
	}
}

//Crear Tweet
const createTweet = (req, res) => {
	const tweet = {
		...req.body,
	};

	let userFinded = users.find((user) => tweet.postedBy.toLowerCase() === user.username.toLowerCase());

	if (userFinded === undefined) {
		return res.status(400).json({ message: "Usuario no encontrado" });
	}
	idTweet+=1
	tweet.id = idTweet
	tweet.likes = 0
	userFinded.publications.push(tweet.id)
	tweets.push(tweet);

	res.status(200).json({ message: "Publicacion Creada Exitosamente" });
};

//Eliminar Tweet
const deleteTweet = (req, res) => {
	const id_buscada = +req.params.id;
	let tweet_buscado = tweets.findIndex((tweet)=> tweet.id === id_buscada)
	console.log(tweet_buscado)

	if (tweet_buscado !== -1) {
		//actualizar tweets
		tweets = tweets.filter((tweet) => tweet.id !== id_buscada);
		//eliminar de favoritos de los usuarios
		users.map((user)=> user.liked = user.liked.filter((id) => id !== id_buscada))
		//eliminar del publicado del usuario que lo creo
		users.find((user) => user.publications = user.publications.filter((id) => id !== id_buscada)) 

		res.status(200).json({ message: "Publicacion Eliminada satisfactoriamente" });
	} else {
		res.status(400).json({message: "Publicacion no encontrada"});
	}
};

//Actualizar Tweet
const updateTweet = (req, res) => {
	const tweet = {
		...req.body,
	};
	
	if (tweet.postedBy || tweet.userEmail || tweet.userMarkedLike || tweet.likes) {
		return res
			.status(400)
			.json({ message: "No se puede modificar estos atributos" });
	}

	 const id_buscada = +req.params.id;

	 let indexFinded = tweets.findIndex((tweet)=> tweet.id === id_buscada)

	if (indexFinded !==-1) {
		tweet.id = id_buscada
		tweets[indexFinded].body = tweet.body;
		res.status(200).json({message: "Publicacion actualizada exitosamente"});
	} else {
		res.status(404).json({message: "Publicacion no encontrada"});
	}
};




//Metodos de Followers--------------------------------


const getFollower = (req, res) => {
	const id_buscada = +req.params.id;
	let user_buscado = undefined;

	user_buscado = users.find((user) => user.id === id_buscada)

	if (user_buscado) {
		let followers = user_buscado.followers.map((userFollowerId) => users.find((user) => userFollowerId === user.id))
		res.status(200).json(followers);
		console.log("GET FOLLOWER - EXITOSO");
	} else {
		return res.status(404).json({message:"Usuario no ha podido ser encontrado"});
	}
};

const getFollowing = (req, res) => {
	const id_buscada = +req.params.id;
	let user_buscado = undefined;

	user_buscado = users.find((user) => user.id === id_buscada)

	if (user_buscado) {
		let followings = user_buscado.followings.map((userFollowingId) => users.find((user) => userFollowingId === user.id))
		res.status(200).json(followings);
		console.log("GET FOLLOWING - EXITOSO");
	} else {
		return res.status(404).json({message:"Usuario no ha podido ser encontrado"});
	}
};

const createFollower = (req, res) => {
	const id_usuario_seguidor = +req.params.id;
	const id_usuario = +req.params.id2;

	let usuario_seguidor = users.find((user) => user.id === id_usuario_seguidor)

	let usuario = users.find((user) => user.id === id_usuario)

	

	if (usuario_seguidor === undefined) {
		return res.status(404).json({message:"Usuario seguidor no existe"});
	} 

	if (usuario === undefined) {
		return res.status(404).json({message:"El usuario a seguir no existe"});
	} 

	if(usuario === usuario_seguidor){
		return res.status(404).json({message:"El usuario no puede seguirse a si mismo"});
	}

	let vinculo = usuario_seguidor.followings.find((userid) => userid === id_usuario)

	if(vinculo !== undefined){
		return res.status(400).json({message:`El usuario ${usuario_seguidor.username} actualmente ya se encuentra siguiendo a ${usuario.username}`});
	}

	usuario_seguidor.followings.push(usuario.id)
	usuario.followers.push(usuario_seguidor.id)
	res.status(200).json({message:`Vinculo creado exitosamente de ${usuario_seguidor.username} --> ${usuario.username}`});
};

const deleteFollower = (req, res) => {
	const id_usuario_seguidor = +req.params.id;
	const id_usuario = +req.params.id2;

	let usuario_seguidor = users.find((user) => user.id === id_usuario_seguidor)

	let usuario = users.find((user) => user.id === id_usuario)

	

	if (usuario_seguidor === undefined) {
		return res.status(404).json({message:"Usuario seguidor no existe"});
	} 

	if (usuario === undefined) {
		return res.status(404).json({message:"El usuario a seguir no existe"});
	} 

	if(usuario === usuario_seguidor){
		return res.status(400).json({message:"El usuario no puede realizar esta accion"});
	}

	let vinculo = usuario_seguidor.followings.find((userid) => userid === id_usuario)

	if(vinculo === undefined){
		return res.status(400).json({message:`El usuario ${usuario_seguidor.username} actualmente no se encuentra siguiendo a ${usuario.username}`});
	}

	//Eliminar el vinculo del seguidor de la persona que esta siguiendo
	usuario_seguidor.followings = usuario_seguidor.followings.filter((userid) => userid !== usuario.id)
	//Eliminar el vinculo del usuario la persona que la sigue
	usuario.followers = usuario.followers.filter((userid) => userid !== usuario_seguidor.id)

	res.status(200).json({message:`Vinculo Eliminado exitosamente de ${usuario_seguidor.username} --XX-> ${usuario.username}`});
};




//Metodos de Likes--------------------------------


const getLike = (req, res) => {
	const id_buscada = +req.params.id;
	let user_buscado = undefined;

	user_buscado = users.find((user) => user.id === id_buscada)

	if (user_buscado !== undefined) {
		let userlikedtweets = tweets.filter((tweet)=> user_buscado.liked.find((likedid) => likedid === tweet.id))
		res.status(200).json(userlikedtweets);
		console.log("GET USER LIKED - EXITOSO");
	} else {
		res.status(404).json({message: "Publicaciones gustadas no pudo ser encontrada - el usuario no existe"})
	}
};

const createLike = (req, res) => {

	const id_tweet = +req.params.id;
	const id_user = +req.params.id2

	let finded_tweet = tweets.find((tweet) => tweet.id === id_tweet)

	let finded_user = users.find((user) => user.id === id_user)

	if (finded_tweet === undefined) {
		return res.status(404).json({message:"El id de este tweet no existe"});
	} 

	if (finded_user === undefined) {
		return res.status(404).json({message:"El id de este usuario no existe"});
	} 

	let markedlike = finded_user.liked.find((tweetid) => tweetid === id_tweet)
	console.log(markedlike)
	if (markedlike !== undefined) {
		return res.status(404).json({message:`Usuario ${finded_user.username} ya tiene ❤️ en la publicación`});
	} 

	finded_user.liked.push(id_tweet)
	finded_tweet.usersMarkedLike.push(id_user)
	finded_tweet.likes = finded_tweet.usersMarkedLike.length
	res.status(200).json({message:`El usuario ${finded_user.username} ha marcado ❤️ el tweet con id: ${finded_tweet.id}`});
};

const deleteLike = (req, res) => {
	const id_tweet = +req.params.id;
	const id_user = +req.params.id2

	let finded_tweet = tweets.find((tweet) => tweet.id === id_tweet)

	let finded_user = users.find((user) => user.id === id_user)

	if (finded_tweet === undefined) {
		return res.status(404).json({message:"El id de este tweet no existe"});
	} 

	if (finded_user === undefined) {
		return res.status(404).json({message:"El id de este usuario no existe"});
	} 

	let markedLike = finded_user.liked.find((tweetid) => tweetid === id_tweet )

	if (markedLike === undefined) {
		return res.status(404).json({message:`Usuario ${finded_user.username} NO tiene ❤️ en la publicación`});
	} 

	finded_user.liked = finded_user.liked.filter((tweetid) => tweetid !== id_tweet)
	finded_tweet.usersMarkedLike = finded_tweet.usersMarkedLike.filter((userid) => userid !== id_user)
	finded_tweet.likes = finded_tweet.usersMarkedLike.length
	res.status(200).json({message:`El usuario ${finded_user.username} desmarco 💔 el tweet con id: ${finded_tweet.id}`});
};

//Metodo de Timeline--------------------------------
const getTimeline = (req, res) => {
	let id_usuario = +req.params.id
	let usuario = users.find((user) => user.id === id_usuario)
	
	if(usuario === undefined){
		return res.status(404).json({message: 'El usuario no se ha podido encontrar'})
	}

	let followings = usuario.followings.map((userFollowingId) => users.find((user) => userFollowingId === user.id))

	let followingTweets = followings.map((userFollowing) => userFollowing.publications.map((findTweet) => tweets.find((tweet) => tweet.id === findTweet)))
	
	res.status(200).json(followingTweets.reverse());
	
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
	getTweets,
	getUserTweets,
	createTweet,
	deleteTweet,
	updateTweet,
};

export const followerMethods = {
	getFollower,
	getFollowing,
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
