app.controller('reviewController', function($scope){
  $scope.review = {};
  $scope.reviews = [
    {
    rating: 5,
    body: "The doctor was very thorough. ",
    author: "ryan@example.org",
    createdOn: 1397490980837
    },
    {
    rating: 1,
    body: "This doctor is awful.",
    author: "tim@example.org",
    createdOn: 1397490980837
    },
    {
    rating: 5,
    body: "The doctor was very thorough. ",
    author: "ryan@example.org",
    createdOn: 1397490980837
    },
    {
    rating: 1,
    body: "This doctor is awful.",
    author: "tim@example.org",
    createdOn: 1397490980837
    }
  ];
});
