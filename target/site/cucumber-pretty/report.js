$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Messenger.feature");
formatter.feature({
  "line": 2,
  "name": "Messenger page feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 3072109245,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on messenger page",
  "keyword": "Given "
});
formatter.match({
  "location": "MessengerSD.setMessengerPage()"
});
formatter.result({
  "duration": 2064106080,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@messenger"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter marcela@siliconelabs.com into username field on the messenger page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter test123 into password field on the messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button on messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "marcela@siliconelabs.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 38
    }
  ],
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 77883602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 42908595,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.clickOnSignButton()"
});
formatter.result({
  "duration": 672987062,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.verifySignInErrorMessage()"
});
formatter.result({
  "duration": 15294301327,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Webdriver waited for 15 seconds nut still could not find the element therefore TimeOutException has been thrown (tried for 15 second(s) with 1000 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:315)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat runnerTest.webPages.ElementUtil.webAction(ElementUtil.java:35)\n\tat runnerTest.webPages.ElementUtil.getTextFromElement(ElementUtil.java:71)\n\tat runnerTest.webPages.MessengerPage.getErrorMessage(MessengerPage.java:29)\n\tat stepdefinition.MessengerSD.verifySignInErrorMessage(MessengerSD.java:39)\n\tat ✽.Then I verify invalid login message on sign in page(Messenger.feature:12)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(), \u0027Incorrect Email\u0027)]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Marcelas-MBP.fios-router.home\u0027, ip: \u0027fe80:0:0:0:c5c:c893:2305:bc7c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/9s/99szrldn73b...}, goog:chromeOptions: {debuggerAddress: localhost:51043}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 031e8ca894469253467044fe24f29a46\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(), \u0027Incorrect Email\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat runnerTest.webPages.ElementUtil$1.apply(ElementUtil.java:37)\n\tat runnerTest.webPages.ElementUtil$1.apply(ElementUtil.java:35)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat runnerTest.webPages.ElementUtil.webAction(ElementUtil.java:35)\n\tat runnerTest.webPages.ElementUtil.getTextFromElement(ElementUtil.java:71)\n\tat runnerTest.webPages.MessengerPage.getErrorMessage(MessengerPage.java:29)\n\tat stepdefinition.MessengerSD.verifySignInErrorMessage(MessengerSD.java:39)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 877916451,
  "status": "passed"
});
});