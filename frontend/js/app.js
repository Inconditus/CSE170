angular.module('app', ['components'])

.controller('HistoryCounter', function($scope, $locale) {
  $scope.items = [
    {"date": 2012-04-01, "item": "Julian Pie", "sold": 200},
    {"date": 2012-03-23, "item": "AA Jackets", "sold": 32},
    {"date": 2012-02-34, "item": "Kittens", "sold": 9000},
    {"date": 2011-12-22, "item": "Beef Jerky", "sold": 123},
    {"date": 2012-04-01, "item": "Apples", "sold": 111},
  ];

  $scope.reviews = [
    {"rdate": 2012-04-01, "ritem": "Julian Pie", "review": "WOW"},
    {"rdate": 2012-03-23, "ritem": "AA Jackets", "review": "SUCH CHEAP"},
    {"rdate": 2012-02-34, "ritem": "Kittens", "review": "10/10 would buy again"},
    {"rdate": 2011-12-22, "ritem": "Beef Jerky", "review": "DAMN"},
    {"rdate": 2012-04-01, "ritem": "Apples", "review": "THUMBS UP!"},
  ];
});
