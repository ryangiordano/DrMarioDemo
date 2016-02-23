app.controller('pillsController',function($scope){
  var virusController = this;
  $scope.pills = [
    {
      name: "Bluerazopan",
      color: "#15639D",
      alleviates: "Low fever, shivering, runny nose, sore throat",
      date_discovered: '19880713T00:00:00',
      description:"A blue devil that chills the afflicted to the bone, sending them into uncontrollable convulsions.",
      image:'bluepill.png',
      popularity:1
    },
    {
      name: "Redisol",
      color: "#D62027",
      alleviates: "High fever, sweats, headache, drowsiness",
      date_discovered: '19861102T00:00:00',
      description:"A fever reducer used in the treatment of high fevers.",
      image:'redpill.png',
      popularity:2
    },
    {
      name: "Yellowzac",
      color: "#FDBD30",
      alleviates:'',
      date_discovered: '19880219T00:00:00',
      description:"An anti-depressant used in the treatment of weird diseases.",
      image:'yellowpill.png',
      popularity:3
    }
  ];
});
