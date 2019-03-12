package cucuOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/feature",
		glue="stepDefinition",
		monochrome=true,
		plugin= {"json:target/cucumber-report.json"}
		)
public class Runner {

}
