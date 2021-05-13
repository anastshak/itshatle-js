let btnCircle = document.getElementById("circle");

 let btnSquare = document.getElementById("square");

 
 let btnRectangle = document.getElementById("rectangle");

//круг

 function clickCircle() {
   
   let inputSize = document.createElement('input');
   inputSize.id = "radius";
   inputSize.type = "number";
   inputSize.placeholder = "диаметр, px";
   document.body.append(inputSize);

   let inputColor = document.createElement('input');
   inputColor.type = "text";
   inputColor.id = "color";
   inputColor.placeholder = "цвет заливки, RGB";
   document.body.append(inputColor);

   let inputTop = document.createElement('input');
   inputTop.type = "number";
   inputTop.id = "top";
   inputTop.placeholder = "отступ сверху, px";
   document.body.append(inputTop);


   let inputLeft = document.createElement('input');
   inputLeft.type = "number";
   inputLeft.id = "left";
   inputLeft.placeholder = "отступ слева, px";
   document.body.append(inputLeft);

   let btnCreateCircle = document.createElement('button');
   btnCreateCircle.className = "create-circle-btn";
   btnCreateCircle.type = "submit";
   btnCreateCircle.innerHTML = "Создать";
   document.body.append(btnCreateCircle);

   function createFigure() {
     let figureSize = document.getElementById("radius").value;
     let figureColor = document.getElementById("color").value;
     let figureTop = document.getElementById("top").value;
     let figureLeft = document.getElementById("left").value;


     let circleFigure = document.createElement('div');

     circleFigure.style.backgroundColor = figureColor;
     circleFigure.style.width = `${figureSize}px`;
     circleFigure.style.height = `${figureSize}px`;
     circleFigure.style.borderRadius = "50%";
     circleFigure.style.position = "absolute";
     circleFigure.style.top = `${figureTop}px`;
     circleFigure.style.left = `${figureLeft}px`;

     document.body.append(circleFigure); 
     btnCreateCircle.disabled = "true";
   };
   document.querySelector(".create-circle-btn").addEventListener("click", createFigure);



   btnCircle.disabled = "true";
 };

 btnCircle.addEventListener("click", clickCircle);

//*******************************************************************************************//



//квадрат


























