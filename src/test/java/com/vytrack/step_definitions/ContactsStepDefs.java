package com.vytrack.step_definitions;

import com.vytrack.pages.DashboardPage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

public class ContactsStepDefs {

    @Given("the user logged in as {string}")
    public void the_user_logged_in_as(String userType) {

        Driver.get().get(ConfigurationReader.get("url"));

        String username = null;
        String password = null;

        if (userType.equals("driver")) {

            username = ConfigurationReader.get("driver_username");
            password = ConfigurationReader.get("driver_password");

        } else if (userType.equals("sales_manager")) {

            username = ConfigurationReader.get("sales_manager_username");
            password = ConfigurationReader.get("sales_manager_password");


        } else if (userType.equals("store_manager")) {

            username = ConfigurationReader.get("store_manager_username");
            password = ConfigurationReader.get("store_manager_password");

        }

        new LoginPage().login(username, password);

    }

    @Then("the user should see following options")
    public void the_user_should_see_following_options(List<String> menuOptions) {

        BrowserUtils.waitFor(2);

        //Get the list of Web ELements and convert them to List of string and assert

        List<String> actualOptions = BrowserUtils.getElementsText(new DashboardPage().menuOptions);

        Assert.assertEquals(menuOptions,actualOptions);

        System.out.println("menuOptions = " + menuOptions);
        System.out.println("actualOptions = " + actualOptions);


    }

    @When("the user logs in with following credentials")
    public void the_user_logs_in_with_following_credentials(Map<String,String> userInfo) {

        System.out.println("userInfo = " + userInfo);

        //User map information to login and verify firstname and lastname

        new LoginPage().login(userInfo.get("username"),userInfo.get("password"));

        String actualName = new DashboardPage().getUserName();
        String expectedName = userInfo.get("firstname") +" "+ userInfo.get("lastname");

        Assert.assertEquals(expectedName,actualName);










    }

}
