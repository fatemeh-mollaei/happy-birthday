var theSummaries = new Array(
  "<p>دنیا آدم های بیشتری مثل تو می خواهد</p>\n<p>از همان ها که ستاره های پرنور شکار می کنند</p>\n<p>از آسمان هایی که به وقت غم تاریکی شان تکثیر شده است</p>\n<p>لبخند بزن سخاوت خدا</p>\n<p>فردا زمین به امید لبخند تو از خاکسترش بر می خیزد.</p>\n<p>مهدیه عزیزم تولدت مبارک همه مون...</p>\n<p>🎂🎉🎈</p>"
);
var theSiteLinks = new Array("");
// Control parameters
var theCharacterTimeout = 120;
var theStoryTimeout = 9000;
var theWidgetOne = "_";
var theWidgetTwo = "-";
var theWidgetNone = "";
var theItemCount = theSummaries.length;
var NS6 = document.getElementById && !document.all ? true : false;
// Ticker startup
function startTicker() {
  // Define run time values
  theCurrentStory = -1;
  theCurrentLength = 0;
  // Locate base objects
  if (document.getElementById) {
    runTheTicker();
  } else {
    document.write(
      "<style>.ticki{display:none;}.ticko{border:0px; padding:0px;}</style>"
    );
    return true;
  }
}
// Ticker main run loop
function runTheTicker() {
  var myTimeout;
  // Go for the next story data block
  if (theCurrentLength == 0) {
    theCurrentStory++;
    theCurrentStory = theCurrentStory % theItemCount;
    theStorySummary = theSummaries[theCurrentStory];
    theTargetLink = theSiteLinks[theCurrentStory];
  }

  var textTitle = theStorySummary.substring(0, theCurrentLength) + whatWidget();

  if (theTargetLink) {
    if (NS6) {
      document.getElementById("theTicker").innerHTML =
        '<a target="_self" style="font-size:11px; color:#ffcc00" href="' +
        theTargetLink +
        '" target="_top">' +
        textTitle +
        "</a>";
    } else {
      document.all.theTicker.innerHTML =
        '<a  target="_self" style="font-size:11px; color:#ffcc00" href="' +
        theTargetLink +
        '" target="_top">' +
        textTitle +
        "</a>";
    }
  } else {
    if (NS6) {
      document.getElementById("theTicker").innerHTML =
        "<span>" + textTitle + "</span>";
    } else {
      document.all.theTicker.innerHTML = "<span>" + textTitle + "</span>";
    }
  }

  // Modify the length for the substring and define the timer
  if (theCurrentLength != theStorySummary.length) {
    theCurrentLength++;
    myTimeout = theCharacterTimeout;
  } else {
    theCurrentLength = 0;
    myTimeout = theStoryTimeout;
  }
  // Call up the next cycle of the ticker
  setTimeout("runTheTicker()", myTimeout);
}

// Widget generator
function whatWidget() {
  if (theCurrentLength == theStorySummary.length) {
    return theWidgetNone;
  }

  if (theCurrentLength % 2 == 1) {
    return theWidgetOne;
  } else {
    return theWidgetTwo;
  }
}

startTicker();
