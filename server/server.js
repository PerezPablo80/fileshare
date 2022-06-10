const express = require("express");
const formidable = require("formidable");
const app = express();
const port = 3002;
const fs = require("fs");
const dotenv = require("dotenv").config();
app.use(express.json());
//How to handle CORS for all.
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get("/", (req, res) => {
	let newpath = __dirname + "/files";
	var f = [];
	var files = fs.readdirSync(newpath);
	files.forEach((file) => {
		if (file.length > 2) {
			f.push(file);
		}
	});
	res.send(JSON.stringify(f));
});

app.get("/file/:fileName", (req, res) => {
	let newpath = __dirname + "/files/";
	var f = [];
	var file = req.params.fileName;
	res.download(newpath + file, file, function (err) {
		if (err) {
			// Handle error, but keep in mind the response may be partially-sent
			// so check res.headersSent
			console.log("ERROR:", err);
		}
	});
});
app.post("/", (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		let oldpath = files.file.filepath;
		let newpath = __dirname + "/files/" + files.file.originalFilename; // si la ubicacion de index no es la raiz, se debe usar process.cwd()
		fs.copyFile(oldpath, newpath, function (err) {
			if (err) throw err;
			res.send({ status: "ok", msg: "Archivo ingresado correctamente" });
			res.end;
		});
	});
});
app.post("/validate", (req, res) => {
	let user = req.body.user;
	let psd = req.body.password;
	if (user == psd && user == "123") {
		console.log("Is Valid");
		res.send({ user, res: true });
	} else {
		console.log("Is Invalid :: ", user);
		res.send({ user, res: false });
	}
});

app.post("/file/:fileName", (req, res) => {
	let newpath = __dirname + "/files/";
	var file = req.params.fileName;
	let user = req.body.user;
	let psd = req.body.password;
	if (user == psd && user == process.env.USER) {
		res.download(newpath + file, file, function (err) {
			if (err) {
				// Handle error, but keep in mind the response may be partially-sent
				// so check res.headersSent
				console.log("ERROR:", err);
			} else {
				console.log("sin error?");
				// decrement a download credit, etc.
			}
		});
	} else {
		res.send({ user, res: false });
	}

	// res.send(file);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
