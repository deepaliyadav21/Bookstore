const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://codemaster:codemaster@cluster0.o64mg.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster0"
	).then(() => console.log("Connected"));