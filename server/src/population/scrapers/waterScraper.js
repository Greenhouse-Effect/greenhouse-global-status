import puppeteer from 'puppeteer';

export const countryScraper = async () => {
  // launches an instance of a chrome browser
  const browser = await puppeteer.launch();
  // create an instance of a page within the browser
  const page = await browser.newPage();
  // go to the address in our newly opened tab
  await page.goto('https://www.worldometers.info/water/');
  // get the contents of the page using evaluate()
  const getTableData = await page.evaluate(() => {
    // gets the indices for each row (tr) in the data table 
    const tableRows = document.querySelectorAll(".table.table-striped.table-bordered.dataTable.no-footer tbody tr");
    // iterate over each index and retrieve the data in that row column by column
    return Array.from(tableRows, row => {
      // selecting specific data from table
      const country = row.querySelector("td:nth-child(2)");
      const dailyWater = row.querySelector("td:nth-child(4)");
      return [country.innerText, dailyWater.innerText];
    });
  });

  // formatting data
  for (const col of getTableData) {
    col[1] = Number(col[1].replaceAll(',',''));
  }

  await browser.close();
  return getTableData;
}
