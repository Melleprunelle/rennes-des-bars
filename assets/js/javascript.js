var w = window.innerWidth;
console.log(w);
if (w > 960) {
  var deleteLog = false;
    $(document).ready(function() {
        $('#pagepiling').pagepiling({
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6',],
          sectionsColor: ['#344955', '#f78c28', '#344955', '#f78c28', '#344955', '#f78c28'],
          loopTop: true,
          loopBottom: true
      });
  });
}