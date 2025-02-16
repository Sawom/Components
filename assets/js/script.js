

    
// JS for email copy to clipboard
const uniqueEmailElement = document.getElementById('unique-email-id');
const copyAlert = document.getElementById('copy-alert');

if (uniqueEmailElement && copyAlert) {
    uniqueEmailElement.addEventListener('click', function() {
        const emailText = uniqueEmailElement.textContent;
        navigator.clipboard.writeText(emailText).then(() => {
            copyAlert.style.display = 'block';

            setTimeout(() => {
                copyAlert.style.display = 'none';
            }, 1000);
        }).catch(err => {
            console.error("Failed to copy email:", err);
        });
    });
}





document.addEventListener('DOMContentLoaded', function () {



  
      // role and company page 0 out of selected
      const checkboxes = document.querySelectorAll('.swiper-slide input[type="checkbox"]');
      const counterDisplay = document.getElementById('selected-counter');
      const totalSlides = checkboxes.length;
    
  
      function updateSelectedCount() {
        const checkedCount = document.querySelectorAll('.swiper-slide input[type="checkbox"]:checked').length;
        counterDisplay.textContent = `${checkedCount} out of ${totalSlides} Selected`;
      }
  
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSelectedCount);
      });



/// Payment method page JS
const paymentOptions = document.querySelectorAll('input[name="paymentOption"]');

paymentOptions.forEach(function (option) {
    option.addEventListener('change', function () {
        document.querySelectorAll('.collapse').forEach(function (element) {
            element.classList.remove('show');
        });
        const target = document.querySelector(option.getAttribute('data-target'));
        if (target) {
            target.classList.add('show');
        }
    });
});




// More Options Button - Toggle visibility of additional payment methods and adjust height of .all-tabs
const moreOptionsBtn = document.getElementById('moreOptionsBtn');
const allTabs = document.querySelector('.payment-form .all-tabs');

if (moreOptionsBtn) {
    moreOptionsBtn.addEventListener('click', function () {
        const additionalMethods = document.getElementById('additionalMethods');

        if (allTabs.style.maxHeight === 'none') {
            // Collapse back to 400px and enable scrolling
            allTabs.style.maxHeight = '400px';
            allTabs.style.overflowY = 'auto';
            additionalMethods.classList.remove('show');
            this.innerHTML = '<img src="assets/icons/caret-down.svg" height="15px"> More Options';
        } else {
            // Expand to show all content without scrolling
            allTabs.style.maxHeight = 'none';
            allTabs.style.overflowY = 'visible';
            additionalMethods.classList.add('show');
            this.innerHTML = '<img src="assets/icons/caret-up.svg" height="15px"> Less Options';
        }
    });
}


// // js for blog page tabs .......
const categories = {
  admin: {
    title: 'Streamlining Business Operations with Effective Administration',
    content: 'Effective administration is the backbone of any successful organization. From managing day-to-day operations to ensuring seamless communication across departments, administrators play a pivotal role in keeping everything on track. This blog delves into the significance of administrative roles, offering insights into modern tools and strategies that enhance productivity. Learn how automation, streamlined workflows, and efficient team management can transform your business. Discover tips for organizing schedules, maintaining records, and fostering a productive workplace culture. Stay tuned for expert advice to master the art of administration and take your organization to the next level.',
    date: '15/07/2023',
    img: './assets/images/Blogs/honeybee.svg' 
  },
  hr: {
    title: 'Building a Strong Workforce: The Heart of Human Resources',
    content: 'HR professionals are the architects of organizational success, focusing on recruiting, retaining, and nurturing talent. This blog explores the latest HR trends, from diversity and inclusion strategies to leveraging HR tech tools like AI in recruitment. Discover tips for creating an engaging workplace culture, developing effective employee training programs, and improving retention rates. Whether you’re a seasoned HR manager or new to the field, this blog offers actionable insights to build a stronger, more cohesive workforce.',
    date: '10/05/2023',
    img: './assets/images/Blogs/professionals.jpg'  
  },
  accountant: {
    title: 'Mastering Finance: Accounting Tips for Modern Businesses',
    content: "Accounting is more than just numbers; it's the language of business. This blog covers essential topics like budgeting, financial planning, tax preparation, and compliance. Learn how technology, such as accounting software and automation, can simplify complex financial processes. Explore tips for tracking expenses, reducing costs, and ensuring financial transparency to drive your business forward.",
    date: '20/04/2023',
    img: './assets/images/Blogs/user_review.jpg'  
  },
  it: {
    title: 'Innovating with IT: The Key to Digital Transformation',
    content: "In today’s digital era, IT is the driver of innovation. This blog dives into the latest in technology, covering topics like cybersecurity, cloud computing, and IoT. Learn how businesses can leverage IT solutions to enhance efficiency, security, and scalability. From troubleshooting tips to IT infrastructure planning, we provide actionable advice to keep your organization ahead in the tech-driven world.",
    date: '05/03/2023',
    img: './assets/images/Blogs/academics.jpg' 
  }
}


  const blogSection = document.getElementById('blogSection');

  function updateContent(category) {
    blogSection.innerHTML = `
      <div class="card mb-4">
        <img src="${categories[category].img}" class="card-img-top" alt="Blog Image">
        <div class="card-body">
          <h5 class="card-title">${categories[category].title}</h5>
          <p class="card-text">${categories[category].content.split(' ').slice(0,35).join(' ')+'...'}</p>

          <div class="feature-block-btn-text">
              <a href="#">Know More</a> 
              <p class="card-text"><small>${categories[category].date}</small></p>
          </div>
        </div>
      </div>
    `;
  }

  const tabButtons = document.querySelectorAll('.all-tabs .btn');

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {

      tabButtons.forEach(btn => btn.classList.remove('active'));

      this.classList.add('active');

      updateContent(this.id.replace('Btn', '').toLowerCase());
    });
    
  });



// Book appointment calendar
    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    const prevNextIcon = document.querySelectorAll(".icons span");

    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    const months = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];

    let unavailableDates = [5, 12, 18, 25];  // Example unavailable dates

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }
        for (let i = 1; i <= lastDateofMonth; i++) {
            let unavailableClass = unavailableDates.includes(i) ? "unavailable-date" : "";
            let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                        && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday} ${unavailableClass}">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
        }

        if (currentDate) {
            currentDate.innerText = `${months[currMonth]} ${currYear}`;
        } else {
            console.error("Element with class 'current-date' not found.");
        }

        if (daysTag) {
            daysTag.innerHTML = liTag;
        } else {
            console.error("Element with class 'days' not found.");
        }
    };

    renderCalendar();

    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

            if (currMonth < 0 || currMonth > 11) {
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear();
                currMonth = date.getMonth();
            } else {
                date = new Date();
            }
            renderCalendar();
        });
    });








});









// document.addEventListener('DOMContentLoaded', function () {

    // 1. Toggle Password Visibility
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function () {
            const passwordField = this.previousElementSibling;
            const eyeIcon = this.querySelector('img');

            if (passwordField.type === "password") {
                passwordField.type = "text";
                eyeIcon.src = "assets/icons/eye-open.svg";
            } else {
                passwordField.type = "password";
                eyeIcon.src = "assets/icons/eye-close.svg";
            }
        });
    });
    

// JavaScript for FAQ accordion
const accordionHeaders = document.querySelectorAll('.faq-page .accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');

        // Toggle the active class for the clicked item
        accordionItem.classList.toggle('active');

        // Collapse or expand the clicked accordion content
        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0';
        }

        // Remove the active class and collapse other accordion items
        accordionHeaders.forEach(otherHeader => {
            const otherItem = otherHeader.parentElement;
            const otherContent = otherItem.querySelector('.accordion-content');

            if (otherItem !== accordionItem) {
                otherItem.classList.remove('active');
                otherContent.style.maxHeight = '0';
            }
        });
    });
});



    // Form Validation Function
function checkForm(form, submitButton) {
  let fieldsMustBeFilled = true;

  for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];

      if (element.type === 'button' || element.type === 'submit') {
          continue;
      }

      if (element.type === 'checkbox' && !element.checked) {
          fieldsMustBeFilled = false;
          break;
      }

      if (element.value.trim() === '') {
          fieldsMustBeFilled = false;
          break;
      }
  }

  if (fieldsMustBeFilled) {
      submitButton.disabled = false;
      submitButton.style.backgroundColor = "var(--primary-color)";
      submitButton.style.color = "white";
  } else {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = "";
      submitButton.style.color = "";
  }
}

document.querySelectorAll('form').forEach(function(form) {
  const submitButton = form.querySelector('.submit-button');
  if (submitButton) {
      form.addEventListener('input', () => checkForm(form, submitButton));
      form.addEventListener('change', () => checkForm(form, submitButton));

      checkForm(form, submitButton);
  }
});

    //// 3. Dropdown Functionality for get hired page
    function setupDropdown(container) {
        const selected = container.querySelector('.selected');
        const dropdown = container.querySelector('.dropdown-list');

        selected.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdown.classList.toggle('show');
            selected.classList.toggle('active');
        });

        dropdown.querySelectorAll('li').forEach(function(item) {
            item.addEventListener('click', function() {
                selected.innerText = this.innerText;
                selected.setAttribute('data-value', this.getAttribute('data-value'));
                dropdown.classList.remove('show');
                selected.classList.remove('active');
            });
        });
    }

    document.querySelectorAll('.custom-select').forEach(function(container) {
        setupDropdown(container);
    });


    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        document.querySelectorAll('.dropdown-list.show').forEach(function(dropdown) {
            dropdown.classList.remove('show');
        });
        document.querySelectorAll('.selected.active').forEach(function(selected) {
            selected.classList.remove('active');
        });
    });


      //   slider for home what we offer section
      var swiper_what_we_offer = new Swiper(".home-what-we-offer .slide-content", {
        slidesPerView: 1.7,
        spaceBetween: 40,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 600,
        pagination: {
          el: ".home-what-we-offer .swiper-pagination",
          clickable: true,
          },
        navigation: {
        nextEl: ".home-what-we-offer .swiper-button-next",
        prevEl: ".home-what-we-offer .swiper-button-prev",
        },
        breakpoints: {
          1600: {
            spaceBetween: 35,
            slidesPerView: 1.7,
          },
          1100: {
            slidesPerView: 1.7,
          },
          768: {
            slidesPerView: 1,
              spaceBetween: 25,
          },
          480: {
            slidesPerView: 1,
              spaceBetween: 10,
          },
          0:{
            slidesPerView: 1,
          },
      },
        
    });
    // end what we offer

    // feature slider of home page
    var home_feature_slider = new Swiper(".home-service .home-feature-slider-container .slide-content", {
      slidesPerView: 4,
      spaceBetween: 40,
      loop: true,
      speed:1000,
      autoplay: {
        delay: 3000,
      },
      grabCursor: true,
      pagination: {
        el: ".home-service .home-feature-slider-container .swiper-pagination",
        clickable:true,
        },
      navigation: {
        nextEl: ".home-feature-slider-container .swiper-button-next",
        prevEl: ".home-feature-slider-container .swiper-button-prev",
        },
        breakpoints: {
          1600: {
            spaceBetween: 35,
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 4,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 25,
          },
          480: {
              slidesPerView: 2,
              spaceBetween: 10,
          },
          0:{
            slidesPerView: 1,
          }
      },
           
  });


// service slider for home page
// service slider start
  var swiper = new Swiper(".home-service .service-slider", {
    slidesPerView: 6,
    spaceBetween: 40,
    centeredSlides: false,
    speed:1000,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".home-service .service-slider-container .swiper-button-next",
      prevEl: ".home-service .service-slider-container .swiper-button-prev",
      },
    breakpoints: {
      1600: {
        spaceBetween: 35,
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 15,
      },
      480: {
        slidesPerView: 2,
          spaceBetween: 10,
      },
      0:{
          slidesPerView:1,
      }
  },
  
  });
// service slide for example
  
// News slider of home page
var news_slider_swiper = new Swiper(".home-service .home-news-letter-container .slide-container", {
  slidesPerView: 6,
  loop: true,
  spaceBetween: 24,
  centeredSlides: false,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicMainBullets: 4,
  },
  navigation: {
    nextEl: ".home-news-letter-container .swiper-button-next",
    prevEl: ".home-news-letter-container .swiper-button-prev",
    },
  breakpoints: {
    1600: {
      slidesPerView: 6,
    },
    1300: {
      spaceBetween: 24,
      slidesPerView: 6,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
        spaceBetween: 15,
    },
    480: {
        slidesPerView: 2.2,
        spaceBetween: 10,
    },
    0:{
      slidesPerView:1.3,
    }
},
});



  // Client slider of home page
var home_client_slider = new Swiper(".home-service .home-client-slider-container .slide-content", {
  slidesPerView: 4,
  spaceBetween: 35,
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".home-service .home-client-slider-container .swiper-pagination",
  },
  navigation: {
    nextEl: ".home-service .home-client-slider-container .swiper-button-next",
    prevEl: ".home-service .home-client-slider-container .swiper-button-prev",
  },
  breakpoints: {
    1600: {
      spaceBetween: 35,
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    850: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    480: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

  

    // slider for single blog page
    var swiper_single_blog = new Swiper(".single-blog-page .slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    speed:1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1600: {
        spaceBetween: 35,
      },
      1300: {
        spaceBetween: 25,
      },
      1100: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 15,
      },
      0: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
  },
  });


  // about us page slider
  var swiper_about_us = new Swiper(".about-us .slide-content", {    
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    speed:1000,
    autoplay: {
      delay: 3000,
    },
    pagination: {
        el: ".about-us .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".about-us .swiper-button-next",
        prevEl: ".about-us .swiper-button-prev",
    },

      // Responsive breakpoints
    breakpoints: {
    1024:{
        slidesPerView: 5,
        spaceBetween: 30,
      },
    768: {
        slidesPerView: 3,
    },
    350: {
        slidesPerView: 2.3,
        spaceBetween: 10,
    },
    0:{
      slidesPerView: 1,
    }
  }

});



// role company slider 
var role_company_page = new Swiper('.role-company-page .content .swiper-container', {
  loop: true,
  speed: 400,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
      rotate: 0,
      stretch: 20,
      depth: 200,
      modifier: 2,
      slideShadows: false,
  },
      pagination: {
      el: ".swiper-pagination",
      },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

})


    






// about us page tabs function
function showTab(tabName) {
  var tabContentContainer = document.querySelector(".tab-content");
  if (tabContentContainer) {
      tabContentContainer.classList.remove('d-none');
  }

  var tabs = document.querySelectorAll(".tab-content .row");
  tabs.forEach(tab => {
      if (tab) tab.classList.add('d-none');
  });

  var selectedTab = document.getElementById(tabName);
  if (selectedTab) {
      selectedTab.classList.remove('d-none');
  }
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  var clickedButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
  if (clickedButton) {
      clickedButton.classList.add('active');
  }
}

function closeTab() {
    var tabContentContainer = document.querySelector(".tab-content");
    tabContentContainer.classList.add('d-none');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
}

showTab('android');





// role and company page.s tabs
const role_tabs=document.querySelectorAll(".role-company-page .tab-container .tab-btn");
const tab_all_content=document.querySelectorAll(".role-company-page .tab-container .content-box .content")
role_tabs.forEach((tab, index)=>{
    tab.addEventListener('click', (e)=>{
        role_tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        var line=document.querySelector('.line');
        line.style.width=e.target.offsetWidth + "px";
        line.style.left=e.target.offsetLeft + "px";

        tab_all_content.forEach(content=>{content.classList.remove('active')})
        tab_all_content[index].classList.add('active');
    })


})



// home page nector video
const nectCustomPlayBtn = document.getElementById('nectorCustomPlayBtn');
if (nectCustomPlayBtn) {
  nectCustomPlayBtn.addEventListener('click', function () {
    const player = document.getElementById('nectorYoutubePlayer');
    player.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'playVideo' }),
      '*'
    );
    document.getElementById('nectorFeatureImage').style.display = 'none';
    this.style.display = 'none';
    document.querySelector('.home-service .nector-video .video-info .overlay').style.display = 'none';
  });
} else {
  console.log('nectorCustomPlayBtn element not found!');
}


let popupOverlay = document.querySelector(".popup-overlay");
let popupImage = document.getElementById("popup-image");
let closeBtn = document.querySelector(".close-btn");
let videoIframe = document.querySelector(".video iframe");

if (popupOverlay && popupImage && closeBtn && videoIframe) {
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", (event) => {
            const imgSrc = product.querySelector(".product-img img").src;
            popupImage.src = imgSrc;
            popupOverlay.style.display = "flex";
            setTimeout(() => popupOverlay.classList.add("active"), 10);
        });
    });

    closeBtn.addEventListener("click", () => {
        popupOverlay.classList.remove("active");
        videoIframe.src = ""; 

        setTimeout(() => {
            popupOverlay.style.display = "none"; 
            videoIframe.src = "https://www.youtube.com/embed/ekgUjyWe1Yc?si=dyWOT8X_rqUrzkAQ";
        }, 500);
    });
} else {
    console.log("One or more elements are missing");
}





// creating company page js
function creatingMakeEditable() {

  document.getElementById("companyName").innerHTML = `<input type="text" value="UV Desk" id="companyNameInput" class="form-control">`;
  document.getElementById("companyType").innerHTML = `<input type="text" value="Wolor sit amet consectetur." id="companyTypeInput" class="form-control">`;
  document.getElementById("companyDescription").innerHTML = `<textarea id="companyDescriptionInput" class="form-control">AI Enhanced Website Builder specializes in AI-enhanced website.</textarea>`;
  document.getElementById("companySize").innerHTML = `<input type="text" value="150 Employees" id="companySizeInput" class="form-control">`;
  document.getElementById("companyLogo").outerHTML = `<input type="file" id="companyLogoInput" class="form-control">`;


  const titleElement = document.querySelector('.main-title');
  titleElement.innerHTML = `Company Information 
    <img class="check-img" src="assets/images/creating-company/check.svg" onclick="saveChanges()">
    <img class="cross-img" src="assets/images/creating-company/cross.svg" onclick="creatingCancelEdit()">`;
}


function creatingCancelEdit() {

  document.getElementById("companyName").innerHTML = "UV Desk";
  document.getElementById("companyType").innerHTML = "Wolor sit amet consectetur.";
  document.getElementById("companyDescription").innerHTML = "AI Enhanced Website Builder specializes in AI-enhanced website.";
  document.getElementById("companySize").innerHTML = "150 Employees";


  document.getElementById("companyLogoInput").outerHTML = `<img src="assets/images/creating-company/company-logo.svg" alt="logo" class="company-logo" id="companyLogo">`;

  const titleElement = document.querySelector('.main-title');
  titleElement.innerHTML = `Company Information 
    <img src="assets/images/creating-company/edit.svg" alt="Edit" onclick="creatingMakeEditable()" style="cursor: pointer;">`;
}




// navbar active add and remove class
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          // Remove the 'active' class from all links
          navLinks.forEach(link => link.classList.remove('active'));
          
          // Add 'active' class to the clicked link
          this.classList.add('active');
      });
  });

// 30 words more showing know more button 
document.addEventListener("DOMContentLoaded", function () {
    const cardText = document.querySelector(".card-text");
    const knowMoreLink = document.querySelector(".know-more-link");
  
    // Get the full text from the `data-full-text` attribute
    const fullText = cardText.getAttribute("data-full-text");
    const wordLimit = 30;
  
    // Split text into words
    const words = fullText.split(" ");
  
    // Check if the text exceeds the word limit
    if (words.length > wordLimit) {
      // Show only the first 30 words
      const truncatedText = words.slice(0, wordLimit).join(" ") + "...";
      cardText.textContent = truncatedText;
  
      // Show the "Know More" link
      knowMoreLink.style.display = "inline-block";
    } else {
      // Show the full text if it's within the limit
      cardText.textContent = fullText;
    }
  });
  