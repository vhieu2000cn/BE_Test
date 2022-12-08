const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');
fileSystem = require('fs'),
	path = require('path');


const port = process.env.PORT;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
	var filePath = path.join(__dirname, 'resultTxt.txt')
	var readStream = fileSystem.createReadStream(filePath)
	readStream.pipe(res)

});

app.get('/popular/:id', function (req, res) {
	let id = req.params.id
	let url = `https://api.themoviedb.org/3/movie/popular?api_key=e7631ffcb8e766993e5ec0c1f4245f93&page=${id}`
	axios.get(url,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}
	)
		.then(response => {
			res.send(response.data)
		})
		.catch(function (error) {
			res.send(error)
		})
});

app.get('/top_rated/:id', function (req, res) {
	let id = req.params.id
	let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=e7631ffcb8e766993e5ec0c1f4245f93&page=${id}`
	axios.get(url,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}
	)
		.then(response => {
			res.send(response.data)
		})
		.catch(function (error) {
			res.send(error)
		})
});

app.get('/upcoming/:id', function (req, res) {
	let id = req.params.id;
	let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=e7631ffcb8e766993e5ec0c1f4245f93&page=${id}`
	axios.get(url,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}
	)
		.then(response => {
			res.send(response.data)
		})
		.catch(function (error) {
			res.send(error)
		})
});

app.get('/now_playing/:id', function (req, res) {
	let id = req.params.id
	let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=e7631ffcb8e766993e5ec0c1f4245f93&page=${id}`;
	axios.get(url,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}
	)
		.then(response => {
			res.send(response.data)
		})
		.catch(function (error) {
			res.send(error)
		})
});

app.get('/detail/:id', function (req, res) {
	let id = req.params.id
	let url = `https://api.themoviedb.org/3/movie/${id}?api_key=e7631ffcb8e766993e5ec0c1f4245f93`;
	axios.get(url,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}
	)
		.then(response => {
			res.send(response.data)
		})
		.catch(function (error) {
			res.send(error)
		})
});
app.get('/cast/:id', function (req, res) {
	let id = req.params.id;
	let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e7631ffcb8e766993e5ec0c1f4245f93`
	axios.get(url,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}
	)
		.then(response => {
			res.send(response.data)
		})
		.catch(function (error) {
			res.send(error)
		})
})

app.get('/search/:query', function (req, res) {
	let query = req.params.id;
	let url = `https://api.themoviedb.org/3/search/movie/?api_key=e7631ffcb8e766993e5ec0c1f4245f93&query=${query}`;
	axios.get(url,
		{
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}
	)
		.then(response => {
			res.send(response.data)
		})
		.catch(function (error) {
			res.send(error)
		})
})

app.get('/image/:size/:path', (req, res) => {
	let size = req.params.size;
	let path = req.params.path;
	let url = `https://image.tmdb.org/t/p/${size}/${path}`;
	axios.get(url)
		.then(response => {
			res
				.set('Content-Type', 'image/jpeg')
				.send(response.data)
		})
		.catch(error => {
			res.send(error)
		})
})

app.listen(port, ()=> {
	console.log("sever runing:", port)
})