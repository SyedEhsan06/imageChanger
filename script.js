let imgContainer = document.querySelector('.imgContainer');
let textContainer = document.querySelector('.textContainer');
let progress = document.querySelector('.line');
let text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit unde tempora ea necessitatibus nostrum nobis accusamus inventore, nemo, natus laboriosam eligendi modi enim voluptatum magnam eveniet pariatur, minus saepe placeat harum aspernatur. Ipsum sunt accusantium sapiente, maiores dignissimos fuga!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequatur adipisci illo dolores esse nam culpa recusandae. Corporis nam sed asperiores architecto repellat iste sequi rem, repudiandae natus eaque animi, ratione veniam ullam voluptatum saepe culpa facere tenetur nemo quia.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia facere ut aliquid doloremque voluptatibus doloribus voluptatem quis minus facilis earum nesciunt beatae inventore quam minima quo molestiae dolor perspiciatis nostrum nam, repudiandae, itaque veritatis quod. Delectus temporibus hic repellendus aliquam."
];
let images = ["1.jpg", "2.jpeg", "y1.jpg"];
let elem = document.getElementsByClassName("e1");
let indexOfimg = 0;
let height = 0;
var time = 0;

function changeImage() {
    indexOfimg++;
  if (indexOfimg == images.length) {
    indexOfimg = 0;
  }

  elem[0].style.marginTop = `${indexOfimg * 5}vh`;
  if (indexOfimg==0) {
  elem[0].style.height = `15%`;
  }
  else if(indexOfimg==1){
    elem[0].style.height = `16%`;
  }
  else{
  elem[0].style.height = `17%`;

  }
  imgContainer.firstElementChild.attributes.src.value = images[indexOfimg];
  imgContainer.firstElementChild.attributes.style.value = `animation: fade 1s ease-in-out;opacity: 1;`;
  let previousIndex = indexOfimg - 1 < 0 ? images.length - 1 : indexOfimg - 1;
  textContainer.children[previousIndex].children[1].innerHTML = "";
  textContainer.children[indexOfimg].children[1].innerHTML = text[indexOfimg];
}

var prointerval = setInterval(() => {
  if (height == 100) {
    changeImage();
  }
  if (height == 100) {
    height = 0;
  }
  progress.style.height = `${height}%`;
  height = height + 2;
}, 50);

textContainer.addEventListener('click', (e) => {
    clearInterval(prointerval);
    let index = e.target.parentElement.children[1].attributes.id.value;
    indexOfimg = index;
  
    elem[0].style.marginTop = `${(index-1) * 5}vh`;
    progress.style.height = `100%`;
    imgContainer.firstElementChild.attributes.src.value = images[index - 1];
    Array.from(textContainer.children).forEach((child) => {
      child.children[1].innerHTML = "";
    });
  
    let cindex = index - 1 < 0 ? images.length - 1 : index - 1;
    textContainer.children[cindex].children[1].innerHTML = text[cindex];
  });
  
