	importPackage(java.io);
	document.write('<p>Hello world!</p>');
	function classImport() {
	  var location = new java.net.URL('file:foo/');
	  var urlArray = java.lang.reflect.Array.newInstance(java.net.URL, 1);
	  urlArray[0] = location;
	  var classLoader = new java.net.URLClassLoader(urlArray);
	  return classLoader.loadClass("HelloWorld");
	}

	var myClass = classImport();
	document.write('<p>Hello world!</p>');

	for(var i=0; i<10; i++) {
	  myClass.getConstructor(null).newInstance(null).say();
	} 
