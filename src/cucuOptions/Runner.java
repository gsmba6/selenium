package cucuOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/feature",
		glue="stepDefinition",
		monochrome=true,
		format = "json:target/test.json"
		)
public class Runner {

}