let formContainer = document.querySelector(".formContainer");
let close = document.querySelector(".close");
let body = document.querySelector("body");
let LOGIN = document.querySelector(".LOGIN");
let SIGNUP = document.querySelector(".SIGNUP");
let signUp = document.querySelector(".sign-up");
let Login = document.querySelector(".log-in");
let forgotPass = document.querySelector(".forgotPass");
let forgot = document.querySelector(".forgot");
let signIn = document.querySelector(".sign-in");
let q1 = document.querySelector(".first");
let q2 = document.querySelector(".second");
let q3 = document.querySelector(".third");
let q4 = document.querySelector(".fourth");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
let img9 = document.querySelector(".img9");
let img10 = document.querySelector(".img10");
let img11 = document.querySelector(".img11");
let img12 = document.querySelector(".img12");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let loginImage = document.querySelector(".loginImage img");

let arrC = [img1 , img2 , img3 , img4 , img5 , img6 , img7 , img8 , img9 , img10 , img11 , img12];
let arr = [img1 , img2 , img3 , img4 ];

                      /*  Login/Signup Page  */

let count = 0;
function changeImage(count)
{
  close.addEventListener('click' , () => {
    count=10;
  });
  if(count == 10) return 0;
  setTimeout(() => {
    if(count == 0)  loginImage.src = "./Images/Firefly Travel booking site images 93503 (1).jpg";
    else if(count == 1) loginImage.src = "./Images/Firefly Travel booking site images 19399.jpg";
    else if(count == 2) loginImage.src = "./Images/Firefly Travel booking site images 76388.jpg";
    else if(count == 3) loginImage.src = "./Images/Firefly Travel booking site images 99430.jpg";
    count++;
    if(count == 4)  count=0;
    
    console.log(`count changed from to ${count}`);
    changeImage(count);
  }, 1000);

  
}

signIn.addEventListener('click' , () => {
    formContainer.showModal();
    count=0;
    changeImage(count);
    body.style.filter = "blur(4px)";
    body.style.overflow = "none";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
    forgotPass.style.display = "none";
});

close.addEventListener('click' , () => {
    formContainer.close();
    body.style.filter = "blur(0px)";
    console.log('closed');
})
signUp.addEventListener('click' , () => {
    SIGNUP.style.display = "block";
    console.log("displaying signup");
    LOGIN.style.display = "none";
    console.log("hided login page ...");
})
Login.addEventListener('click' , () => {
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
})

forgot.addEventListener('click' , () => {
    forgotPass.style.display = "block";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "none";
    console.log("displaying");
})

                                    // FAQ Section
                                    
function toggleRotation(svgElement) {
    svgElement.classList.toggle('rotate');
  }
  
                          // Function to handle FAQ toggle
  function toggleFaq(qElement, ansElement, counter) {
    toggleRotation(qElement.querySelector('svg'));
  
    if (counter % 2 === 0) {
      qElement.querySelector('svg').classList.remove("hello");
      ansElement.classList.add("trans");
      qElement.after(ansElement);
      ansElement.classList.add("faqbox");
      ansElement.classList.add("seperate");
    } else {
      ansElement.remove();
      qElement.querySelector('svg').classList.add("hello");
    }
  }
  
  // Initialize counters
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  let cnt4 = 0;
  
  // FAQ 1
  let ans1 = document.createElement("div");
  ans1.innerText = "Our website is designed to be intuitive and easy to navigate, ensuring a smooth booking experience for users of all ages and technical abilities.";
  q1.addEventListener('click', () => {
    toggleFaq(q1, ans1, cnt1);
    cnt1++;
    ans1.style.marginTop = "0rem";
  });
  
  // FAQ 2
  let ans2 = document.createElement("div");
  ans2.innerText = "Find the flight search section.Enter your departure city or airport..Search for Flights.Click the Search button to display available flights based on your criteria.Select a FlightReview the list of available flights.Compare prices, flight times, layovers, and airline options.Select the flight that best meets your needs.";
  q2.addEventListener('click', () => {
    toggleFaq(q2, ans2, cnt2);
    cnt2++;
    ans2.style.marginTop = "0rem";
  });
  
  // FAQ 3
  let ans3 = document.createElement("div");
  ans3.innerText = "To book a train ticket on our website, start by locating the train search section, typically found on the homepage. Review this list carefully, comparing train timings, journey duration, and class availability. Finally, select the train that best fits your schedule and preferences.";
  q3.addEventListener('click', () => {
    toggleFaq(q3, ans3, cnt3);
    cnt3++;
    ans3.style.marginTop = "0rem";
  });
  
  // FAQ 4
  let ans4 = document.createElement("div");
  ans4.innerText = "Booking bus tickets through our website offers several advantages. We provide a comprehensive list of bus operators and routes, allowing you to compare various options and choose the one that best fits your needs. The platform shows real-time availability of seats, ensuring that the information you see is accurate and up-to-date.";
  q4.addEventListener('click', () => {
    toggleFaq(q4, ans4, cnt4);
    cnt4++;
    ans4.style.marginTop = "-1rem";
    ans4.style.marginBottom = "1rem";
  });
  


                          //  Image Sliding Code
let i = 0;
img5.style.display = "none";
img6.style.display = "none";
img7.style.display = "none";
img8.style.display = "none";
img9.style.display = "none";
img10.style.display = "none";
img11.style.display = "none";
img12.style.display = "none";
left.addEventListener('click' , () => {
    
    if(i != 0)  
    {
        arrC[i-1].style.display = "block";
        arrC[i+3].style.display = "none";
        i--;
    }  
})
right.addEventListener('click' , () => {
    if(i < 8)  i++;
    else     i = 0;
    if(i < 9)
    {
        arrC[i].style.display = "block";
        arrC[i+1].style.display = "block";
        arrC[i+2].style.display = "block";
        arrC[i+3].style.display = "block";
        for(let j=0;j<i;j++)    arrC[j].style.display = "none"; 
        for(let j=i+4;j<12;j++) arrC[j].style.display = "none";      
    }
})