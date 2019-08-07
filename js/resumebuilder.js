var bio = {
    "name": "Souvik Zaminder",
    "role": "Senior System Engineer",
    "contacts": {
        "mobile": "8902459912",
        "email": "s.zaminder@gmail.com",
        "github": "https://github.com/szam25",
        
        "location": "kolkata",
        "LinkedIn": "https://www.linkedin.com/in/souvik-zaminder-929150ba/"
    },
    "welcomeMessage": "More than 2 years experienced Senior System Engineer with a demonstrated history of working in the information technology, skilled in Angular 6, HTML5, CSS, JavaScript, jQuery and Java with a Nano-degree focused in Front end Web Developer from Udacity.",
    "skills": ["Angular 6.0", "Javascript", "jQuery", "HTML5"],
    "biopic": "images/BioHomePic.png"
};


var education = {
    "schools": [
        {
            "name": " IIEST ",
            "location": "howrah",
            "degree": "M.tech",
            "majors": ["engineering"],
            "dates": "2014-2016",
            "url": "www.iiest.ac.in"
    
        },{
            "name": "Seacom Engineering College",
            "location": "howrah",
            "degree": "B.tech",
            "majors": ["engineering"],
            "dates": "2008-2012",
            "url": "http://www.seacomengineering.org"
    
        },{
        "name": " BaranagarRKMission ",
        "location": "kolkata",
        "degree": "secondary school",
        "majors": ["science"],
        "dates": "1996-2006",
        "url": "https://en.wikipedia.org/wiki/Baranagore_Ramakrishna_Mission_Ashrama_High_School"
    }],
    "onlineCourses": [{
        "title": "Front end Web Developer Nanodegree",
        "school": "udacity",
        "dates": "2015-2016",
        "url": "https://www.udacity.com/course"
    }],
};

var work = {
    "jobs": [{
        "employer": "Infosys Ltd.",
        "title": "Senior System Engineer",
        "location": "Bhubaneswar",
        "dates": "2017-2019",
        "description": "A Login page with success and error page overlay. Also contains forgot username, forgot password, and registration part with it."
    }]
};

var projects = {
    "projects": [{
            "title": "Angular 6.0",
            "dates": "2018-2019",
            "description": "Working user data searching application",
            "images": [""]
        },

        {
            "title": "HTML, CSS, JavaScripts, JQuery",
            "dates": "2017-2018",
            "description": "A Login page with success and error page overlay. Also contains forgot username, forgot password, and registration part with it.",
            "images": [""]

        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace('%data%', skill);
        $("#skills").append(formattedSkill);
    });


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedblog = HTMLblog.replace("%data%", bio.contacts.LinkedIn);

    $("#footerContacts, #topContacts").prepend(formattedMobile, formattedEmail, formattedLocation, formattedgithub,formattedblog);

};
education.display = function() {


    education.schools.forEach(function(school) {


        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formatedURL = HTMLschoolURL.replace("%data%", school.url);

        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);



    });



    education.onlineCourses.forEach(function(course) {

        $("#education").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formatteddates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedTitle, formattedSchool, formatteddates, formattedUrl);
    });

};
work.display = function() {

    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);

        $(".work-entry:last").append(formattedEmployer, formattedTitle, formattedDates, formattedDescription, formattedWorkLocation);



    });

};
projects.display = function() {

    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
            $('.project-entry:last').append(formattedProjectImage);
        });

        $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);


    });



};




work.display();
bio.display();
education.display();
projects.display();
