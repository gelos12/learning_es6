$(document).ready(function(){
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById("mainCanvas"));

    // 첫번째
    // var c;
    // for(var  x=25; x <400; ++x){
    //     for (var y=25; y<400;++y){
    //         c = Shape.Circle(x,y,20);
    //         c.fillColor='green';
    //     }
    // }


    //두번쨰 예제
    // var tool = new Tool();
    // tool.onMouseDown = function(event){
    //     var c = Shape.Circle(event.point.x, event.point.y, 20);
    //     c.fillColor = 'red';
    // };

    paper.view.draw();
    console.log("chapter01.js loaded");
})
