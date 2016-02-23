app.controller('virusController',function($scope){
  var virusController = this;
  $scope.viruses = [
    {
      name: "Chill",
      color: "#15639D",
      symptoms: "Low fever, shivering, runny nose, sore throat",
      severity: "mild",
      date_discovered: '19861102T00:00:00',
      description:"A blue devil that chills the afflicted to the bone, sending them into uncontrollable convulsions.",
      gallery: 'blueanimate.gif',
      image:'chill.png'
    },
    {
      name: "Fever",
      color: "#D62027",
      symptoms: "High fever, sweats, headache, drowsiness",
      severity: 'critical',
      date_discovered: '20070220T00:00:00',
      description:"A little red virus that causes the afflicted to hallucinate.",
      gallery: 'redanimate.gif',
      image:'fever.png'
    },
    {
      name: "Weird",
      color: "#FDBD30",
      symptoms: "Depression, anxiety, sluggishness, nausea",
      severity: "severe",
      date_discovered: '20140313T00:00:00',
      description:"A strange yellow fellow that causes depression and anxiety in the afflicted individual.",
      gallery: 'yellowanimate.gif',
      image:'weird.png'
    }
  ];
});
