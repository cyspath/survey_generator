
## How to use
* You may add additional options to your survey question by clicking on "+ Add an Option".
* After you finished write a question, click on "Add Question to Your Survey".
* Make sure to give a question as well as corresponding options, or browser will yell at you.
* "Take Survey" button will take you to your survey, go ahead and take it.
* After you take the survey, a summary of your results will be shown to you.

## Technical
* There are currently four types of survey question types (open-ended, dropdown, radio-button, and checkbox). Each type inherits from the parent SurveyObject object, which has most of the methods.
* Instance of class YourSurvey is invoked upon page load, and it will contain a array of survey objects inherits from SurveyObject class.
