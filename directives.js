// DIRECTIVES

weatherApp.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'directive_templates/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: "=",			//two-way binding - object
			convertToStandard: "&",		//two-way binding - function
			convertToDate: "&",			
			dateFormat: "@"				//one-way binding - string
		}
	}


});
