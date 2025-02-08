class Login{

    constructor(page){
this.page=page
this.username="#email1"
this.password="//*[@id='password1']"
this.submit="//*[text()='Sign in']"
}

async loginToApplication(){

    await this.page.fill(this.username,"admin@email.com")
    await this.page.fill(this.password,"admin@123")
    await this.page.click(this.submit);

}
}

module.exports=Login