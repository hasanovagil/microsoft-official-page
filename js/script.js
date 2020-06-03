swipeImg();

function swipeImg() {
  var x = setInterval(() => {
    bannerCaseSwipe();
    bannerCase3Swipe();
  }, 13131);
}

function showNavigationMenu() {
  var navMenuMobileHidden = document.querySelector(".nav-menu-mobile");
  var burgerMenu = document.querySelector(".burger-menu");
  var closeMenu = document.querySelector(".close");

  if (
    !navMenuMobileHidden.style.display ||
    navMenuMobileHidden.style.display === "none"
  ) {
    burgerMenu.style.display = "none";
    closeMenu.style.display = "block";
    navMenuMobileHidden.style.display = "block";
  }
}

function closeNavigationMenu() {
  var navMenuMobileHidden = document.querySelector(".nav-menu-mobile");
  var burgerMenu = document.querySelector(".burger-menu");
  var closeMenu = document.querySelector(".close");

  if (
    !navMenuMobileHidden.style.display ||
    navMenuMobileHidden.style.display === "block"
  ) {
    closeMenu.style.display = "none";
    navMenuMobileHidden.style.display = "none";
    burgerMenu.style.display = "block";
  }
}

function showDropdownElements(dropdownContentDefaultHidden, dropdownContent, chevronDown) {
  if (
    !dropdownContent.style.display ||
    dropdownContent.style.display === "none"
  ) {
    dropdownContentDefaultHidden.style.display = "block";
    dropdownContent.style.display = "block";
    chevronDown.classList.remove("fa-chevron-down");
    chevronDown.classList.toggle("fa-chevron-up");
  } else {
    dropdownContentDefaultHidden.style.display = "none";
    dropdownContent.style.display = "none";
    chevronDown.classList.remove("fa-chevron-up");
    chevronDown.classList.toggle("fa-chevron-down");
  }
}

function showSoftware() {
  var dropdownContentDefaultHidden = document.getElementById("softwareDropdown");
  var dropdownContent = document.getElementById("softwareDropdownContent");
  var chevronDown = document.getElementById("softwareDropdownChevron");

  showDropdownElements(dropdownContentDefaultHidden, dropdownContent, chevronDown);
}

function showPCsDevices() {
  var dropdownContentDefaultHidden = document.getElementById("PCsDropdown");
  var dropdownContent = document.getElementById("PCsDropdownContent");
  var chevronDown = document.getElementById("PCsDropdownChevron");

  showDropdownElements(dropdownContentDefaultHidden, dropdownContent, chevronDown);
}

function showEntertainment() {
  var dropdownContentDefaultHidden = document.getElementById("entertainmentDropdown");
  var dropdownContent = document.getElementById("entertainmentDropdownContent");
  var chevronDown = document.getElementById("entertainmentDropdownChevron");


  showDropdownElements(dropdownContentDefaultHidden, dropdownContent, chevronDown);
}

function showBusiness() {
  var dropdownContentDefaultHidden = document.getElementById("businessDropdown");
  var dropdownContent = document.getElementById("businessDropdownContent");
  var chevronDown = document.getElementById("businessDropdownChevron");

  showDropdownElements(dropdownContentDefaultHidden, dropdownContent, chevronDown);
}

function showDeveloperIT() {
  var dropdownContentDefaultHidden = document.getElementById("developerITDropdown");
  var dropdownContent = document.getElementById("developerITDropdownContent");
  var chevronDown = document.getElementById("developerITDropdownChevron");

  showDropdownElements(dropdownContentDefaultHidden, dropdownContent, chevronDown);
}

function showOther() {
  var dropdownContentDefaultHidden = document.getElementById("otherDropdown");
  var dropdownContent = document.getElementById("otherDropdownContent");
  var chevronDown = document.getElementById("otherDropdownChevron");

  showDropdownElements(dropdownContentDefaultHidden, dropdownContent, chevronDown);
}

function bannerCaseSwipe() {
  var firstCase = document.querySelector(".banner-case .first-case");
  var secondCase = document.querySelector(".banner-case .second-case");
  var firstCaseHidden = document.querySelector(".banner-case-hidden .first-case-hidden");
  var secondCaseHidden = document.querySelector(".banner-case-hidden .second-case-hidden");

  if (firstCase.style.display === "none") {
    firstCase.style.display = "block";
    secondCase.style.display = "none";
    firstCaseHidden.style.display = "block";
    secondCaseHidden.style.display = "none";
  } else {
    firstCase.style.display = "none";
    secondCase.style.display = "block";
    firstCaseHidden.style.display = "none";
    secondCaseHidden.style.display = "block";
  }
}

function bannerCase3Swipe() {
  var firstCase = document.querySelector(".banner-case-3 .first-case");
  var secondCase = document.querySelector(".banner-case-3 .second-case");
  var firstCaseHidden = document.querySelector(".banner-case-3-hidden .first-case-hidden");
  var secondCaseHidden = document.querySelector(".banner-case-3-hidden .second-case-hidden");

  if (firstCase.style.display === "none") {
    firstCase.style.display = "block";
    secondCase.style.display = "none";
    firstCaseHidden.style.display = "block";
    secondCaseHidden.style.display = "none";
  } else {
    firstCase.style.display = "none";
    secondCase.style.display = "block";
    firstCaseHidden.style.display = "none";
    secondCaseHidden.style.display = "block";
  }
}
