require(['domReady'], function (domReady) {
	domReady(function () {
		var txt = document.getElementsByClassName("txt")[0];
		var schema = document.getElementsByClassName("book-schema")[0];
		var str = "";

		if( txt && schema) {
			str += "requireJS domReady: able to read DOM"
		}

		var ele = document.createElement("p");
		ele.innerHTML = str || "requireJS domReady: unable to read DOM"

		document.body.appendChild(
			ele
		);
	});
});

// alternate way of specifying domReady
// this removes the nested function shown above

// require(['domReady!'], function (doc) {
// 	
// 		var txt = document.getElementsByClassName("txt")[0];
// 		var schema = document.getElementsByClassName("book-schema")[0];
// 		var str = "";
// 
// 		if( txt && schema) {
// 			str += "requireJS domReady: able to read DOM"
// 		}
// 		
// 		var ele = document.createElement("p");
// 		ele.innerHTML = str || "requireJS domReady: unable to read DOM"
// 
// 		document.body.appendChild(
// 			ele
// 		);
// 	
// });