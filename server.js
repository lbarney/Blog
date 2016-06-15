var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));

// var userControl = require('./controllers/userControl.js');
// var projectsControl = require('./controllers/projectsControl.js');
// var blogControl = require('./controllers/blogControl');

// app.post('/blog', blogControl.create);
// app.get('/blog', blogControl.read);
// app.put('/blog/:id', blogControl.update);
// app.delete('/blog/:id', blogControl.delete);
// app.get('/blog/:id', blogControl.readById);

// app.post('/user',userControl.create);
// app.get('/user', userControl.read);
// app.put('/user/:id', userControl.update);
// app.delete('/user/:id', userControl.delete);
// app.get('/user/:id', userControl.readById);

// app.post('/projects', projectsControl.create);
// app.get('/projects', projectsControl.read);
// app.put('/projects/:id', projectsConrtol.update);
// app.delete('/projects/:id', projectsControl.delete);
// app.get('/projects/:id', projectsControl.readById);



// if(process.env.NODE_ENV === 'production'){
// 	console.log('Running In Production Mode');
// 	app.use('/static', express.static('static'));
// }else{
// 	//when not in production, enable hot relode
// 	var chokidar = require('chokidar');
// 	var webpack = require('webpack');
// 	var webpackConfig = require('./webpack.config.dev');
// 	var compiler = webpack(webpackConfig);
// 	app.use(require('webpack-dev-middleware')(compiler,{
// 		noInfo: true,
// 		publicPath: webpackConfig.output.publicPath
// 	}));
// 	app.use(require('webpack-hot-middleware')(compiler));

// 	//Do 'hot-reloading' of express stuff on the server
// 	//Throw away cached modules and re-require next time
// 	//Ensure there's no important state in there!
// 	var watcher = chokidar.watch('./server.js');
// 	watcher.on('ready', function(){
// 		watcher.on('all', function(){
// 			console.log('Clearing /server/ module cache from server');
// 			Object.keys(require.cache).forEach(function(id){
// 				if(/\/server\//.test(id)) delete require.cache[id];
// 			});
// 		});
// 	});
// }

mongoose.connect('mongodb://localhost:27017/lb_blog');
mongoose.connection.once('open', function(){
	console.log('Connected to The lb_blog Database');
});

app.get('/',function(req, res){
	res.render('index.html')
});

app.listen(8000, function(){
	console.log('The Magic is Happening on Port 8000');
});





