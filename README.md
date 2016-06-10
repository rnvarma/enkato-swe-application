<h1>Youniversity SWE Intern Application</h1>

Youniversity’s mission is to enhance the quality of online videos by creating a better experience for students to watch the videos in. When creating an online education platform, it is a mix of designing features that can only be done in an online setting, while also pulling some of the techniques that are tried and tested in classic in-person educational settings.

One feature that will be a part of our video watching experience is the ability to ask questions while watching the video. This is because while students learning in a class, questions are used to clarify misunderstandings that may occur at any point during the lecture. Additionally, students often learn a lot from hearing other questions that students may have. However, current online videos do not support easy ways to clarify understanding during the video and instead are usually watched through to completion before questions are asked.

For this project we would like you to design and implement a system for asking questions within educational videos. The system should have the following functionality:

* Ability to ask questions at any point during the video
* Ability to view other questions asked around a given point in a video/on a specific topic in the video
* Ability to create responses to questions; there shouldn’t be a limit on the number of responses per question.
* … etc? Feel free to be creative and implement anything else that you think would be good/cool/helpful. 

You are provided with a base django-backend/react-frontend application that already allows users to embed Youtube videos and index them by topics. You should implement your question-asking functionality within the existing framework. The database is a local sqlite DB and the models for questions are already defined in backend/models.py. You may modify these as you see fit. Note: for simplicity we have excluded user login functionality so everything will be done anonymously. There is a field in the question/response table for “name” which you may include as part of the form to ask/respond to questions.

This is an extremely open ended project so there is no correct or incorrect way to do this. This project will be used to give us insight into three main things: 

1. your thought process around the design and how you think about online education
2. your ability to develop within an existing infrastructure 
3. your ability to problem-solve on your own and utilize resources to figure out technologies/methodologies that you may not have experience with already.

Additionally, don’t worry too much about the visual design. Focus on functionality and the user experience (i.e. how they interact and flow through the question-answering). 

<h2>Additional Resources</h2>

The following links are resources that you may find helpful to understanding the technologies involved. You will probably have to find more help from Googling but these can be a good starting point on broad topics:

* ReactJS tutorial: https://facebook.github.io/react/docs/tutorial.html
* Django docs: https://docs.djangoproject.com/en/1.9/
* Youtube Javascript API docs: https://developers.google.com/youtube/iframe_api_reference

<h2>Setup environment</h2>

First, setup a python virtualenv (<code>pip install virtualenv</code>) with the following command:

<code>virtualenv name_of_project</code>

Then go into the environment and activate it with the following command (for macs, pcs are something else):

<code>source bin/activate</code>

Now clone the repository into your virtualenv:

<code>git clone https://github.com/rnvarma/BaseReactDjangoApp</code>

Now change into the repository folder for the next steps.

<h2>Install dependencies</h2>

Run the following commands while your virtualenv is activated and you are in the top level directory of the repository:

<code>sudo pip install -r requirements.txt</code>

<code>npm install</code>

<h2>Configure Local Webpack Path (for mac/pc compatability)</h2>

Create a file in the top-level called 'mac-pc-compatability.js'.

If you are using a mac, paste the following code into the file: <code>module.exports = "."</code>

If you are using a pc, paste the following code into the file: <code>module.exports = "../.."</code>

<h2>Launch Server</h2>

To launch server you need to launch the webpack server + django server:

Webpack cmd (MAC): 

<code>./node_modules/.bin/webpack --config webpack.config.js --watch</code>

Webpack cmd (PC): first change directories into node_modules/.bin/ and run the following

<code>webpack --config ../../webpack-config.js --watch</code>

Django cmd: 

<code>python manage.py runserver</code>

