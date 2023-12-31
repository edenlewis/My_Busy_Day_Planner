// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $('.saveBtn').on('click', function () {
    var key = $(this).parent().attr('id')
    var value = $(this).siblings('textarea').val()

    localStorage.setItem(key, value)
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().hour()
  console.log(currentHour)
  var elements = document.querySelectorAll('.time-block')
  console.log(elements)
  let allTimes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  // if current is current time is >the time on the to do then set color to gray 
  // = set to red
  // <set to green
  // for loop over elements change css elements hard 
  // code times in html 
  for (let i = 0; i < allTimes.length; i++) {

    if (currentHour > allTimes[i]) {

     
      $(`#hour-${allTimes[i]}`).attr('class', 'row time-block past')

    }else if (currentHour == allTimes[i]){
      $(`#hour-${allTimes[i]}`).attr('class', 'row time-block present')
    }
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});
