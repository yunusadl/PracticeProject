$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTypes.feature");
formatter.feature({
  "name": "Account Types",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Store manager user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\", \"Contacts\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Different user types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user logged in as \"\u003cuserType\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType"
      ]
    },
    {
      "cells": [
        "driver"
      ]
    },
    {
      "cells": [
        "store_manager"
      ]
    },
    {
      "cells": [
        "sales_manager"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Different user types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Different user types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Users should be able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as a driver",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@driver"
    }
  ]
});
formatter.step({
  "name": "the user enters the driver information",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_driver_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as a sales manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@salesmanager"
    }
  ]
});
formatter.step({
  "name": "the user enters the sales manager information",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_sales_manager_informatione()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as store manager",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@storemanager"
    },
    {
      "name": "@VYT-123"
    }
  ]
});
formatter.step({
  "name": "the user enters the store manager information",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_enters_the_store_manager_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});