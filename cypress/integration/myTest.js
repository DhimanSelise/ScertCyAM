/// <reference types="Cypress" />

//const { type } = require('cypress/types/jquery');
const mydata = require('./config.json');



describe('Lets Start Dhiman',function(){
    
    it('Login',function(){
        cy.visit(mydata.URL.local);
        cy.get('[placeholder="Email"]').type(mydata.login.email);
        cy.get('[type="password"]').type(mydata.login.password);
        cy.get('[class="mat-select-trigger"]').click();
        cy.get('#mat-option-0 > .mat-option-text').click();
        cy.get('.submit-button').click();
        //cy.get(':nth-child(3) > #am-1255 > .showme').click();
    })

    // it('User Create', function(){

    //     // -------------------- Variable for User Create ---------------------------
    //     let optionSalutation = '[formcontrolname="Salutation"]';
    //     let linkUserTab = '[href="/user"]';
    //     let btnAddUser = '#addUserAM' ; 

    //     // ==================== Execution for User Create ==========================
    //     cy.wait(2000);
    //     cy.get(linkUserTab).click();
    //     cy.wait(6000);
    //     cy.get(btnAddUser).click();
    //     cy.get(optionSalutation).click();
    //     cy.get('span:contains("Mr.")').click();
    //     cy.get('[formcontrolname="FirstName"]').type('Dhiman');
    //     cy.get('[formcontrolname="LastName"]').type('Sarker');
    //     cy.get('[formcontrolname="Email"]').type('lalluDa1@yopmail.com');
    //     cy.get('.form-control').clear();
    //     cy.get('.form-control').type('+8801684216333');
    //     cy.get('[formcontrolname="KnownLanguages"]').click();
    //     cy.get('[role="option"]:nth-child(1)').click();
    //     cy.get('[role="option"]:nth-child(2)').click();
    //     cy.get('[formcontrolname="KnownLanguages"]').type('{esc}');
    //     cy.get('[formcontrolname="Email"]').click();
    //     cy.get('[placeholder="Organization Name "]').click();
    //     cy.get('[placeholder="Organization Name "]').type('test');
    //     cy.get('[role="option"]:nth-child(1)').click();
    //     cy.get('[formcontrolname="Designation"]').type('Goga');

    //     cy.get('[formcontrolname="Role"]').click();
    //     cy.get('[role="option"]:nth-child(1)').click();
    // })



    it('Add Client', function(){
        // ----------------- Variable for Add Client --------------------
        let linkClientTab = '[href="/clients"]';
        let btnAddClient = '#addClientAM' ; 
        let inputClientName = '[formcontrolname="ClientName"]';
        let inputNickName = '[formcontrolname="NickName"]' ; 
        let inputClientAddress = '#google-autoComplete-2' ; 
        let btnSaveClient = '#createClientSaveAM';

        // ================= Execution for Add Client ===================
        cy.get(linkClientTab).click();
        cy.wait(6000); 
        cy.get(btnAddClient).click();
        cy.get(inputClientName).type(mydata.client.name) ;
        //cy.get(inputNickName).type(mydata.client.nickName) ;  
        cy.get(inputClientAddress).type(mydata.client.address);
        cy.wait(2000);
        cy.get(inputClientAddress).type('{downArrow}');
        cy.get(inputClientAddress).type('{enter}');
        cy.wait(2000) ; 

        cy.get(btnSaveClient).click() ; 
        cy.wait(8000) ; 

    })

    it('Client Detailed Work', function(){
        // -----------------Variable  Client Detailed Work --------------------
        let linkClientTab = '[href="/clients"]';
        let fullListClint = 'datatable-body-row:nth-child(1)';

        //================== Execution for Client Detailed Work ===============
       // cy.get(linkClientTab).click();
        cy.wait(4000)
        cy.get(fullListClint).eq(1).click(); 
    })

    it("Add Manufacture", function(){
        let btnAddManudfactureClint = '#addManufacturerClientAM'; 
        let inputManufacturerName = '[formcontrolname="PlaceName"]'; 
        let inputManufacturerResponsible = '#primaryContactIdAM'; 
        let inputManufacturerEmail = '[formcontrolname="Email"]'; 
        let inputManufacturerDiffID = '[formcontrolname="ManufacturerDifferentiateId"]' ; 
        let inputManufacturerPhone = '#manufacturerPhoneAM div input' ; 
        let inputManufacturerAddress = '[id="google-autoComplete-4"]' ; 
        let btnManufacSave = '#createManufacturerSaveAM' ; 

        cy.get(btnAddManudfactureClint).click();
        cy.get(inputManufacturerName).type(mydata.client.manufacturer.name); 
     //   cy.get(inputManufacturerResponsible).type(mydata.client.manufacturer.contactPerson);
     //   cy.get(inputManufacturerEmail).type(mydata.client.manufacturer.email);
     //   cy.get(inputManufacturerDiffID).type(mydata.client.manufacturer.id) ; 
        
        cy.get(inputManufacturerPhone).clear() ; 
        cy.get(inputManufacturerPhone).type(mydata.client.manufacturer.phone); 

        cy.get(inputManufacturerAddress).type(mydata.client.manufacturer.address);
        cy.wait(3000); 
        cy.get(inputManufacturerAddress).type('{downArrow}');
        cy.get(inputManufacturerAddress).type('{enter}');
        cy.wait(3000) ; 
        cy.get(btnManufacSave).click();
    })

    it('Add Site', function(){
        let btnAddSite = '#addSiteClientAM' ; 
        let inputSiteName = '#siteNameClientAM' ; 
        let inputManufacerName = '#manufacturerIdClientAM'; 
        let inputSiteResponsible = '#siteResponsibleClientAM' ; 
        let inputSiteId = '#siteDifferentiateIdAM' ; 
        let inputSiteAddress = '#google-autoComplete' ; 
        let btnSiteSave = '#createSiteSaveAM' ; 

        
        cy.get(btnAddSite).click(); 
        cy.get(inputSiteName).type(mydata.client.site.name) ; 
        cy.get(inputManufacerName).type(mydata.client.site.manufacturerName);
        cy.get(inputSiteResponsible).type(mydata.client.site.siteResponsible);


        cy.get('#manufacturerIdClientAM').type("4568") ; 


    })

    // it('Create Project', function(){
    //     cy.get('[href="/projects"]').click();
    //     cy.get('#add-project').click();
    //     cy.get('#manufacturer_name').type('Demo Manufac'); 
    //     cy.get('[formcontrolname="SiteData"]').type('Site Name'); 

    // })

    mydata.client.sign.person1

})