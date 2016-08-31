var bio = {
	"name" : "Paisley Singh",
	"role" : "Web Developer in Training",
	"contacts" : {
		"mobile" : "(954) 599-1881",
		"email" : "paisley.singh@gmail.com",
		"github" : "aisleypay",
		"location" : "Stamford, CT"
	},
	"bioPic" : ["https://gentlemanotoku.files.wordpress.com/2014/06/rurouni-kenshin-oro.jpg"],
	"welcomeMessage" : "Please take a look at my resume! There are some fun facts about me on in it!",
	"skills" : ["world domination", "watching anime", "reading", "HTML", "CSS"]
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLocation);

  $("#header").append(formattedPic);
  $("#header").append(formattedWelcome);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (skill = 0; skill < bio.skills.length; skill++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

bio.display();
//creating an object and adding properties to it using dot notation

var work = {
	"jobs" : [
		{
			"title" : "Analyst",
			"employer" : "Deloitte",
			"dates" : "2014 - Present",
			"location" : "Stamford, CT",
			"description" : "Take numbers on pieces of paper, rearrange them and put them on different pieces of paper"
		},
		{
			"title" : "Business Dev Associate",
			"employer" : "Lincoln Healthcare Group",
			"dates" : "2013-2014",
			"location" : "Norwalk, CT",
			"description" : "Explain big words to sales people and then cower before customers while trying to convince them that the sales people really didn’t say what the customers understood"
		},
		{
			"title" : "Intern",
			"employer" : "Emerging Strategy",
			"dates" : "2012-2013",
			"location" : "Shanghai, China",
			"description" : "Coducted new market analysis for western companies looking to enter BRIC country markets"
		}
	]
};

work.display = function() {
  for (job = 0; job < work.jobs.length; job++) {

    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};

work.display();

var education = {
	"schools" : [
		{
			"school" : "Bryn Mawr College",
			"location" : "Bryn Mawr, PA",
			"degree": "BA",
			"major" : "East Asian Studies",
			"dates" : "2009 - 2013"
		},
		{
			"name" : "Boyd H. Anderson High School",
			"location" : "Lauderdale Lakes, FL",
			"degree" : "High School",
			"major" : "N/A",
			"dates" : "2005 - 2009"
		}
	],
	"onlineCourses" : [
    {
      "school" : "Udacity",
      "title" : "Intro to Programming",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
    ]
};

education.display = function() {
  for (edu = 0; edu < education.schools.length; edu++) {

    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[edu].school).replace("#", education.schools[edu].url);
    $(".education-entry:last").append(formattedSchool);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    $(".education-entry:last").append(formattedDegree + formattedDates);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].major);
    $(".education-entry:last").append(formattedMajor);
  }

  $(".education-entry:last").append(HTMLonlineClasses);

  for (online = 0; online < education.onlineCourses.length; online++) {

    var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedTitle);

    var formattedOnline = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    $(".education-entry:last").append(formattedOnline);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedURL);
  }
};

education.display();

var projects = {
	"dance" : [
		{
			"title" : "Alarripuu",
			"date" : "January 12, 2015",
			"description" : "First dance every Bharatanatyum dancer learns",
			"projectImg" : ["http://0bharatanatyam.wordpress.com/files/2009/08/bharatanatyam_1h_s.jpg"]
		},
		{
			"title" : "Jathiswaram",
			"date" : "July 15, 2016",
			"description" : "Jathiswaram is a convergence of the charm of melody, the excitement of meter, and the beauty of abstract dance movement. The technical dance sentences, or jathis, are choreographed to perfectly interweave with the swaram, or melodic, passages.",
			"projectImg": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlL0iwpq_nBenGXJ3efcZtoPqSHKkxfemDPWm36bI0aGKs5FS"]
		}
	]
};

projects.display = function() {
	for (project in projects.dance){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.dance[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectdates = HTMLprojectDates.replace("%data%",projects.dance[project].date);
		$(".project-entry:last").append(formattedProjectdates);

		var formattedProjectdescription = HTMLprojectDescription.replace("%data%", projects.dance[project].description);
		$(".project-entry:last").append(formattedProjectdescription);

		if(projects.dance[project].projectImg.length > 0){
			for (image in projects.dance[project].projectImg){
				var formattedProjectimg = HTMLprojectImage.replace("%data%", projects.dance[project].projectImg);
				$(".project-entry:last").append(formattedProjectimg);
			}		
		}
	}	
};

projects.display();

$("#main").append(internationalizeButton);

function inName(oldName) {
  var words = oldName.trim().split(" ");
  var finalName = [];

  var temp = words[0].toLowerCase();
  temp = temp.charAt(0).toUpperCase() + temp.substring(1);
  finalName.push(temp);
  
  finalName = finalName + " " + words[1].toUpperCase();

  return finalName;
};

$("#mapDiv").append(googleMap);



