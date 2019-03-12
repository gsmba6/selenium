package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class personalLoan {
	
	
	@Given("^user in home page$")
	public void user_in_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("1");
	}

	@When("^user should enter the username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_should_enter_the_username_and_password(String arg1, String arg2) throws Throwable {
		 System.out.println("arguement 1 is "+arg1+" argument 2 is "+arg2);
	}

	@Then("^user should able to login successfully$")
	public void user_should_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 System.out.println("3");
	}

	@Then("^user should see success message$")
	public void user_should_see_success_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 System.out.println("4");
	}
}