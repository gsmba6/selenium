Feature: login to Loans
Description: testing the flow 

Scenario: login to personal loan application
Given user in home page
When user should enter the username "test1" and password "test2"
Then user should able to login successfully
And user should see success message

Scenario: login to personal loan application
Given user in home page
When user should enter the username "cool1" and password "cool2"
Then user should able to login successfully
And user should see success message