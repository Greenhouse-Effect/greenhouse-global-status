import puppeteer from 'puppeteer';

(async () => {
  // launches an instance of a chrome browser
  const browser = await puppeteer.launch();
  // create an instance of a page within the browser
  const page = await browser.newPage();
  // go to the address in our newly opened tab
  await page.goto('https://www.worldometers.info/world-population/population-by-country/');
  // get the contents of the page using evaluate()
  const getTableData = await page.evaluate(() => {
    // gets the indices for each row (tr) in the data table 
    const tableRows = document.querySelectorAll(".table.table-striped.table-bordered.dataTable.no-footer tbody tr");
    // iterate over each index and retrieve the data in that row column by column
    return Array.from(tableRows, row => {
      const columns = row.querySelectorAll("td:nth-child(n+2):nth-child(-n+3");
      return Array.from(columns, td => td.innerText);
    });
  });
  
  console.log(getTableData);
  await browser.close();
})();
