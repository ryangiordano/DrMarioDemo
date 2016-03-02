app.controller('reviewController', function($scope){
  $scope.review = {};
  $scope.reviews = [
    {
    rating: 5,
    title:"Great!",
    body: "A super doctor!",
    author: "ryan@example.org",
    createdOn: 1397490980837
    },
    {
    rating: 3,
    title:"Awful",
    body: "This doctor is awful.",
    author: "tim@example.org",
    createdOn: 1397490980837
    },
    {
    rating: 5,
    title:"Thorough",
    body: "The doctor was very thorough. ",
    author: "lo@example.org",
    createdOn: 1397490980837
    },
    {
    rating: 1,
    title:"Prescribed mushrooms...",
    body: "Every time I see him, he prescribes a homeopathic fungal remedy.",
    author: "matt@example.org",
    createdOn: 1397490980837
    }
  ];
  $scope.addReview = function(){
    $scope.reviews.unshift($scope.review);
    $scope.review = {};
  }
});
