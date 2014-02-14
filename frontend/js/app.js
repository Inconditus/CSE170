angular.module('app', ['components'])

.controller('HistoryCounter', function($scope, $locale) {
  $scope.items = [
    {"date": "2012-04-01", "item": "Julian Pie", "sold": 200, "avgrate": 91},
    {"date": "2012-03-23", "item": "AA Jackets", "sold": 32, "avgrate": 21},
    {"date": "2012-02-34", "item": "Kittens", "sold": 9000, "avgrate": 39},
    {"date": "2011-12-22", "item": "Beef Jerky", "sold": 123, "avgrate": 99},
    {"date": "2012-04-01", "item": "Apples", "sold": 111, "avgrate": 90},
  ];

  $scope.reviews = [
    {"rdate": "2012-04-01", "ritem": "Julian Pie", "rating": 90, "review": "WOW" },
    {"rdate": "2012-03-23", "ritem": "AA Jackets", "rating": 100, "review": "SUCH CHEAP"},
    {"rdate": "2012-02-34", "ritem": "Kittens", "rating": 80, "review": "10/10 would buy again"},
    {"rdate": "2011-12-22", "ritem": "Beef Jerky", "rating": 100, "review": "DAMN"},
    {"rdate": "2012-04-01", "ritem": "Apples", "rating": 100, "review": "THUMBS UP!"},
  ];
  
});
