describe('Rails using rails fixtures examples', function() {
  beforeEach(() => {
    cy.app('clean') // have a look at cypress/app_commands/clean.rb
  })

  it('loading all fixtures', function() {
    cy.appFixtures('all')
    cy.visit('/')
    cy.get('table').find('tbody').should(($tbody) => {
      expect($tbody).to.contain('MyRailsFixtures')
      expect($tbody).to.contain('MyRailsFixtures2')
    })
  })

  it('using single rails fixtures', function() {
    cy.appFixtures('posts')
    cy.visit('/')
    cy.get('table').find('tbody').should(($tbody) => {
      expect($tbody).to.contain('MyRailsFixtures')
      expect($tbody).to.contain('MyRailsFixtures2')
    })
  })

  it('using multiple rails fixtures', function() {
    cy.appFixtures('posts', 'favourite_things')
    cy.visit('/')
    cy.get('table').find('tbody').should(($tbody) => {
      expect($tbody).to.contain('MyRailsFixtures')
      expect($tbody).to.contain('MyRailsFixtures2')
    })
    cy.visit('/favourite_things')
    cy.get('table').find('tbody').should(($tbody) => {
      expect($tbody).to.contain('MyFavouriteThing1')
      expect($tbody).to.contain('MyFavouriteThing2')
    })
  })
})
