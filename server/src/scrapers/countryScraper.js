import puppeteer from 'puppeteer';

export const countryScraper = async () => {
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
      // selecting specific data from table
      const country = row.querySelector("td:nth-child(2)");
      const population = row.querySelector("td:nth-child(3)");
      const populationChange = row.querySelector("td:nth-child(4)");
      const landArea = row.querySelector("td:nth-child(7)");
      return [country.innerText, population.innerText, populationChange.innerText, landArea.innerText];
    });
  });

  // formatting data
  for (const col of getTableData) {
    col[1] = Number(col[1].replaceAll(',',''));
    col[2] = col[2].replaceAll(' ', '');
    col[2] = Number(col[2].replaceAll('%', ''));
    col[3] = Number(col[3].replaceAll(',',''))
  }

  await browser.close();
  return getTableData;
}
