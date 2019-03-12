$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login to Loans",
  "description": "Description: testing the flow",
  "id": "login-to-loans",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "login to personal loan application",
  "description": "",
  "id": "login-to-loans;login-to-personal-loan-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user should enter the username \"test1\" and password \"test2\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user should see success message",
  "keyword": "And "
});
formatter.match({
  "location": "personalLoan.user_in_home_page()"
});
formatter.result({
  "duration": 131863137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 32
    },
    {
      "val": "test2",
      "offset": 53
    }
  ],
  "location": "personalLoan.user_should_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 3763721,
  "status": "passed"
});
formatter.match({
  "location": "personalLoan.user_should_able_to_login_successfully()"
});
formatter.result({
  "duration": 1755749,
  "status": "passed"
});
formatter.match({
  "location": "personalLoan.user_should_see_success_message()"
});
formatter.result({
  "duration": 230324,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "login to personal loan application",
  "description": "",
  "id": "login-to-loans;login-to-personal-loan-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user should enter the username \"cool1\" and password \"cool2\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user should see success message",
  "keyword": "And "
});
formatter.match({
  "location": "personalLoan.user_in_home_page()"
});
formatter.result({
  "duration": 282430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cool1",
      "offset": 32
    },
    {
      "val": "cool2",
      "offset": 53
    }
  ],
  "location": "personalLoan.user_should_enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 677001,
  "status": "passed"
});
formatter.match({
  "location": "personalLoan.user_should_able_to_login_successfully()"
});
formatter.result({
  "duration": 188413,
  "status": "passed"
});
formatter.match({
  "location": "personalLoan.user_should_see_success_message()"
});
formatter.result({
  "duration": 59657,
  "status": "passed"
});
});