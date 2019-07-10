this.LandingPage = $page("Landing Page",{
    administrationLink : "//div[@class='welcome-primary-link']/h3/a"
});

this.LoginPage = $page("Login Page" , {
    username: "input[id='username']",
    password: "input[id='password']",
    loginButton: "input[name='login']"
});

var landingPage = new LandingPage(driver);
landingPage.administrationLink.click();

var loginPage = new LoginPage(driver);
loginPage.waitForIt();




