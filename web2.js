    let burger1 = document.getElementById('burger');
    let sideNav = document.getElementById('side-nav');
    let block = document.getElementById('block');
    let line1 = document.getElementById('line1')
    let line2 = document.getElementById('line2')
    let line3 = document.getElementById('line3')

    sideNav.style.right="-250px";
    block.style.display="flex";
    burger1.addEventListener('click',()=>{
        console.log('clicked')
        if(sideNav.style.right=="-250px"){
            sideNav.style.right="0";
            block.style.display="none"
        }
        else{
            sideNav.style.right='-250px';
            block.style.display='flex';
            line1.style.display="block";
        }
      });
        sideNav.style.right="-250px"
        sideNav.style.transition="0.5s"
        sideNav.addEventListener('click',()=>{
        if(sideNav.style.right=="-250px"){
            sideNav.style.right="0";
        }
        else{
            sideNav.style.right='-250px'
        }
    });

    let circle1 = document.querySelector('.circles .circle-1');
    let body = document.getElementById('body');
    circle1.addEventListener('click',()=>{
        if(circle1){
            body.style.backgroundColor="white";
        }
    });

    let circle2=document.querySelector('.circles .circle-2')
    circle2.addEventListener('click',()=>{
        if(circle2){
        body.style.backgroundColor="rgb(198, 238, 20)";
        }
    });
    let circle3 = document.querySelector('.circles .circle-3');
    circle3.addEventListener('click',()=>{
        if(circle3){
            body.style.backgroundColor="rgb(51,51,51)";
        }
    })
