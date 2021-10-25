import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

//First Test

test('Clicking the upper left square adds an X to the square', async () => {

    let cell = await (await driver).findElement(By.id('cell-0'))
    await cell.click()
})

//Second Test

test('Clicking the lower right square adds an X to the square', async () => {

    let bottomCell = await (await driver).findElement(By.id('cell-8'))
    await bottomCell.click()
   
})

//Third Test

test('Check to see that the computer moves (adds an O) to a square after clicking on a square.', async () => {
   
    driver.get('http://localhost:4000/')
    driver.navigate().refresh()
    await driver.sleep(2000)
    
    let start = await (await driver).findElement(By.id('start-game'));
    await start.click();
    
    let middleCell = await (await driver).findElement(By.id('cell-3'))
    await middleCell.click()

    let topCell = await (await driver).findElement(By.id('cell-0')).getText()
    expect(topCell).toBe('O') 
})

