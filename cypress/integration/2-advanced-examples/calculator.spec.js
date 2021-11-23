describe ("should check basic calculations", () => {

it("should check that 7+2 equals 9", () => {

    cy.visit("http://127.0.0.1:5501/")
    
    cy.get("#keys__7").click()
    //cy.wait(300)
    cy.get("#keys__plus").click()
    //cy.wait(300)
    cy.get("#keys__2").click()
    //cy.wait(300)
    cy.get("#keys__equal").click()
    
    cy.get("#screen").should("contain", "9")
})

it("should check that 99.9+0.1 equals 100", () => {

    cy.visit("http://127.0.0.1:5501/")

    cy.get("#keys__9").click()
    cy.get("#keys__9").click()
    cy.get("#keys__dot").click()
    cy.get("#keys__9").click()
    cy.get("#keys__plus").click()
    cy.get("#keys__0").click()
    cy.get("#keys__dot").click()
    cy.get("#keys__1").click()
    cy.get("#keys__equal").click()
    
    cy.get("#screen").should("contain", "100")
})

it("should check that 7/2 equals 3.5", () => {

    cy.visit("http://127.0.0.1:5501/")
    
    cy.get("#keys__7").click()
    //cy.wait(300)
    cy.get("#keys__divide").click()
    //cy.wait(300)
    cy.get("#keys__2").click()
    //cy.wait(300)
    cy.get("#keys__equal").click()
    
    cy.get("#screen").should("contain", "3.50")
})

it("should check that 7*2 equals 14", () => {

    cy.visit("http://127.0.0.1:5501/")
    
    cy.get("#keys__7").click()
    cy.get("#keys__multiply").click()
    cy.get("#keys__2").click()
    cy.get("#keys__equal").click()
    
    cy.get("#screen").should("contain", "14")
})

it("should check that 7-2 equals 5", () => {

    cy.visit("http://127.0.0.1:5501/")
    
    cy.get("#keys__7").click()
    cy.get("#keys__minus").click()
    cy.get("#keys__2").click()
    cy.get("#keys__equal").click()
    
    cy.get("#screen").should("contain", "5")
})

it("should check that 72-2 equals 70", () => {

    cy.visit("http://127.0.0.1:5501/")
    
    cy.get("#keys__7").click()
    cy.get("#keys__2").click()
    cy.get("#keys__minus").click()
    cy.get("#keys__2").click()
    cy.get("#keys__equal").click()
    
    cy.get("#screen").should("contain", "70")
})


it("should check that 99999+1 equals 100000", () => {

    cy.visit("http://127.0.0.1:5501/")
    
    cy.get("#keys__9").click()
    cy.get("#keys__9").click()
    cy.get("#keys__9").click()
    cy.get("#keys__9").click()
    cy.get("#keys__9").click()
    cy.get("#keys__plus").click()
    cy.get("#keys__1").click()
    cy.get("#keys__equal").click()
    
    cy.get("#screen").should("contain", "100000")
})
})

describe ("should check delete and clear function", () => {

    it("should check delete last digit of 752 to get 72", () => {
    
        cy.visit("http://127.0.0.1:5501/")
    
        cy.get("#keys__7").click()
        cy.get("#keys__2").click()
        cy.get("#keys__5").click()
        cy.get("#keys__ac").click()
        
        cy.get("#screen").should("contain", "72")
    })

    it("should check clear function", () => {
    
        cy.visit("http://127.0.0.1:5501/")
    
        cy.get("#keys__7").click()
        //cy.wait(300)
        cy.get("#keys__2").click()
        //cy.wait(300)
        cy.get("#keys__5").click()
        //cy.wait(300)
        cy.get("#keys__ac").dblclick()
        
        cy.get("#screen").should("contain", "")
    })
})

describe ("should check calculations with polarities", () => {

    it("should change polarity of 725 to get -725", () => {
    
        cy.visit("http://127.0.0.1:5501/")
    
        cy.get("#keys__7").click()
        cy.get("#keys__2").click()
        cy.get("#keys__5").click()
        cy.get("#keys__polarity").click()
        
        cy.get("#screen").should("contain", "-725")
    })

    it("should check -725+1 to get -724", () => {
    
        cy.visit("http://127.0.0.1:5501/")
    
        cy.get("#keys__7").click()
        cy.get("#keys__2").click()
        cy.get("#keys__5").click()
        cy.get("#keys__polarity").click()
        cy.get("#keys__plus").click()
        cy.get("#keys__1").click()
        cy.get("#keys__equal").click()
        
        cy.get("#screen").should("contain", "-724")
    })

})

describe ("should check calculations with percentage", () => {

    it("should check percentage", () => {
    
        cy.visit("http://127.0.0.1:5501/")
    
        cy.get("#keys__7").click()
        cy.get("#keys__2").click()
        cy.get("#keys__5").click()
        cy.get("#keys__percent").click()
        
        cy.get("#screen").should("contain", "7.25")
    })

    it("should check 725% + 1 equals 8.25", () => {
    
        cy.visit("http://127.0.0.1:5501/")
    
        cy.get("#keys__7").click()
        cy.get("#keys__2").click()
        cy.get("#keys__5").click()
        cy.get("#keys__percent").click()
        cy.get("#keys__plus").click()
        cy.get("#keys__1").click()
        cy.get("#keys__equal").click()
        
        cy.get("#screen").should("contain", "8.25")
    })
})