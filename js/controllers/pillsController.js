app.controller('pillsController',function($scope){
  var virusController = this;
  $scope.pills = [
    {
      name: "Bluerazopan",
      color: "#15639D",
      symptoms: "Low fever, shivering, runny nose, sore throat",
      severity: "mild",
      date_discovered: "",
      description:"A blue devil that chills the afflicted to the bone, sending them into uncontrollable convulsions.",
      gallery: ['','',''],
      image:'bluepill.png'
    },
    {
      name: "Redisol",
      color: "#D62027",
      symptoms: "High fever, sweats, headache, drowsiness",
      severity: "severe",
      date_discovered: "",
      description:"A fever reducer used in the treatment of high fevers.",
      gallery: ['','',''],
      image:'redpill.png'
    },
    {
      name: "Yellowzac",
      color: "#FDBD30",
      date_discovered: "",
      description:"An anti-depressant used in the treatment of weird diseases.",
      gallery: ['','',''],
      image:'yellowpill.png'
    }
  ];
});
