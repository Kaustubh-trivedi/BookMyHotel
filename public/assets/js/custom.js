// select--------------------->
$(document).ready(function () {
    $("select").niceSelect();
});

// header-top-options------------------------------->
function selectBoxHandler(selector) {
    const countryTop = document.querySelector(`#${selector}`);
    const selectBoxBody = document.querySelector(`#${selector} .slectbox-body`);
    if (selectBoxBody.style.display === "none") {
        selectBoxBody.style.display = "block";
        if (countryTop) {
            let countryOption = countryTop.querySelectorAll(".all-option"),
                countryBtn_text = countryTop.querySelector(".list-text");
            countryOption.forEach((option) => {
                option.addEventListener("click", () => {
                    let selectedOption = option.querySelector(".list-text").innerText;
                    // countrybtn-text
                    countryBtn_text.innerHTML = selectedOption;
                    selectBoxBody.style.display = "none";
                });
            });
        }
    } else {
        selectBoxBody.style.display = "none";
    }
}
function hotelsPstatusAction(selector) {
    const countryTop = document.querySelector(`#${selector}`);
    const selectBoxBody = document.querySelector(`#${selector} .slectbox-body`);
    const mainBtn = document.querySelector(`#${selector} .status-btn`);
    if (selectBoxBody.style.display === "none") {
        selectBoxBody.style.display = "block";
        if (countryTop) {
            let countryOption = countryTop.querySelectorAll(".all-option"),
                countryBtn_text = countryTop.querySelector(".list-text");
            countryOption.forEach((option) => {
                option.addEventListener("click", () => {
                    let selectedOption = option.querySelector(".list-text").innerText;
                    // countrybtn-text
                    countryBtn_text.innerHTML = selectedOption;
                    selectBoxBody.style.display = "none";
                    if (countryBtn_text.innerText.toLowerCase() === "active") {
                        mainBtn.classList.add("active");
                        mainBtn.classList.remove("deactive");
                    } else {
                        mainBtn.classList.remove("active");
                        mainBtn.classList.add("deactive");
                    }
                });
            });
        }
    } else {
        selectBoxBody.style.display = "none";
    }
}

// modal -------------------->
function modalAction(elemnt) {
    const moalMain = document.querySelector(elemnt);
    if (moalMain.classList.contains("active")) {
        moalMain.classList.remove("active");
    } else {
        moalMain.classList.add("active");
    }
}

// tooltip -------------------->
const purchase_btns = document.querySelectorAll(".purchase-btn");
const invoice_wrappers = document.querySelectorAll(".invoice-option");

purchase_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);
        const invoice_wrapper = e.currentTarget.parentNode.querySelector(".invoice-option");

        invoice_wrappers.forEach((wrapper) => {
            if (wrapper.classList.contains("active") && invoice_wrapper !== wrapper) {
                wrapper.classList.remove("active");
            }
        });

        invoice_wrapper.classList.toggle("active");
    });
});



// back to top-------------------->
$(" .backto-top").click(function () {
    $("html,body").animate({
        scrollTop: 0,
    });
});

$(window)?.scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 50) {
        $(".backto-top ").fadeIn(500);
    } else {
        $(".backto-top ").fadeOut(500);
    }

    if (this.scrollY > 10) {
        $(".header-section").addClass("nav-bg");
    } else {
        $(".header-section").removeClass("nav-bg");
    }
});

// counter-------------------->
let running = [];
const scrollAnimate = (event) => {
    const allData = document.querySelectorAll("[data-scroll-qs='scroll']");
    if (allData) {
        allData.forEach((item) => {
            const rect = item.getBoundingClientRect()?.y;
            if (rect - window.innerHeight <= 0 && rect >= 0) {
                if (running.indexOf(item) < 0) {
                    if (item.getAttribute("data-progress-qs")) {
                        let countdown = null;
                        const count = Number(item.getAttribute("data-progress-qs"));
                        const speed = Number(item.getAttribute("data-speed-qs"));
                        let startNumber = 0;
                        clearInterval(countdown);
                        countdown = setInterval(function () {
                            console.log(item);
                            item.style = `width:${startNumber}%`;
                            startNumber++;
                            if (startNumber > count) {
                                clearInterval(countdown);
                            }
                        }, speed / count);
                    }
                    if (item.getAttribute("data-count-qs")) {
                        let countdown = null;
                        const count = Number(item.getAttribute("data-count-qs"));
                        const valueType = item.getAttribute("data-type-qs");
                        const speed = Number(item.getAttribute("data-speed-qs"));
                        let startNumber = 0;
                        clearInterval(countdown);
                        countdown = setInterval(function () {
                            item.innerText = startNumber + valueType;
                            startNumber++;
                            if (startNumber > count) {
                                clearInterval(countdown);
                            }
                        }, speed / count);
                    }
                    running.push(item);
                }
            } else {
                running = running.filter((value) => value != item);
            }
        });
    }
};
window.addEventListener("load", (event) => {
    scrollAnimate(event);
});
window.addEventListener("scroll", (event) => {
    scrollAnimate(event);
});

// swiper-slider-------------------->
var swiper = new Swiper(".featured-swiper", {
    slidesPerView: 4,
    speed: 500,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".discount-swiper", {
    slidesPerView: 2,
    speed: 500,
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".discount-button-next",
        prevEl: ".discount-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".testimonial-swiper", {
    effect: "cards",
    direction: "vertical",
    grabCursor: true,
    loop: true,
});

var swiper = new Swiper(".testimonial-two-swiper", {
    slidesPerView: 1,
    speed: 500,
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
    pagination: {
        el: ".testimonial-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".hotel-swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
  });
  var swiper2 = new Swiper(".hotel-swiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".btn-next",

    },
  
    thumbs: {
      swiper: swiper,
    },
    
  });

// service-wrapper-------------------->
const servicer_wrappers = document.querySelectorAll(".service-wrapper");

servicer_wrappers.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        servicer_wrappers.forEach((wrapper) => {
            wrapper.classList.remove("is-active");
        });
    });

    item.addEventListener("mouseleave", (e) => {
        servicer_wrappers[2].classList.add("is-active");
    });
});

// range slider----------------------------------------
function priceslider() {
    if ($("#slider-tooltips").length > 0) {
        var tooltipSlider = document.getElementById("slider-tooltips");

        var formatForSlider = {
            from: function (formattedValue) {
                return Number(formattedValue);
            },
            to: function (numericValue) {
                return Math.round(numericValue);
            },
        };

        noUiSlider.create(tooltipSlider, {
            start: [18000, 50000.0],
            connect: true,
            format: formatForSlider,
            range: {
                min: 0.0,
                max: 60000.0,
            },
        });
        var formatValues = [document.getElementById("slider-margin-value-min"), document.getElementById("slider-margin-value-max")];
        tooltipSlider.noUiSlider.on("update", function (values, handle, unencoded) {
            formatValues[0].innerHTML = "Price: " + "$" + values[0];
            formatValues[1].innerHTML = "$" + values[1];
        });
    }
}
priceslider();

// image-uploader
let uploadImg = document.querySelector("#upload-img");
let inputFile = document.querySelectorAll(".input-item");
if (inputFile) {
    inputFile.onchange = function () {
        uploadImg.src = URL.createObjectURL(inputFile.files[0]);
    };
}

// custom-slider-------------------->
const slider = document.querySelector(".qs-wrapper");
if (slider) {
    for (let i = 0; i < slider.children.length; i++) {
        if (i == 0) {
            slider.children[i].classList.add("qs-slide-active");
            slider.children[i].setAttribute("data-index", i + 1);
        } else if (i == 1) {
            slider.children[i].classList.add("qs-slide-next");
            slider.children[i].setAttribute("data-index", i + 1);
        } else if (i == 2) {
            slider.children[i].classList.add("qs-slide-next-2");
            slider.children[i].setAttribute("data-index", i + 1);
        } else {
            slider.children[i].setAttribute("data-index", i + 1);
        }
    }
    const qsVSlider = () => {
        const activeSlide = slider.querySelector(".qs-slide-active");
        const nextSlide = slider.querySelector(".qs-slide-next");
        const nextSlide2 = slider.querySelector(".qs-slide-next-2");
        let lastIndex = Number(nextSlide2.getAttribute("data-index"));
        nextSlide2.classList.add("qs-slide-next");
        nextSlide.classList.add("qs-slide-active");
        activeSlide.classList.remove("qs-slide-active");
        nextSlide.classList.remove("qs-slide-next");
        nextSlide2.classList.remove("qs-slide-next-2");
        if (lastIndex == slider.children.length) {
            document.querySelectorAll(".qs-slide").forEach((element) => {
                if (element.getAttribute("data-index") == 1) {
                    element.classList.add("qs-slide-next-2");
                }
            });
            lastIndex = 1;
        } else {
            document.querySelectorAll(".qs-slide").forEach((element) => {
                if (element.getAttribute("data-index") == lastIndex + 1) {
                    element.classList.add("qs-slide-next-2");
                }
            });
            lastIndex += 1;
        }
    };
    const qsVSliderRev = () => {
        const activeSlide = slider.querySelector(".qs-slide-active");
        const nextSlide = slider.querySelector(".qs-slide-next");
        const nextSlide2 = slider.querySelector(".qs-slide-next-2");
        let lastIndex = Number(activeSlide.getAttribute("data-index"));
        activeSlide.classList.add("qs-slide-next");
        nextSlide.classList.add("qs-slide-next-2");
        nextSlide2.classList.remove("qs-slide-next-2");
        nextSlide.classList.remove("qs-slide-next");
        activeSlide.classList.remove("qs-slide-active");
        if (lastIndex == 1) {
            document.querySelectorAll(".qs-slide").forEach((element) => {
                if (element.getAttribute("data-index") == slider.children.length) {
                    element.classList.add("qs-slide-active");
                }
            });
            lastIndex = slider.children.length;
        } else {
            document.querySelectorAll(".qs-slide").forEach((element) => {
                if (element.getAttribute("data-index") == lastIndex - 1) {
                    element.classList.add("qs-slide-active");
                }
            });
            lastIndex -= 1;
        }
    };
    let autoPlay = setInterval(() => {
        qsVSlider();
    }, 5000);
    document.querySelector(".next-btn").addEventListener("click", () => {
        clearInterval(autoPlay);
        qsVSlider();
        autoPlay = setInterval(() => {
            qsVSlider();
        }, 5000);
    });
    document.querySelector(".prev-btn").addEventListener("click", () => {
        clearInterval(autoPlay);
        qsVSliderRev();
        autoPlay = setInterval(() => {
            qsVSlider();
        }, 5000);
    });
}
